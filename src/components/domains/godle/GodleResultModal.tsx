"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ConfettiPopperIcon from "../../../assets/icons/confetti_popper.svg";
import CrossIcon from "../../../assets/icons/cross.svg";
import { generateShareText } from "../../../modules/godle/godleEngine";
import { getTimeUntilNextGame } from "../../../utils/dates/dates";
import { SECOND_IN_MS } from "../../../utils/dates/dates.constants";
import type {
	GodleEntity,
	GodleStats as GodleStatisticsType,
	GuessResult,
} from "../../../utils/godle/godle.types";
import styles from "./GodleResultModal.module.scss";
import GodleStatistics from "./GodleStatistics";

interface GodleResultModalProps {
	isOpen: boolean;
	won: boolean;
	guesses: GuessResult[];
	gameNumber: number;
	target: GodleEntity;
	statistics: GodleStatisticsType;
	onClose: () => void;
}

const GodleResultModal: React.FC<GodleResultModalProps> = ({
	isOpen,
	won,
	guesses,
	gameNumber,
	target,
	statistics,
	onClose,
}) => {
	const [copied, setCopied] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		document.addEventListener("keydown", handleKeyDown);
		modalRef.current?.focus();

		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const handleShare = async () => {
		const shareText = generateShareText(guesses, gameNumber, won, statistics);

		try {
			await navigator.clipboard.writeText(shareText);
			setCopied(true);
			setTimeout(() => setCopied(false), SECOND_IN_MS * 3);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className={`${styles.backdrop} animate-fadeIn`}
			onMouseDown={handleBackdropClick}
		>
			<div
				ref={modalRef}
				className={`${styles.modal} animate-slideUpModal`}
				role="dialog"
				aria-modal="true"
				aria-labelledby="godle-result-title"
				tabIndex={-1}
			>
				<button
					type="button"
					onClick={onClose}
					className={styles.closeButton}
					aria-label="Fermer"
				>
					<Image src={CrossIcon} alt="" width={18} height={18} unoptimized />
				</button>
				<div className={styles.header}>
					<div className={styles.iconWrapper}>
						<Image
							className={styles.icon}
							src={ConfettiPopperIcon}
							alt="Icône de confettis"
							width={50}
							height={50}
							unoptimized
						/>
					</div>
					<h2 id="godle-result-title" className={styles.title}>
						Félicitations !
					</h2>
				</div>
				<div className={styles.result}>
					<p className={styles.resultText}>
						Vous avez trouvé{" "}
						<strong className={styles.targetName}>{target.name}</strong> en{" "}
						<strong className={styles.guessCount}>{guesses.length}</strong>{" "}
						essai
						{guesses.length > 1 ? "s" : ""} !
					</p>
				</div>
				<Link
					href={`/${target.slug}`}
					className={styles.cardLink}
					data-rybbit-event="godle_card_click"
				>
					En savoir plus sur {target.name}
				</Link>
				<button
					type="button"
					onClick={handleShare}
					className={styles.shareButton}
					data-rybbit-event="godle_share"
				>
					{copied ? "Copié !" : "Partager le résultat"}
				</button>
				<div className={styles.statisticsWrapper}>
					<GodleStatistics statistics={statistics} />
				</div>
				<div className={styles.nextGame}>
					Prochain Godle dans {getTimeUntilNextGame()}
				</div>
			</div>
		</div>
	);
};

export default GodleResultModal;
