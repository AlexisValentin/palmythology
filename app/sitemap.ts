import type { MetadataRoute } from "next";
import { fetchAvailableCards } from "../src/utils/cms/cms.requests";
import { URLS } from "../src/utils/url.constants";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const { STATIC, PANTHEONS, SUBJECTS } = URLS;

	const availableCards = await fetchAvailableCards();

	const staticsMapping = STATIC.map((url) => ({
		url,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.5,
	}));

	const pantheonsMapping = PANTHEONS.map((url) => ({
		url,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.8,
	}));

	const subjectsMapping = SUBJECTS.map((url) => ({
		url,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.7,
	}));

	const cardsMapping = availableCards.map((card) => ({
		url: `https://palmythology.com/${card.slug}`,
		lastModified: new Date(card.published_at),
		changeFrequency: "weekly" as const,
		priority: 1,
	}));

	return [
		...staticsMapping,
		...pantheonsMapping,
		...subjectsMapping,
		...cardsMapping,
	];
};

export default sitemap;
