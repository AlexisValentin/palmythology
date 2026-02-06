"use client";

import Image from "next/image";
import Link from "next/link";
import { getDomainLabelFromValue } from "../../../utils/cards/domains";
import { getGenreLabelFromValue } from "../../../utils/cards/genres";
import { getPantheonLabelFromValue } from "../../../utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../../../utils/cards/subjects";
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

	const getMatchStyle = (isCorrect: boolean, matchType: MatchType): string => {
		const baseClasses = "transition-all duration-500 ease-out";

		if (isCorrect || matchType === MatchType.EXACT) {
			return `${baseClasses} bg-gradient-to-br from-green-500 to-green-600 text-white border-green-700 shadow-lg shadow-green-500/30`;
		}
		if (matchType === MatchType.PARTIAL) {
			return `${baseClasses} bg-gradient-to-br from-yellow-400 to-yellow-500 text-white border-yellow-600 shadow-lg shadow-yellow-500/30`;
		}
		return `${baseClasses} bg-gradient-to-br from-red-500 to-red-600 text-white border-red-700 shadow-lg shadow-red-500/30`;
	};

	const getGenreLabel = (genre?: string): string =>
		genre ? (getGenreLabelFromValue(genre as never) ?? genre) : "/";

	const getDomainLabel = (domains?: string[]): string => {
		if (!domains || domains.length === 0) return "/";

		return domains.map((d) => getDomainLabelFromValue(d)).join(", ");
	};

	const getMatchIndicatorColor = (matchType: MatchType): string => {
		if (matchType === MatchType.EXACT) return "bg-green-300";
		if (matchType === MatchType.PARTIAL) return "bg-yellow-300";

		return "bg-red-300";
	};

	const entityUrl = `/${guess.entity.slug}`;
	const pantheonUrl = `/pantheons/${guess.entity.pantheon}`;
	const subjectUrl = `/subjects/${guess.entity.subject}`;

	return (
		<>
			<div className="md:hidden">
				<div
					className={`px-4 py-4 rounded-xl border-2 animate-colorReveal ${getMatchStyle(guess.isCorrect, MatchType.NONE)}`}
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
									className="flex items-baseline gap-1.5"
								>
									<span
										className={`inline-block w-2 h-2 rounded-full flex-shrink-0 translate-y-[-1px] ${getMatchIndicatorColor(guess.pantheonMatch)}`}
									/>
									<span className="truncate">
										{getPantheonLabelFromValue(guess.entity.pantheon)}
									</span>
								</Link>
								<Link
									href={subjectUrl}
									target="_blank"
									className="flex items-baseline gap-1.5"
								>
									<span
										className={`inline-block w-2 h-2 rounded-full flex-shrink-0 translate-y-[-1px] ${getMatchIndicatorColor(guess.subjectMatch)}`}
									/>
									<span className="truncate">
										{getSubjectLabelFromValue(guess.entity.subject)}
									</span>
								</Link>
								<div className="flex items-baseline gap-1.5">
									<span
										className={`inline-block w-2 h-2 rounded-full flex-shrink-0 translate-y-[-1px] ${getMatchIndicatorColor(guess.genreMatch)}`}
									/>
									<span className="truncate">
										{getGenreLabel(guess.entity.genre)}
									</span>
								</div>
								<div className="flex items-baseline gap-1.5 col-span-2">
									<span
										className={`inline-block w-2 h-2 rounded-full flex-shrink-0 translate-y-[-1px] ${getMatchIndicatorColor(guess.domainMatch)}`}
									/>
									<span className="text-xs">
										{getDomainLabel(guess.entity.godle?.domain)}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden md:grid md:grid-cols-5 gap-2 mb-3">
				<Link
					href={entityUrl}
					target="_blank"
					className={`px-4 py-5 rounded-xl border-2 text-center animate-colorReveal hover:brightness-75 ${getMatchStyle(guess.isCorrect, MatchType.NONE)}`}
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
					label={getDomainLabel(guess.entity.godle?.domain)}
					matchType={guess.domainMatch}
					animationDelay={400}
					textSize="sm"
				/>
			</div>
		</>
	);
};

export default GodleGuessRow;
