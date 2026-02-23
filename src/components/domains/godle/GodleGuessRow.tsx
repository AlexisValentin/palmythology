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
import { getMatchStyle } from "../../../utils/godle/godle.styles";
import type { GuessResult } from "../../../utils/godle/godle.types";
import { MatchType } from "../../../utils/godle/godle.types";
import { getPantheonIcon } from "../../../utils/pantheons";
import { getSubjectIcon } from "../../../utils/subjects";
import GodleGuessCell from "./GodleGuessCell";

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

	return (
		<>
			<div className="md:hidden">
				<div
					className={`px-4 py-4 rounded-xl border-2 animate-colorReveal ${getMatchStyle(getCardMatchType())}`}
					style={{ animationDelay: "0ms" }}
				>
					<div className="flex items-center gap-4">
						<Link
							href={entityUrl}
							target="_blank"
							className="w-14 h-14 flex-shrink-0 overflow-hidden"
						>
							<Image
								src={entityIcon.src}
								alt={entityIcon.alt}
								width={56}
								height={56}
								className="object-contain"
								sizes="3.5rem"
							/>
						</Link>
						<div className="flex-1 min-w-0">
							<Link
								href={entityUrl}
								target="_blank"
								className="text-base font-bold leading-tight mb-2 block"
							>
								{guess.entity.name}
							</Link>
							<div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm">
								<Link
									href={pantheonUrl}
									target="_blank"
									className="flex items-center gap-1.5"
								>
									<Image
										src={getMatchIndicatorIcon(guess.pantheonMatch)}
										alt=""
										width={14}
										height={14}
										className="flex-shrink-0"
									/>
									<span className="truncate">
										{getPantheonLabelFromValue(guess.entity.pantheon)}
									</span>
								</Link>
								<Link
									href={subjectUrl}
									target="_blank"
									className="flex items-center gap-1.5"
								>
									<Image
										src={getMatchIndicatorIcon(guess.subjectMatch)}
										alt=""
										width={14}
										height={14}
										className="flex-shrink-0"
									/>
									<span className="truncate">
										{getSubjectLabelFromValue(guess.entity.subject)}
									</span>
								</Link>
								<div className="flex items-center gap-1.5">
									<Image
										src={getMatchIndicatorIcon(guess.genreMatch)}
										alt=""
										width={14}
										height={14}
										className="flex-shrink-0"
									/>
									<span className="truncate">
										{getGenreLabel(guess.entity.genre)}
									</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image
										src={getMatchIndicatorIcon(guess.mainDomainMatch)}
										alt=""
										width={14}
										height={14}
										className="flex-shrink-0"
									/>
									<span className="truncate">
										{getAttributeLabelFromValue(guess.entity.mainDomain)}
									</span>
								</div>
								<div className="flex items-center gap-1.5 col-span-2">
									<Image
										src={getMatchIndicatorIcon(guess.attributesMatch)}
										alt=""
										width={14}
										height={14}
										className="flex-shrink-0"
									/>
									<span className="text-xs">
										{getAttributesLabel(guess.entity.attributes)}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden md:grid md:grid-cols-6 gap-2 mb-3">
				<Link
					href={entityUrl}
					target="_blank"
					className={`px-4 py-5 rounded-xl border-2 text-center animate-colorReveal hover:brightness-75 ${getMatchStyle(guess.isCorrect ? MatchType.EXACT : MatchType.NONE)}`}
					style={{ animationDelay: "0ms" }}
				>
					<div className="flex justify-center mb-2">
						<div className="flex justify-center w-10 h-10 overflow-hidden">
							<Image
								src={entityIcon.src}
								alt={entityIcon.alt}
								width={40}
								height={40}
								className="object-contain"
								sizes="2.5rem"
							/>
						</div>
					</div>
					<div className="text-base font-bold leading-tight">
						{guess.entity.name}
					</div>
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
