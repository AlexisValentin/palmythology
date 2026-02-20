import { compareArraysForMatch } from "../../utils/array";
import { GODLE_CONFIG } from "../../utils/godle/godle.constants";
import {
	type GodleEntity,
	type GodleStats,
	type GuessResult,
	MatchType,
} from "../../utils/godle/godle.types";

export const compareGuess = (
	guess: GodleEntity,
	target: GodleEntity,
): GuessResult => {
	return {
		entity: guess,
		pantheonMatch:
			guess.pantheon === target.pantheon ? MatchType.EXACT : MatchType.NONE,
		subjectMatch:
			guess.subject === target.subject ? MatchType.EXACT : MatchType.NONE,
		genreMatch: guess.genre === target.genre ? MatchType.EXACT : MatchType.NONE,
		mainDomainMatch:
			guess.mainDomain === target.mainDomain ? MatchType.EXACT : MatchType.NONE,
		attributesMatch: compareArraysForMatch(guess.attributes, target.attributes),
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
	statistics: GodleStats,
): string => {
	const guessCount = guesses.length;
	const result = won ? `${guessCount}/∞` : "X/∞";

	let shareText = `${GODLE_CONFIG.GAME_NAME} #${gameNumber} ${result}\n\n`;

	shareText += "❓🏛️🔎⚧️⭐🌟\n";

	for (const guess of guesses) {
		const correctEmoji = guess.isCorrect ? "🟩" : "🟥";
		const pantheonEmoji = getMatchEmoji(guess.pantheonMatch);
		const subjectEmoji = getMatchEmoji(guess.subjectMatch);
		const genreEmoji = getMatchEmoji(guess.genreMatch);
		const mainDomainEmoji = getMatchEmoji(guess.mainDomainMatch);
		const attributesEmoji = getMatchEmoji(guess.attributesMatch);

		shareText += `${correctEmoji}${pantheonEmoji}${subjectEmoji}${genreEmoji}${mainDomainEmoji}${attributesEmoji}\n`;
	}

	const winRate =
		statistics.gamesPlayed > 0
			? Math.round((statistics.gamesWon / statistics.gamesPlayed) * 100)
			: 0;

	shareText += `\n📊 Parties: ${statistics.gamesPlayed} | Taux de victoires: ${winRate}%\n`;
	shareText += `🔥 Série: ${statistics.currentStreak} | Max: ${statistics.maxStreak}\n`;

	shareText += `\nTentez de trouver l'entité mythologique du jour !\n`;
	shareText += `${GODLE_CONFIG.SHARE_URL}`;

	return shareText;
};
