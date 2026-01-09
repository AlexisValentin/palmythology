"use client";

import type { GuessResult } from "../../../utils/godle/godle.types";
import GodleGuessRow from "./GodleGuessRow";

interface GodleGuessHistoryProps {
	guesses: GuessResult[];
}

const GodleGuessHistory: React.FC<GodleGuessHistoryProps> = ({ guesses }) => {
	if (guesses.length === 0) {
		return null;
	}

	return (
		<div className="mb-6">
			<h3 className="text-lg font-bold mb-3">
				Tentatives ({guesses.length}) :
			</h3>
			<div className="space-y-2">
				{guesses.map((guess, index) => (
					<GodleGuessRow key={`${guess.entity.name}-${index}`} guess={guess} />
				))}
			</div>
		</div>
	);
};

export default GodleGuessHistory;
