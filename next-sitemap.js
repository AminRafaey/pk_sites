/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dojoplus.site',
  generateRobotsTxt: true,
  exclude: ['/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://dojoplus.site/sitemap.xml'],
  },
};
