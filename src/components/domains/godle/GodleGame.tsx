"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
	loadDailyGameState,
	loadStatistics,
	saveDailyGameState,
	updateStatistics,
} from "../../../modules/godle/godleStorage";
import { restoreGameGuesses, validateGuess } from "../../../utils/godle";
import type { GodleEntity, GuessResult } from "../../../utils/godle/godle.types";
import useModal from "../../hooks/useModal";
import GodleFAQ from "./GodleFAQ";
import GodleGuessHistory from "./GodleGuessHistory";
import GodleInput from "./GodleInput";
import GodleResultModal from "./GodleResultModal";

interface GodleGameProps {
	allEntities: GodleEntity[];
	todayDate: string;
	gameNumber: number;
	yesterdayEntity: GodleEntity | null;
}

const GodleGame: React.FC<GodleGameProps> = ({
	allEntities,
	todayDate,
	gameNumber,
	yesterdayEntity,
}) => {
	const [guesses, setGuesses] = useState<GuessResult[]>([]);
	const [isComplete, setIsComplete] = useState(false);
	const [isWon, setIsWon] = useState(false);
	const [targetEntity, setTargetEntity] = useState<GodleEntity | null>(null);
	const [statistics, setStatistics] = useState(loadStatistics());
	const [isLoading, setIsLoading] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);
	const { shouldDisplayModal, displayModal, hideModal } = useModal(
		false,
		modalRef,
	);

	const guessedNames = useMemo(
		() => new Set(guesses.map((g) => g.entity.name)),
		[guesses],
	);

	const availableEntities = useMemo(
		() => allEntities.filter((e) => !guessedNames.has(e.name)),
		[allEntities, guessedNames],
	);

	useEffect(() => {
		const restoreState = async () => {
			const savedState = loadDailyGameState(todayDate);

			if (savedState?.date === todayDate && savedState.guesses.length > 0) {
				const allEntitiesExist = savedState.guesses.every((guessName) =>
					allEntities.some((e) => e.name === guessName),
				);

				if (!allEntitiesExist) {
					console.warn(
						"Saved game state contains entities without godle. Starting fresh.",
					);
					return;
				}

				const {
					results,
					targetEntity: target,
					isComplete: complete,
				} = await restoreGameGuesses(savedState.guesses);

				setGuesses(results);
				setIsComplete(complete);
				setIsWon(complete);
				target && setTargetEntity(target);
			}
		};

		restoreState();
	}, [allEntities, todayDate]);

	const handleGuess = async (entity: GodleEntity) => {
		if (isComplete || isLoading) return;

		setIsLoading(true);

		try {
			const { result, targetEntity: target } = await validateGuess(entity.name);

			const newGuesses = [...guesses, result];
			setGuesses(newGuesses);

			const won = result.isCorrect;
			const complete = won;

			setIsWon(won);
			setIsComplete(complete);

			if (target) {
				setTargetEntity(target);
			}

			const newState = {
				date: todayDate,
				targetEntityName: target?.name ?? "",
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
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="max-w-4xl mx-auto px-4">
			{yesterdayEntity && (
				<p className="text-center my-8">
					L'entité d'hier était{" "}
					<Link
						target="_blank"
						href={`/${yesterdayEntity.slug}`}
						className="font-bold underline underline-offset-[0.3rem] max-lg:text-pink-400 max-lg:decoration-sky-500 hover:text-pink-400 hover:decoration-sky-500"
					>
						{yesterdayEntity.name}
					</Link>
					.
				</p>
			)}
			{!isComplete && (
				<GodleInput
					entities={availableEntities}
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
						className="px-6 py-3 bg-linear-to-r from-pink-400 to-sky-500 text-white rounded-xl font-bold transition-colors shadow-lg hover:shadow-xl cursor-pointer hover:from-pink-500 hover:to-sky-500"
					>
						Voir les résultats
					</button>
				</div>
			)}
			{targetEntity && (
				<GodleResultModal
					isOpen={shouldDisplayModal}
					won={isWon}
					guesses={guesses}
					gameNumber={gameNumber}
					target={targetEntity}
					statistics={statistics}
					onClose={hideModal}
				/>
			)}
			<div className="mt-12">
				<GodleFAQ />
			</div>
		</div>
	);
};

export default GodleGame;
