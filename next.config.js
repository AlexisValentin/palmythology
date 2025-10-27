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
		];
	},
};

module.exports = nextConfig;
