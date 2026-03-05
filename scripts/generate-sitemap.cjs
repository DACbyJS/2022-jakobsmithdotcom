const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SITE_CONFIG_PATH = path.join(ROOT_DIR, 'lib/constants/siteConfig.json');
const PAGE_DATA_PATH = path.join(ROOT_DIR, 'lib/constants/pageData.js');
const SERVICES_DATA_PATH = path.join(ROOT_DIR, 'lib/constants/servicesData.js');
const SITEMAP_PATH = path.join(ROOT_DIR, 'public/sitemap.xml');

const { siteUrl } = JSON.parse(fs.readFileSync(SITE_CONFIG_PATH, 'utf8'));
const SITE_URL = siteUrl.replace(/\/+$/, '');

const normalizePath = (pathname = '/') => {
  if (!pathname) return '/';
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (withLeadingSlash === '/') return '/';
  const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, '');
  return `${withoutTrailingSlash}/`;
};

const getStaticPageRoutes = () => {
  const fileContent = fs.readFileSync(PAGE_DATA_PATH, 'utf8');
  const hrefRegex = /href:\s*["']([^"']+)["']/g;
  const routes = new Set();

  let match;
  while ((match = hrefRegex.exec(fileContent)) !== null) {
    if (match[1]) {
      routes.add(normalizePath(match[1]));
    }
  }

  return Array.from(routes);
};

const getServiceDetailRoutes = () => {
  const fileContent = fs.readFileSync(SERVICES_DATA_PATH, 'utf8');
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const slugs = new Set();

  let match;
  while ((match = slugRegex.exec(fileContent)) !== null) {
    if (match[1]) {
      slugs.add(match[1]);
    }
  }

  return Array.from(slugs).map((slug) => normalizePath(`/services/${slug}`));
};

const getPriority = (route) => {
  const routeWithoutTrailingSlash = route === '/' ? '/' : route.replace(/\/+$/, '');
  if (routeWithoutTrailingSlash === '/') return '1.0';
  if (routeWithoutTrailingSlash === '/services') return '0.8';
  if (routeWithoutTrailingSlash.startsWith('/services/')) return '0.7';
  if (
    routeWithoutTrailingSlash === '/website-designers'
    || routeWithoutTrailingSlash === '/digital-marketing'
    || routeWithoutTrailingSlash === '/public-good'
  ) return '0.8';
  return '0.7';
};

const buildUrlEntry = (route, lastmod) => {
  const normalizedRoute = normalizePath(route);
  const loc = normalizedRoute === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedRoute}`;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '    <changefreq>monthly</changefreq>',
    `    <priority>${getPriority(route)}</priority>`,
    '  </url>',
  ].join('\n');
};

const generateSitemap = () => {
  const lastmod = new Date().toISOString();
  const staticRoutes = getStaticPageRoutes();
  const serviceRoutes = getServiceDetailRoutes();

  const allRoutes = Array.from(new Set([...staticRoutes, ...serviceRoutes])).sort((a, b) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  });

  const body = allRoutes.map((route) => buildUrlEntry(route, lastmod)).join('\n');
  const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log(`Sitemap generated with ${allRoutes.length} URLs at ${SITEMAP_PATH}`);
};

generateSitemap();