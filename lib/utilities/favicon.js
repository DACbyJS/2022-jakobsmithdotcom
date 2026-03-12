export const getSiteFaviconUrl = (siteUrl, size = 32) => {
  if (!siteUrl) return "";

  try {
    const { hostname } = new URL(siteUrl);
    const encodedHost = encodeURIComponent(hostname);
    return `https://www.google.com/s2/favicons?domain=${encodedHost}&sz=${size}`;
  } catch {
    return "";
  }
};