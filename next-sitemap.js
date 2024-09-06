/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vintagetoons',
  generateRobotsTxt: true,
  exclude: ['/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://vintagetoons/sitemap.xml'],
  },
};
