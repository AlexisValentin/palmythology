"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import BulbIcon from "../../../assets/icons/bulb.svg";
import CheckIcon from "../../../assets/icons/check.svg";
import WrongIcon from "../../../assets/icons/wrong.svg";
import { getAttributeLabelFromValue } from "../../../utils/cards/attributes";
import { getGenreLabelFromValue } from "../../../utils/cards/genres";
import { getPantheonLabelFromValue } from "../../../utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../../../utils/cards/subjects";
import { getMatchStyleKey } from "../../../utils/godle/godle.styles";
import type { GuessResult } from "../../../utils/godle/godle.types";
import { MatchType } from "../../../utils/godle/godle.types";
import { getPantheonIcon } from "../../../utils/pantheons";
import { getSubjectIcon } from "../../../utils/subjects";
import GodleGuessCell from "./GodleGuessCell";
import styles from "./GodleGuessRow.module.scss";

interface GodleGuessRowProps {
	guess: GuessResult;
}

const GodleGuessRow: React.FC<GodleGuessRowProps> = ({ guess }) => {
	const entityIcon = guess.entity.icon?.filename
		? { src: guess.entity.icon.filename, alt: guess.entity.icon.alt }
		: {
				src: getPantheonIcon(guess.entity.pantheon),
				alt: getPantheonLabelFromValue(guess.entity.pantheon) || "",
			};

	const getGenreLabel = (genre?: string): string =>
		genre ? (getGenreLabelFromValue(genre as never) ?? genre) : "/";

	const getAttributesLabel = (attributes: string[]): string => {
		if (attributes.length === 0) return "/";
		
		return attributes.map((a) => getAttributeLabelFromValue(a)).join(", ");
	};

	const getMatchIndicatorIcon = (matchType: MatchType): StaticImageData => {
		if (matchType === MatchType.EXACT) return CheckIcon;
		if (matchType === MatchType.PARTIAL) return BulbIcon;

		return WrongIcon;
	};

	const getCardMatchType = (): MatchType => {
		if (guess.isCorrect) return MatchType.EXACT;

		const exactCount = [
			guess.pantheonMatch,
			guess.subjectMatch,
			guess.genreMatch,
			guess.mainDomainMatch,
			guess.attributesMatch,
		].filter((m) => m === MatchType.EXACT || m === MatchType.PARTIAL).length;

		if (exactCount >= 3) return MatchType.PARTIAL;

		return MatchType.NONE;
	};

	const entityUrl = `/${guess.entity.slug}`;
	const pantheonUrl = `/pantheons/${guess.entity.pantheon}`;
	const subjectUrl = `/subjects/${guess.entity.subject}`;

	const cardMatchKey = getMatchStyleKey(getCardMatchType());
	const entityMatchKey = getMatchStyleKey(
		guess.isCorrect ? MatchType.EXACT : MatchType.NONE,
	);

	return (
		<>
			<div className={styles.mobileRow}>
				<div
					className={`${styles.mobileCard} ${styles[cardMatchKey]} animate-colorReveal`}
					style={{ animationDelay: "0ms" }}
				>
					<div className={styles.mobileCardContent}>
						<Link
							href={entityUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.mobileEntityIcon}
						>
							<Image
								src={entityIcon.src}
								alt={entityIcon.alt}
								width={56}
								height={56}
								className={styles.mobileEntityImage}
								sizes="3.5rem"
							/>
						</Link>
						<div className={styles.mobileInfo}>
							<Link
								href={entityUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.mobileEntityLink}
							>
								{guess.entity.name}
							</Link>
							<div className={styles.mobileGrid}>
								<Link
									href={pantheonUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.mobileAttrRow}
								>
									<Image
										src={getMatchIndicatorIcon(guess.pantheonMatch)}
										alt=""
										width={14}
										height={14}
										className={styles.mobileAttrIcon}
									/>
									<span className={styles.mobileAttrText}>
										{getPantheonLabelFromValue(guess.entity.pantheon)}
									</span>
								</Link>
								<Link
									href={subjectUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.mobileAttrRow}
								>
									<Image
										src={getMatchIndicatorIcon(guess.subjectMatch)}
										alt=""
										width={14}
										height={14}
										className={styles.mobileAttrIcon}
									/>
									<span className={styles.mobileAttrText}>
										{getSubjectLabelFromValue(guess.entity.subject)}
									</span>
								</Link>
								<div className={styles.mobileAttrRow}>
									<Image
										src={getMatchIndicatorIcon(guess.genreMatch)}
										alt=""
										width={14}
										height={14}
										className={styles.mobileAttrIcon}
									/>
									<span className={styles.mobileAttrText}>
										{getGenreLabel(guess.entity.genre)}
									</span>
								</div>
								<div className={styles.mobileAttrRow}>
									<Image
										src={getMatchIndicatorIcon(guess.mainDomainMatch)}
										alt=""
										width={14}
										height={14}
										className={styles.mobileAttrIcon}
									/>
									<span className={styles.mobileAttrText}>
										{getAttributeLabelFromValue(guess.entity.mainDomain)}
									</span>
								</div>
								<div
									className={`${styles.mobileAttrRow} ${styles.mobileAttrRowFull}`}
								>
									<Image
										src={getMatchIndicatorIcon(guess.attributesMatch)}
										alt=""
										width={14}
										height={14}
										className={styles.mobileAttrIcon}
									/>
									<span className={styles.mobileAttrTextXs}>
										{getAttributesLabel(guess.entity.attributes)}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.desktopRow}>
				<Link
					href={entityUrl}
					target="_blank"
					rel="noopener noreferrer"
					className={`${styles.desktopEntityCell} ${styles[entityMatchKey]} animate-colorReveal`}
					style={{ animationDelay: "0ms" }}
				>
					<div className={styles.desktopEntityIconWrapper}>
						<div className={styles.desktopEntityIconInner}>
							<Image
								src={entityIcon.src}
								alt={entityIcon.alt}
								width={40}
								height={40}
								className={styles.desktopEntityImage}
								sizes="2.5rem"
							/>
						</div>
					</div>
					<div className={styles.desktopEntityName}>{guess.entity.name}</div>
				</Link>
				<GodleGuessCell
					label={getPantheonLabelFromValue(guess.entity.pantheon)}
					matchType={guess.pantheonMatch}
					href={pantheonUrl}
					animationDelay={100}
					icon={{
						src: getPantheonIcon(guess.entity.pantheon),
						alt: getPantheonLabelFromValue(guess.entity.pantheon) || "",
					}}
				/>
				<GodleGuessCell
					label={getSubjectLabelFromValue(guess.entity.subject)}
					matchType={guess.subjectMatch}
					href={subjectUrl}
					animationDelay={200}
					icon={{
						src: getSubjectIcon(guess.entity.subject),
						alt: getSubjectLabelFromValue(guess.entity.subject) || "",
					}}
				/>
				<GodleGuessCell
					label={getGenreLabel(guess.entity.genre)}
					matchType={guess.genreMatch}
					animationDelay={300}
				/>
				<GodleGuessCell
					label={getAttributeLabelFromValue(guess.entity.mainDomain)}
					matchType={guess.mainDomainMatch}
					animationDelay={400}
				/>
				<GodleGuessCell
					label={getAttributesLabel(guess.entity.attributes)}
					matchType={guess.attributesMatch}
					animationDelay={500}
					textSize="sm"
				/>
			</div>
		</>
	);
};

export default GodleGuessRow;
