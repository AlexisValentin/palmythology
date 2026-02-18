import { MatchType } from "./godle.types";

const BASE_CLASSES = "transition-all duration-500 ease-out";

export const getMatchStyle = (matchType: MatchType): string => {
	if (matchType === MatchType.EXACT) {
		return `${BASE_CLASSES} bg-gradient-to-br from-green-500 to-green-600 text-white border-green-700 shadow-lg shadow-green-500/30`;
	}
	if (matchType === MatchType.PARTIAL) {
		return `${BASE_CLASSES} bg-gradient-to-br from-yellow-400 to-yellow-500 text-white border-yellow-600 shadow-lg shadow-yellow-500/30`;
	}
	return `${BASE_CLASSES} bg-gradient-to-br from-red-500 to-red-600 text-white border-red-700 shadow-lg shadow-red-500/30`;
};
