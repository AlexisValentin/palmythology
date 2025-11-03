/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
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
				],
			},
		];
	},
};

module.exports = nextConfig;
