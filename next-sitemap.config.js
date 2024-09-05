/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pk-sites.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://pk-sites.vercel.app/sitemap.xml'],
  },
};
