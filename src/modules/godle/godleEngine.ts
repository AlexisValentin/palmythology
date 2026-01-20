import { GODLE_CONFIG } from "../../utils/godle/godle.constants";
import {
	type GodleEntity,
	type GuessResult,
	MatchType,
} from "../../utils/godle/godle.types";

export const compareGuess = (
	guess: GodleEntity,
	target: GodleEntity,
): GuessResult => {
	const compareArrays = (arr1: string[], arr2: string[]): MatchType => {
		if (
			arr1.length === arr2.length &&
			arr1.every((item) => arr2.includes(item))
		) {
			return MatchType.EXACT;
		}
		if (arr1.some((item) => arr2.includes(item))) {
			return MatchType.PARTIAL;
		}
		return MatchType.NONE;
	};

	const hasGodleProperties =
		guess.godle !== undefined && target.godle !== undefined;

	let genreMatch = MatchType.NONE;
	let domainMatch = MatchType.NONE;

	if (hasGodleProperties && guess.godle && target.godle) {
		genreMatch =
			guess.godle.genre === target.godle.genre
				? MatchType.EXACT
				: MatchType.NONE;
		domainMatch = compareArrays(guess.godle.domain, target.godle.domain);
	}

	return {
		entity: guess,
		pantheonMatch:
			guess.pantheon === target.pantheon ? MatchType.EXACT : MatchType.NONE,
		subjectMatch:
			guess.subject === target.subject ? MatchType.EXACT : MatchType.NONE,
		genreMatch,
		domainMatch,
		isCorrect: guess.name === target.name,
	};
};

const getMatchEmoji = (matchType: MatchType): string => {
	switch (matchType) {
		case MatchType.EXACT:
			return "🟩";
		case MatchType.PARTIAL:
			return "🟨";
		case MatchType.NONE:
			return "🟥";
	}
};

export const generateShareText = (
	guesses: GuessResult[],
	gameNumber: number,
	won: boolean,
): string => {
	const guessCount = guesses.length;
	const result = won ? `${guessCount}/∞` : "X/∞";

	let shareText = `${GODLE_CONFIG.GAME_NAME} #${gameNumber} ${result}\n\n`;

	shareText += "❓🏛️🔎⚧️🌟\n";

	for (const guess of guesses) {
		const correctEmoji = guess.isCorrect ? "🟩" : "🟥";
		const pantheonEmoji = getMatchEmoji(guess.pantheonMatch);
		const subjectEmoji = getMatchEmoji(guess.subjectMatch);
		const genreEmoji = getMatchEmoji(guess.genreMatch);
		const domainEmoji = getMatchEmoji(guess.domainMatch);

		shareText += `${correctEmoji}${pantheonEmoji}${subjectEmoji}${genreEmoji}${domainEmoji}\n`;
	}

	shareText += `\nTentez de trouver l'entité mythologique du jour !\n`;
	shareText += `${GODLE_CONFIG.SHARE_URL}`;

	return shareText;
};
