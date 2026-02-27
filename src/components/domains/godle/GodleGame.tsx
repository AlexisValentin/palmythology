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
import type {
	GodleEntity,
	GuessResult,
} from "../../../utils/godle/godle.types";
import useModal from "../../hooks/useModal";
import styles from "./GodleGame.module.scss";
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
		<div className={styles.container}>
			{yesterdayEntity && (
				<p className={styles.yesterdayText}>
					L'entité d'hier était{" "}
					<Link
						target="_blank"
						href={`/${yesterdayEntity.slug}`}
						className={styles.yesterdayLink}
						data-rybbit-event="godle_yesterday_click"
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
				<div className={styles.viewResultsWrapper}>
					<button
						type="button"
						onClick={displayModal}
						className={styles.viewResultsButton}
						data-rybbit-event="godle_view_results"
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
			<div className={styles.faqWrapper}>
				<GodleFAQ />
			</div>
		</div>
	);
};

export default GodleGame;
