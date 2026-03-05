const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://jakobsmith.com';
const ROOT_DIR = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT_DIR, 'pages');
const SERVICES_DATA_PATH = path.join(ROOT_DIR, 'lib/constants/servicesData.js');
const SITEMAP_PATH = path.join(ROOT_DIR, 'public/sitemap.xml');

const EXCLUDED_PAGE_FILES = new Set(['_app.js', '_document.js', '404.js']);

const collectStaticPageRoutes = () => {
  const routes = [];

  const walk = (dir, prefix = '') => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath, `${prefix}/${entry.name}`);
        continue;
      }

      if (!entry.name.endsWith('.js') || EXCLUDED_PAGE_FILES.has(entry.name)) {
        continue;
      }

      if (entry.name.includes('[')) {
        continue;
      }

      const fileNameWithoutExt = entry.name.replace(/\.js$/, '');
      const route = fileNameWithoutExt === 'index'
        ? (prefix || '/')
        : `${prefix}/${fileNameWithoutExt}`;

      routes.push(route.replace(/\/+/g, '/'));
    }
  };

  walk(PAGES_DIR);

  return Array.from(new Set(routes));
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

  return Array.from(slugs).map((slug) => `/services/${slug}`);
};

const getPriority = (route) => {
  if (route === '/') return '1.0';
  if (route === '/services') return '0.8';
  if (route.startsWith('/services/')) return '0.7';
  if (route === '/website-designers' || route === '/digital-marketing' || route === '/public-good') return '0.8';
  return '0.7';
};

const buildUrlEntry = (route, lastmod) => {
  const loc = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
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
  const staticRoutes = collectStaticPageRoutes();
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