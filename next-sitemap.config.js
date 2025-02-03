/** @type {import('next-sitemap').IConfig} */

const appURL = process.env.NEXT_PUBLIC_APP_URL;
const appSubPathPrefix = process.env.NEXT_PUBLIC_APP_SUBPATH_PREFIX;

module.exports = {
  siteUrl: `${appURL || 'https://example.com'}${appSubPathPrefix || ''}`,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  changefreq: false,
  priority: false,
};
