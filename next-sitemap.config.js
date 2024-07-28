module.exports = {
	siteUrl: 'https://binan-cookie.vercel.app',
	generateRobotsTxt: true,
	sitemapSize: 7000,
	changefreq: 'daily',
	priority: 0.7,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/' }],
	},
};
