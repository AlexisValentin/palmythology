"use client";

import Image, { type StaticImageData } from "next/image";
import FoldersIcon from "../../../assets/icons/folders.svg";
import GenderIcon from "../../../assets/icons/gender_all.svg";
import GoldMedalIcon from "../../../assets/icons/gold_medal.svg";
import IdCardIcon from "../../../assets/icons/id_card.svg";
import LaurelIcon from "../../../assets/icons/laurel.svg";
import MysteriousFaceIcon from "../../../assets/icons/mysterious_face.svg";
import type { GuessResult } from "../../../utils/godle/godle.types";
import styles from "./GodleGuessHistory.module.scss";
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
	<div className={styles.header}>
		<Image
			className={styles.headerIcon}
			src={icon}
			alt={iconAlt}
			width={24}
			height={24}
		/>
		<span className={styles.headerLabel}>{headerLabel}</span>
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
		<div className={styles.container}>
			<h3 className={styles.counter}>Tentative #{guesses.length}</h3>
			<div className={styles.headers}>
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
					headerLabel="Domaine"
				/>
				<GodleGuessHistoryHeader
					icon={IdCardIcon}
					iconAlt="Icône de carte d'identité"
					headerLabel="Attributs"
				/>
			</div>
			<div className={styles.rows}>
				{guesses
					.slice()
					.reverse()
					.map((guess, index) => (
						<div
							key={`${guess.entity.name}-${index}`}
							className={`${styles.rowWrapper} animate-slideInFromBottom`}
							style={{ animationDelay: `${index * 50}ms` }}
						>
							<GodleGuessRow guess={guess} />
						</div>
					))}
			</div>
		</div>
	);
};

export default GodleGuessHistory;
