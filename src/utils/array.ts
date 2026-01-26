import { MatchType } from "./godle/godle.types";

export const compareArraysForMatch = (
	arr1: string[],
	arr2: string[],
): MatchType => {
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
