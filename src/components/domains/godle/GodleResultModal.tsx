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
			className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-3 md:p-4 animate-fadeIn"
			onMouseDown={handleBackdropClick}
		>
			<div
				ref={modalRef}
				className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-5 md:p-8 shadow-2xl animate-slideUpModal relative"
				role="dialog"
				aria-modal="true"
				aria-labelledby="godle-result-title"
				tabIndex={-1}
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute top-3 right-3 md:top-4 md:right-4 hover:opacity-50 transition-opacity cursor-pointer"
					aria-label="Fermer"
				>
					<Image src={CrossIcon} alt="" width={18} height={18} unoptimized />
				</button>
				<div className="text-center mb-4 md:mb-6">
					<div className="flex justify-center items-center text-6xl mb-2 md:mb-3">
						<Image
							className="w-10 h-10 md:w-[50px] md:h-[50px]"
							src={ConfettiPopperIcon}
							alt="Icône de confettis"
							width={50}
							height={50}
							unoptimized
						/>
					</div>
					<h2
						id="godle-result-title"
						className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-sky-500 bg-clip-text text-transparent"
					>
						Félicitations !
					</h2>
				</div>
				<div className="mb-4 md:mb-6 text-center">
					<p className="text-base md:text-lg">
						Vous avez trouvé{" "}
						<strong className="text-pink-500">{target.name}</strong> en{" "}
						<strong className="text-sky-500">{guesses.length}</strong> essai
						{guesses.length > 1 ? "s" : ""} !
					</p>
				</div>
				<div className="mb-4 md:mb-6">
					<Link
						href={`/${target.slug}`}
						className="block text-center px-4 py-2.5 md:px-6 md:py-3 rounded-xl bg-gradient-to-r from-pink-400 to-sky-500 text-white text-sm md:text-base font-semibold hover:from-pink-500 hover:to-sky-500 transition-all duration-200 shadow-lg hover:shadow-xl transform"
					>
						En savoir plus sur {target.name}
					</Link>
				</div>
				<div className="mb-4 md:mb-6">
					<button
						type="button"
						onClick={handleShare}
						className="w-full px-4 py-2.5 md:px-6 md:py-3 rounded-xl bg-gradient-to-r from-pink-400 to-sky-500 text-white text-sm md:text-base font-bold hover:from-pink-500 hover:to-sky-500 transition-all duration-200 shadow-lg hover:shadow-xl transform flex items-center justify-center gap-2 cursor-pointer"
					>
						{copied ? "Copié !" : "Partager le résultat"}
					</button>
				</div>

				<div className="mb-4 md:mb-6">
					<GodleStatistics statistics={statistics} />
				</div>
				<div className="text-center text-xs md:text-sm text-neutral-600">
					Prochain Godle dans {getTimeUntilNextGame()}
				</div>
			</div>
		</div>
	);
};

export default GodleResultModal;
