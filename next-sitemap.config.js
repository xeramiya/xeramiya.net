module.exports = {
  siteUrl: 'https://www.uebit.tk',
  generateRobotsTxt: true,
  outDir: './public/sitemap/',
  exclude: ['/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://uebit.tk/sitemap.xml', // <==== Add here
    ],
  },
}
