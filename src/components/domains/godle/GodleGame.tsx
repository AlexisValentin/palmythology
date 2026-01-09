"use client";

import { useEffect, useState } from "react";
import { compareGuess } from "../../../modules/godle/godleEngine";
import {
	loadDailyGameState,
	loadStatistics,
	saveDailyGameState,
	updateStatistics,
} from "../../../modules/godle/godleStorage";
import type {
	GodleEntity,
	GuessResult,
} from "../../../utils/godle/godle.types";
import GodleGuessHistory from "./GodleGuessHistory";
import GodleHeader from "./GodleHeader";
import GodleInput from "./GodleInput";
import GodleResultModal from "./GodleResultModal";

interface GodleGameProps {
	dailyEntity: GodleEntity;
	allEntities: GodleEntity[];
	todayDate: string;
	gameNumber: number;
}

const GodleGame: React.FC<GodleGameProps> = ({
	dailyEntity,
	allEntities,
	todayDate,
	gameNumber,
}) => {
	const [guesses, setGuesses] = useState<GuessResult[]>([]);
	const [isComplete, setIsComplete] = useState(false);
	const [isWon, setIsWon] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [statistics, setStatistics] = useState(loadStatistics());

	useEffect(() => {
		const savedState = loadDailyGameState(todayDate);

		if (savedState && savedState.targetEntityName === dailyEntity.name) {
			// Check if all guessed entities still exist in the filtered list
			const allEntitiesExist = savedState.guesses.every((guessName) =>
				allEntities.some((e) => e.name === guessName),
			);

			// If any entity is missing (due to godle filtering), skip restoration
			if (!allEntitiesExist) {
				console.warn(
					"Saved game state contains entities without godle. Starting fresh.",
				);
				return;
			}

			const restoredGuesses: GuessResult[] = savedState.guesses.map(
				(guessName) => {
					const guessEntity = allEntities.find((e) => e.name === guessName);
					if (!guessEntity) {
						throw new Error(`Entity not found: ${guessName}`);
					}
					return compareGuess(guessEntity, dailyEntity);
				},
			);

			setGuesses(restoredGuesses);
			setIsComplete(savedState.isComplete);
			setIsWon(savedState.isWon);
		}
	}, [dailyEntity, allEntities, todayDate]);

	const handleGuess = (entity: GodleEntity) => {
		if (isComplete) return;

		const result = compareGuess(entity, dailyEntity);
		const newGuesses = [...guesses, result];
		setGuesses(newGuesses);

		const won = result.isCorrect;
		const complete = won;

		setIsWon(won);
		setIsComplete(complete);

		const newState = {
			date: todayDate,
			targetEntityName: dailyEntity.name,
			guesses: newGuesses.map((g) => g.entity.name),
			isComplete: complete,
			isWon: won,
		};
		saveDailyGameState(newState);

		if (complete) {
			updateStatistics(won, newGuesses.length, todayDate);
			setStatistics(loadStatistics());
			setShowModal(true);
		}
	};

	const alreadyGuessed = guesses.map((g) => g.entity.name);

	return (
		<div className="max-w-3xl mx-auto">
			<GodleHeader />

			<GodleInput
				entities={allEntities}
				onGuess={handleGuess}
				disabled={isComplete}
				alreadyGuessed={alreadyGuessed}
			/>

			<GodleGuessHistory guesses={guesses} />

			{isComplete && !showModal && (
				<div className="text-center mb-6">
					<button
						type="button"
						onClick={() => setShowModal(true)}
						className="px-6 py-3 bg-[#f461b1] text-white rounded-lg font-bold hover:bg-[#e04ca0] transition-colors"
					>
						Voir les résultats
					</button>
				</div>
			)}

			<GodleResultModal
				isOpen={showModal}
				won={isWon}
				guesses={guesses}
				gameNumber={gameNumber}
				target={dailyEntity}
				statistics={statistics}
			/>
		</div>
	);
};

export default GodleGame;
