/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [{ protocol: "https", hostname: "a.storyblok.com" }],
	},
	env: {
		STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
		STORYBLOK_BASE_URL: process.env.STORYBLOK_BASE_URL,
	},
	redirects: () => {
		return [
			{
				source: "/cards/egyptian/hator",
				destination: "/cards/egyptian/hathor",
				permanent: true,
			},
			{
				source: "/changelog",
				destination: "/about",
				permanent: true,
			},
			{
				source:
					"/cards/:pantheon(greek|egyptian|roman|norse|celtic|japanese|chinese|mayan|mesopotamian|aztec|hindu)",
				destination: "/pantheons/:pantheon",
				permanent: true,
			},
			{
				source: "/:path*",
				has: [{ type: "host", value: "www.palmythology.com" }],
				destination: "https://palmythology.com/:path*",
				permanent: true,
			},
		];
	},
	headers: async () => {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "DENY" },
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Content-Security-Policy",
						value:
							"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.lepalmypede.eu; style-src 'self' 'unsafe-inline'; img-src 'self' https://a.storyblok.com data:; font-src 'self'; connect-src 'self' https://api.storyblok.com https://analytics.lepalmypede.eu; frame-ancestors 'none';",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
