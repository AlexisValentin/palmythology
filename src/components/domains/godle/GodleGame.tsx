"use client";

import { useEffect, useRef, useState } from "react";
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
import useModal from "../../hooks/useModal";
import GodleFAQ from "./GodleFAQ";
import GodleGuessHistory from "./GodleGuessHistory";
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
	const [statistics, setStatistics] = useState(loadStatistics());
	const modalRef = useRef<HTMLDivElement>(null);
	const { shouldDisplayModal, displayModal, hideModal } = useModal(
		false,
		modalRef,
	);

	useEffect(() => {
		const savedState = loadDailyGameState(todayDate);

		if (savedState && savedState.targetEntityName === dailyEntity.name) {
			const allEntitiesExist = savedState.guesses.every((guessName) =>
				allEntities.some((e) => e.name === guessName),
			);

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
			displayModal();
		}
	};

	return (
		<div className="max-w-4xl mx-auto px-4 py-6">
			{!isComplete && (
				<GodleInput
					entities={allEntities}
					onGuess={handleGuess}
					disabled={isComplete}
				/>
			)}
			<GodleGuessHistory guesses={guesses} />
			{isComplete && !shouldDisplayModal && (
				<div className="text-center mt-12">
					<button
						type="button"
						onClick={displayModal}
						className="px-6 py-3 bg-gradient-to-r from-pink-400 to-sky-500 text-white rounded-xl font-bold transition-colors shadow-lg hover:shadow-xl cursor-pointer hover:from-pink-500 hover:to-sky-500"
					>
						Voir les résultats
					</button>
				</div>
			)}
			<GodleResultModal
				isOpen={shouldDisplayModal}
				won={isWon}
				guesses={guesses}
				gameNumber={gameNumber}
				target={dailyEntity}
				statistics={statistics}
				onClose={hideModal}
			/>
			<div className="mt-12">
				<GodleFAQ />
			</div>
		</div>
	);
};

export default GodleGame;
