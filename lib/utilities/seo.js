import siteConfig from "../constants/siteConfig.json";

export const SITE_URL = siteConfig.siteUrl.replace(/\/+$/, "");

export const normalizePath = (pathname = "/") => {
  if (!pathname) return "/";

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (withLeadingSlash === "/") return "/";

  const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, "");
  return `${withoutTrailingSlash}/`;
};

export const getCanonicalUrl = (pathname = "/") => {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
};