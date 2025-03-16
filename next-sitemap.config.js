
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aircoinstallatiekerkrade.nl",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      "https://aircoinstallatiekerkrade.nl/sitemap-locations.xml",
      "https://aircoinstallatiekerkrade.nl/sitemap-services.xml",
    ],
  },
  exclude: ['/404', '/500', '/offline'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
}
