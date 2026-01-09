"use client";

import { getPantheonLabelFromValue } from "../../../utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../../../utils/cards/subjects";
import type { GuessResult } from "../../../utils/godle/godle.types";
import { MatchType } from "../../../utils/godle/godle.types";

interface GodleGuessRowProps {
	guess: GuessResult;
}

const GodleGuessRow: React.FC<GodleGuessRowProps> = ({ guess }) => {
	const getMatchStyle = (isCorrect: boolean, matchType: MatchType): string => {
		if (isCorrect || matchType === MatchType.EXACT) {
			return "bg-green-500 text-white border-green-600";
		}
		if (matchType === MatchType.PARTIAL) {
			return "bg-yellow-500 text-white border-yellow-600";
		}
		return "bg-red-500 text-white border-red-600";
	};

	const getGenreLabel = (genre?: string): string => {
		if (!genre) return "/";

		const labels: Record<string, string> = {
			male: "Masculin",
			female: "Féminin",
			androgynous: "Androgyne",
			none: "Aucun",
			undefined: "Indéfini",
		};
		return labels[genre] || genre;
	};

	const getDomainLabel = (domains?: string[]): string => {
		if (!domains || domains.length === 0) return "?";
		return domains.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(", ");
	};

	const getStatusLabel = (statuses?: string[]): string => {
		if (!statuses || statuses.length === 0) return "?";
		const labels: Record<string, string> = {
			alive: "Vivant",
			dead: "Mort",
			married: "Marié",
			alone: "Seul",
		};
		return statuses.map((s) => labels[s] || s).join(", ");
	};

	return (
		<div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-3">
			<div
				className={`px-4 py-3 rounded-lg border-2 font-bold text-center ${getMatchStyle(guess.isCorrect, MatchType.NONE)}`}
			>
				{guess.entity.name}
			</div>
			<div
				className={`px-4 py-3 rounded-lg border-2 text-center ${getMatchStyle(false, guess.pantheonMatch)}`}
			>
				{getPantheonLabelFromValue(guess.entity.pantheon)}
			</div>
			<div
				className={`px-4 py-3 rounded-lg border-2 text-center ${getMatchStyle(false, guess.subjectMatch)}`}
			>
				{getSubjectLabelFromValue(guess.entity.subject)}
			</div>
			<div
				className={`px-4 py-3 rounded-lg border-2 text-center ${getMatchStyle(false, guess.genreMatch)}`}
			>
				{getGenreLabel(guess.entity.godle?.genre)}
			</div>
			<div
				className={`px-4 py-3 rounded-lg border-2 text-center text-sm ${getMatchStyle(false, guess.domainMatch)}`}
			>
				{getDomainLabel(guess.entity.godle?.domain)}
			</div>
			<div
				className={`px-4 py-3 rounded-lg border-2 text-center text-sm ${getMatchStyle(false, guess.statusMatch)}`}
			>
				{getStatusLabel(guess.entity.godle?.status)}
			</div>
		</div>
	);
};

export default GodleGuessRow;
