import type {
	CardDetails,
	ResearchCriterias,
} from "../utils/cards/card.constants";
import { getGenreLabelFromValue } from "../utils/cards/genres";
import { getPantheonLabelFromValue } from "../utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../utils/cards/subjects";
import {
	fetchCardsFromCriterias,
	fetchPlaceholderCards,
} from "../utils/cms/cms.requests";

export const filterCards = async (
	currentPage: number,
	searchCriterias?: ResearchCriterias,
) => {
	const cardStories = await fetchCardsFromCriterias(
		searchCriterias ?? { pantheon: "", subject: "", genre: "" },
		currentPage,
	);

	return {
		total: cardStories.total,
		results: cardStories.results
			.map((card: CardDetails) => {
				if (isACardFound(searchCriterias, card)) {
					const { pantheon, subject, genre } = card;

					return {
						...card,
						pantheon: getPantheonLabelFromValue(pantheon),
						subject: getSubjectLabelFromValue(subject),
						genre: getGenreLabelFromValue(genre),
					};
				}

				return undefined;
			})
			.filter((card: CardDetails) => card !== undefined),
	};
};

export const getPlaceholderCards = async () => {
	const stories = await fetchPlaceholderCards();

	return {
		results: stories.results.map((card: CardDetails) => {
			const { pantheon, subject, genre } = card;

			return {
				...card,
				pantheon: getPantheonLabelFromValue(pantheon),
				subject: getSubjectLabelFromValue(subject),
				genre: getGenreLabelFromValue(genre),
			};
		}),
	};
};

export const isACardFound = (
	asked?: ResearchCriterias,
	found?: CardDetails,
): boolean => {
	if (found?.isFolder) return false;
	if (!found?.available) return false;

	const hasAnyFilter = asked?.pantheon || asked?.subject || asked?.genre;
	if (!hasAnyFilter) return false;

	if (
		asked?.pantheon &&
		!isSelectedOptionMatching(asked.pantheon, found?.pantheon)
	)
		return false;

	if (
		asked?.subject &&
		!isSelectedOptionMatching(asked.subject, found?.subject)
	)
		return false;

	if (asked?.genre && !isSelectedOptionMatching(asked.genre, found?.genre))
		return false;

	return true;
};

export const isSelectedOptionMatching = (
	asked?: string,
	found?: string,
): boolean => asked === found;
