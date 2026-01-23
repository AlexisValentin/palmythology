import type {
	GodleDailyState,
	GodleStats,
} from "../../utils/godle/godle.types";
import {
	getFromLocalStorage,
	LOCAL_STORAGE_KEYS,
	setInLocalStorage,
} from "../../utils/storage";

export const loadDailyGameState = (
	todayDate: string,
): GodleDailyState | null => {
	try {
		const stored = getFromLocalStorage(LOCAL_STORAGE_KEYS.GODLE_DAILY_STATE);
		if (!stored) return null;

		const state: GodleDailyState = JSON.parse(stored);

		if (state.date !== todayDate) {
			return null;
		}

		return state;
	} catch (error) {
		console.error("Error loading daily game state:", error);
		return null;
	}
};

export const saveDailyGameState = (state: GodleDailyState): void => {
	try {
		setInLocalStorage(
			LOCAL_STORAGE_KEYS.GODLE_DAILY_STATE,
			JSON.stringify(state),
		);
	} catch (error) {
		console.error("Error saving daily game state:", error);
	}
};

export const loadStatistics = (): GodleStats => {
	try {
		const stored = getFromLocalStorage(LOCAL_STORAGE_KEYS.GODLE_STATISTICS);
		if (!stored) {
			return {
				gamesPlayed: 0,
				gamesWon: 0,
				currentStreak: 0,
				maxStreak: 0,
				guessDistribution: {},
				lastPlayedDate: "",
			};
		}

		return JSON.parse(stored);
	} catch (error) {
		console.error("Error loading statistics:", error);
		return {
			gamesPlayed: 0,
			gamesWon: 0,
			currentStreak: 0,
			maxStreak: 0,
			guessDistribution: {},
			lastPlayedDate: "",
		};
	}
};

export const updateStatistics = (
	won: boolean,
	guessCount: number,
	todayDate: string,
): void => {
	try {
		const stats = loadStatistics();

		const yesterday = getYesterdayDate(todayDate);

		let newStreak = 0;
		if (won) {
			if (stats.lastPlayedDate === yesterday) {
				newStreak = stats.currentStreak + 1;
			} else {
				newStreak = 1;
			}
		} else {
			newStreak = 0;
		}

		const newStats: GodleStats = {
			gamesPlayed: stats.gamesPlayed + 1,
			gamesWon: won ? stats.gamesWon + 1 : stats.gamesWon,
			currentStreak: newStreak,
			maxStreak: Math.max(newStreak, stats.maxStreak),
			guessDistribution: {
				...stats.guessDistribution,
				[guessCount]: (stats.guessDistribution[guessCount] || 0) + 1,
			},
			lastPlayedDate: todayDate,
		};

		setInLocalStorage(
			LOCAL_STORAGE_KEYS.GODLE_STATISTICS,
			JSON.stringify(newStats),
		);
	} catch (error) {
		console.error("Error updating statistics:", error);
	}
};

const getYesterdayDate = (todayDate: string): string => {
	const today = new Date(todayDate);
	today.setDate(today.getDate() - 1);
	return today.toISOString().split("T")[0];
};
