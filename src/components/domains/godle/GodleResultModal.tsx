"use client";

import Link from "next/link";
import { useState } from "react";
import { generateShareText } from "../../../modules/godle/godleEngine";
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
}

const GodleResultModal: React.FC<GodleResultModalProps> = ({
	isOpen,
	won,
	guesses,
	gameNumber,
	target,
	statistics,
}) => {
	const [copied, setCopied] = useState(false);

	if (!isOpen) return null;

	const handleShare = async () => {
		const shareText = generateShareText(guesses, gameNumber, won);

		try {
			await navigator.clipboard.writeText(shareText);
			setCopied(true);
			setTimeout(() => setCopied(false), SECOND_IN_MS * 3);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const getTimeUntilNextGame = () => {
		const now = new Date();
		const tomorrow = new Date(now);
		tomorrow.setDate(tomorrow.getDate() + 1);
		tomorrow.setHours(0, 0, 0, 0);

		const diff = tomorrow.getTime() - now.getTime();
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

		return `${hours}h ${minutes}m`;
	};

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
			<div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto p-6">
				<h2 className="text-2xl font-bold mb-4 text-center">Félicitations !</h2>
				<div className="mb-4 text-center">
					<p>
						Vous avez trouvé <strong>{target.name}</strong> en{" "}
						<strong>{guesses.length}</strong> essai
						{guesses.length > 1 ? "s" : ""} !
					</p>
				</div>
				<div className="mb-4">
					<Link
						href={`/${target.slug}`}
						className="hover:underline text-pink-400 decoration-sky-500 underline-offset-4 text-center block"
					>
						En savoir plus sur {target.name} →
					</Link>
				</div>
				<div className="mb-4">
					<button
						type="button"
						onClick={handleShare}
						className="w-full px-4 py-3 bg-pink-400 text-white rounded-lg font-bold hover:bg-sky-500 transition-colors cursor-pointer"
					>
						{copied ? "Copié dans le presse-papier !" : "Partager le résultat"}
					</button>
				</div>

				<div className="mb-4">
					<GodleStatistics statistics={statistics} />
				</div>

				<div className="text-center text-sm text-neutral-600">
					Prochain Godle dans {getTimeUntilNextGame()}
				</div>
			</div>
		</div>
	);
};

export default GodleResultModal;
