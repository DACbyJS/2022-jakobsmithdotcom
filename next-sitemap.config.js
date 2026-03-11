/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jakobsmith.com',
  generateRobotsTxt: true,
  outDir: './out',
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
  },
};
