"use client";

import { apiPlugin, storyblokInit } from "@storyblok/react";

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
	use: [apiPlugin],
});
const StoryblokProvider = ({ children }: { children: React.ReactNode }) => {
	return children;
};

export default StoryblokProvider;
