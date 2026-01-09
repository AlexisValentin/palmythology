"use server";

import { unstable_cache } from "next/cache";
import type { CardDetails, ResearchCriterias } from "../cards/card.constants";
import type { GodleEntity, GodleProperties } from "../godle/godle.types";
import { parseStringToSlug, replaceHyphenByDashes } from "../string";
import { getCacheTags } from "./cache";
import { getStoryblokBaseUrl, getStoryblokToken } from "./cms";
import {
	type AvailableCardForSitemap,
	type GodlePropertiesType,
	type Quoi2NeufStoryType,
	STORYBLOK_MAX_ITEMS_PER_REQUEST,
	STORYBLOK_RESULTS_PER_PAGE,
	STORYBLOK_SITEMAP_MAX_ITEMS,
	STORYBLOK_VERSIONS,
	type StoryblokCardComponentType,
	type StoryblokQ2NComponentType,
	type StoryblokStoryResponse,
} from "./cms.constants";

const fetchCardsFromString = async (startingString: string) => {
	const response = await fetch(
		`${getStoryblokBaseUrl()}?starts_with=${startingString}&token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}&per_page=${STORYBLOK_MAX_ITEMS_PER_REQUEST}`,
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
};

const fetchLatestCards = async () => {
	const response = await fetch(
		`${getStoryblokBaseUrl()}?token=${getStoryblokToken()}&version=${
			STORYBLOK_VERSIONS.PUBLISHED
		}&starts_with=card&sort_by=published_at:desc&per_page=${STORYBLOK_RESULTS_PER_PAGE}&page=1`,
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
};

const fetchFilteredCards = async (
	startingString: string,
	searchCriterias: ResearchCriterias,
	currentPage: number,
) => {
	const { pantheon, subject } = searchCriterias;

	const response = await fetch(
		`${getStoryblokBaseUrl()}?starts_with=${startingString}&token=${getStoryblokToken()}&version=${
			STORYBLOK_VERSIONS.PUBLISHED
		}&per_page=${STORYBLOK_RESULTS_PER_PAGE}&page=${currentPage}&${
			pantheon && `filter_query[pantheon][in]=${pantheon}`
		}&${subject && `filter_query[subject][in]=${subject}`}`,
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();

	return {
		total: Number(response.headers.get("total")),
		stories: data.stories,
	};
};

export const generateCardSlug = async (cardName?: string, pantheon?: string) =>
	!cardName || !pantheon
		? ""
		: `cards/${parseStringToSlug(pantheon)}/${parseStringToSlug(cardName)}`;

export const fetchSpecificCard = async (title: string, pantheon: string) => {
	const cacheTags = await getCacheTags();

	const requestSpecificCard = async (title: string, pantheon: string) => {
		const response = await fetch(
			`${getStoryblokBaseUrl()}cards/${pantheon}/${replaceHyphenByDashes(title)}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return response.json();
	};

	return unstable_cache(
		async () => requestSpecificCard(title, pantheon),
		["card-story", pantheon, title],
		{
			tags: [cacheTags.CARDS.TAG, cacheTags.ALL.TAG],
			revalidate: cacheTags.CARDS.DURATION,
		},
	)();
};

export const fetchSpecificPantheon = async (pantheon: string) => {
	const cacheTags = await getCacheTags();

	const requestSpecificPantheon = async (pantheon: string) => {
		const response = await fetch(
			`${getStoryblokBaseUrl()}pantheons/${pantheon}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return response.json();
	};

	return unstable_cache(
		async () => requestSpecificPantheon(pantheon),
		["pantheon-story", pantheon],
		{
			tags: [cacheTags.PANTHEONS.TAG, cacheTags.ALL.TAG],
			revalidate: cacheTags.PANTHEONS.DURATION,
		},
	)();
};

export const fetchSpecificSubject = async (subject: string) => {
	const cacheTags = await getCacheTags();

	const requestSpecificSubject = async (subject: string) => {
		const response = await fetch(
			`${getStoryblokBaseUrl()}subjects/${subject}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return response.json();
	};

	return unstable_cache(
		async () => requestSpecificSubject(subject),
		["subject-story", subject],
		{
			tags: [cacheTags.SUBJECTS.TAG, cacheTags.ALL.TAG],
			revalidate: cacheTags.SUBJECTS.DURATION,
		},
	)();
};

export const fetchCardsFromCriterias = async (
	searchCriterias: ResearchCriterias,
	currentPage: number,
) => {
	const cacheTags = await getCacheTags();

	const requestCardsFromCriterias = async (
		searchCriterias: ResearchCriterias,
		currentPage: number,
	) => {
		const cardStories = await fetchFilteredCards(
			"card",
			searchCriterias,
			currentPage,
		);

		return {
			total: cardStories.total,
			results: cardStories.stories.map(
				(cardStory: StoryblokCardComponentType) =>
					cardStory.content.component === "card" && parseCardData(cardStory),
			),
		};
	};

	return unstable_cache(
		async () => requestCardsFromCriterias(searchCriterias, currentPage),
		[
			"card-stories",
			searchCriterias.pantheon || "all",
			searchCriterias.subject || "all",
			currentPage.toString(),
		],
		{
			tags: [cacheTags.CARDS.TAG, cacheTags.ALL.TAG],
			revalidate: cacheTags.SEARCH.DURATION,
		},
	)();
};

export const fetchPlaceholderCards = async () => {
	const cacheTags = await getCacheTags();

	const requestLatestCards = async () => {
		const cardStories = await fetchLatestCards();

		return {
			results: cardStories.stories.map(
				(cardStory: StoryblokCardComponentType) =>
					cardStory.content.component === "card" && parseCardData(cardStory),
			),
		};
	};

	return unstable_cache(
		async () => requestLatestCards(),
		["placeholder-cards"],
		{
			tags: [cacheTags.CARDS.TAG, cacheTags.ALL.TAG],
			revalidate: cacheTags.SEARCH.DURATION,
		},
	)();
};

export const fetchQ2NContent = async () => {
	const cacheTags = await getCacheTags();

	const requestQ2NContent = async () => {
		const cardStories = await fetchCardsFromString("quoi2neuf");

		return cardStories.stories.map(
			(cardStory: StoryblokQ2NComponentType) =>
				cardStory.content.component === "quoi2Neuf" &&
				parseQuoi2NeufData(cardStory),
		);
	};

	return unstable_cache(
		async () => requestQ2NContent(),
		["quoi2neuf-stories"],
		{
			tags: [cacheTags.Q2N.TAG, cacheTags.ALL.TAG],
			revalidate: cacheTags.Q2N.DURATION,
		},
	)();
};

export const fetchAvailableCards = async (): Promise<
	AvailableCardForSitemap[]
> => {
	const cacheTags = await getCacheTags();

	const requestAllAvailableCards = async (): Promise<
		AvailableCardForSitemap[]
	> => {
		try {
			let allCards: AvailableCardForSitemap[] = [];
			let currentPage = 1;
			let hasMorePages = true;

			while (hasMorePages) {
				const response = await fetch(
					`${getStoryblokBaseUrl()}?starts_with=cards&token=${getStoryblokToken()}&version=${
						STORYBLOK_VERSIONS.PUBLISHED
					}&per_page=${STORYBLOK_SITEMAP_MAX_ITEMS}&page=${currentPage}&filter_query[component][in]=card`,
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				const stories: StoryblokStoryResponse[] = data.stories || [];
				const total = Number.parseInt(response.headers.get("total") || "0", 10);

				const availableCards = stories
					.filter((story) => story.content.available === true)
					.map((story) => ({
						slug: story.full_slug,
						published_at: story.published_at,
					}));

				allCards = [...allCards, ...availableCards];
				const totalFetched = currentPage * STORYBLOK_SITEMAP_MAX_ITEMS;
				hasMorePages = totalFetched < total;
				currentPage++;
			}

			return allCards;
		} catch (error) {
			console.error("Error fetching available cards for sitemap:", error);
			return [];
		}
	};

	return unstable_cache(
		async () => requestAllAvailableCards(),
		["all-available-cards"],
		{
			tags: [cacheTags.CARDS.TAG, cacheTags.ALL.TAG],
			revalidate: cacheTags.ALL.DURATION,
		},
	)();
};

const parseCardData = (card: StoryblokCardComponentType): CardDetails => {
	const { name, subtitle, icon, pantheon, subject, available, isFolder } =
		card.content;

	return { name, subtitle, icon, pantheon, subject, available, isFolder };
};

const parseQuoi2NeufData = (
	quoi2NeufItem: StoryblokQ2NComponentType,
): Quoi2NeufStoryType => {
	const { title, subtitle, icon, available, pantheon } = quoi2NeufItem.content;

	return { title, subtitle, icon, available, pantheon };
};

export const fetchAllAvailableEntitiesForGodle = async (): Promise<
	GodleEntity[]
> => {
	const cacheTags = await getCacheTags();

	const requestAllEntities = async (): Promise<GodleEntity[]> => {
		try {
			let allEntities: GodleEntity[] = [];
			let currentPage = 1;
			let hasMorePages = true;

			while (hasMorePages) {
				// Add cv parameter only in dev to bust Storyblok CDN cache
				const cvParam = process.env.ENV === "dev" ? `&cv=${Date.now()}` : "";
				const response = await fetch(
					`${getStoryblokBaseUrl()}?starts_with=cards&token=${getStoryblokToken()}&version=${
						STORYBLOK_VERSIONS.PUBLISHED
					}&per_page=${STORYBLOK_SITEMAP_MAX_ITEMS}&page=${currentPage}&filter_query[component][in]=card&filter_query[available][in]=true${cvParam}`,
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				const stories = data.stories || [];
				const total = Number.parseInt(response.headers.get("total") || "0", 10);

				const entities = stories
					.filter(
						(story: { content: { available: boolean } }) =>
							story.content.available === true,
					)
					.map(
						(story: {
							content: {
								name: string;
								pantheon: string;
								subject: string;
								godle?: GodlePropertiesType[]; // Array in Storyblok
							};
							full_slug: string;
						}) => {
							let transformedGodle: GodleProperties | undefined;

							if (
								story.content.godle &&
								Array.isArray(story.content.godle) &&
								story.content.godle.length > 0
							) {
								const godleData = story.content.godle[0];
								transformedGodle = {
									genre: godleData.genre,
									domain: godleData.domain
										? godleData.domain
												.split(",")
												.map((d: string) => d.trim())
												.filter((d: string) => d.length > 0)
										: [],
									status: godleData.status || [],
								};
							}

							return {
								name: story.content.name,
								pantheon: story.content.pantheon,
								subject: story.content.subject,
								slug: story.full_slug,
								godle: transformedGodle,
							};
						},
					);

				allEntities = [...allEntities, ...entities];
				const totalFetched = currentPage * STORYBLOK_SITEMAP_MAX_ITEMS;
				hasMorePages = totalFetched < total;
				currentPage++;
			}

			return allEntities;
		} catch (error) {
			console.error("Error fetching entities for Godle:", error);
			return [];
		}
	};

	return unstable_cache(async () => requestAllEntities(), ["godle-entities"], {
		tags: [cacheTags.GODLE.TAG, cacheTags.ALL.TAG],
		revalidate: cacheTags.GODLE.DURATION,
	})();
};
