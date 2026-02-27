import { MatchType } from "./godle.types";

export type MatchStyleKey = "exact" | "partial" | "none";

export const getMatchStyleKey = (matchType: MatchType): MatchStyleKey => {
	if (matchType === MatchType.EXACT) return "exact";
	if (matchType === MatchType.PARTIAL) return "partial";

	return "none";
};
