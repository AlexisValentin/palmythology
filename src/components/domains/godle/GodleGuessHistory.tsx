"use client";

import Image, { type StaticImageData } from "next/image";
import FoldersIcon from "../../../assets/icons/folders.svg";
import GenderIcon from "../../../assets/icons/gender_all.svg";
import GoldMedalIcon from "../../../assets/icons/gold_medal.svg";
import LaurelIcon from "../../../assets/icons/laurel.svg";
import MysteriousFaceIcon from "../../../assets/icons/mysterious_face.svg";
import type { GuessResult } from "../../../utils/godle/godle.types";
import GodleGuessRow from "./GodleGuessRow";

interface GodleGuessHistoryHeaderProps {
	icon: StaticImageData;
	iconAlt: string;
	headerLabel: string;
}

const GodleGuessHistoryHeader: React.FC<GodleGuessHistoryHeaderProps> = ({
	icon,
	iconAlt,
	headerLabel,
}) => (
	<div className="flex justify-center text-center text-sm font-semibold">
		<Image className="mr-1" src={icon} alt={iconAlt} width={16} height={16} />{" "}
		{headerLabel}
	</div>
);

interface GodleGuessHistoryProps {
	guesses: GuessResult[];
}

const GodleGuessHistory: React.FC<GodleGuessHistoryProps> = ({ guesses }) => {
	if (guesses.length === 0) {
		return null;
	}

	return (
		<div className="mb-8">
			<h3 className="flex justify-center text-lg md:text-xl font-bold mb-6 md:mb-12 text-neutral-800">
				Tentative #{guesses.length}
			</h3>
			<div className="hidden md:grid md:grid-cols-5 gap-2 mb-4 px-1">
				<GodleGuessHistoryHeader
					icon={MysteriousFaceIcon}
					iconAlt="Icône de visage mystérieux"
					headerLabel="Entité"
				/>
				<GodleGuessHistoryHeader
					icon={LaurelIcon}
					iconAlt="Icône de laurier"
					headerLabel="Panthéon"
				/>
				<GodleGuessHistoryHeader
					icon={FoldersIcon}
					iconAlt="Icône de dossiers empilés"
					headerLabel="Sujet"
				/>
				<GodleGuessHistoryHeader
					icon={GenderIcon}
					iconAlt="Icône de genres multiples "
					headerLabel="Genre"
				/>
				<GodleGuessHistoryHeader
					icon={GoldMedalIcon}
					iconAlt="Icône de médaille d'or"
					headerLabel="Domaines"
				/>
			</div>
			<div className="space-y-3">
				{guesses.map((guess, index) => {
					const isOlderGuess = index < guesses.length - 3;
					return (
						<div
							key={`${guess.entity.name}-${index}`}
							className={`animate-slideInFromBottom transition-opacity duration-500 ${isOlderGuess ? "opacity-60" : "opacity-100"}`}
							style={{ animationDelay: `${index * 50}ms` }}
						>
							<GodleGuessRow guess={guess} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GodleGuessHistory;
