"use server";

import axios from "axios";
import { unstable_cache } from "next/cache";
import type { CardDetails, ResearchCriterias } from "../cards/card.constants";
import { parseStringToSlug, replaceHyphenByDashes } from "../string";
import { getCacheTags } from "./cache";
import { getStoryblokBaseUrl, getStoryblokToken } from "./cms";
import {
	type AvailableCardForSitemap,
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
	const response = await axios({
		method: "get",
		url: `${getStoryblokBaseUrl()}?starts_with=${startingString}&token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}&per_page=${STORYBLOK_MAX_ITEMS_PER_REQUEST}`,
		responseType: "json",
	});
	return response.data;
};

const fetchLatestCards = async () => {
	const response = await axios({
		method: "get",
		url: `${getStoryblokBaseUrl()}?token=${getStoryblokToken()}&version=${
			STORYBLOK_VERSIONS.PUBLISHED
		}&starts_with=card&sort_by=published_at:desc&per_page=${STORYBLOK_RESULTS_PER_PAGE}&page=1`,
		responseType: "json",
	});
	return response.data;
};

const fetchFilteredCards = async (
	startingString: string,
	searchCriterias: ResearchCriterias,
	currentPage: number,
) => {
	const { pantheon, subject } = searchCriterias;

	const response = await axios({
		method: "get",
		url: `${getStoryblokBaseUrl()}?starts_with=${startingString}&token=${getStoryblokToken()}&version=${
			STORYBLOK_VERSIONS.PUBLISHED
		}&per_page=${STORYBLOK_RESULTS_PER_PAGE}&page=${currentPage}&${
			pantheon && `filter_query[pantheon][in]=${pantheon}`
		}&${subject && `filter_query[subject][in]=${subject}`}`,
		responseType: "json",
	});

	return {
		total: response.headers.total,
		stories: response.data.stories,
	};
};

export const generateCardSlug = async (cardName?: string, pantheon?: string) =>
	!cardName || !pantheon
		? ""
		: `cards/${parseStringToSlug(pantheon)}/${parseStringToSlug(cardName)}`;

export const fetchSpecificCard = async (title: string, pantheon: string) => {
	const cacheTags = await getCacheTags();

	const requestSpecificCard = async (title: string, pantheon: string) => {
		const response = await axios({
			method: "get",
			url: `${getStoryblokBaseUrl()}cards/${pantheon}/${replaceHyphenByDashes(title)}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
			responseType: "json",
		});

		return response.data;
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
		const response = await axios({
			method: "get",
			url: `${getStoryblokBaseUrl()}pantheons/${pantheon}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
			responseType: "json",
		});

		return response.data;
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
		const response = await axios({
			method: "get",
			url: `${getStoryblokBaseUrl()}subjects/${subject}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
			responseType: "json",
		});

		return response.data;
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
				const response = await axios({
					method: "get",
					url: `${getStoryblokBaseUrl()}?starts_with=cards&token=${getStoryblokToken()}&version=${
						STORYBLOK_VERSIONS.PUBLISHED
					}&per_page=${STORYBLOK_SITEMAP_MAX_ITEMS}&page=${currentPage}&filter_query[component][in]=card`,
					responseType: "json",
				});

				const stories: StoryblokStoryResponse[] = response.data.stories || [];
				const total = Number.parseInt(response.headers.total || "0", 10);

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
