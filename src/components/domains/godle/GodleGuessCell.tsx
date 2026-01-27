import Image from "next/image";
import Link from "next/link";
import { MatchType } from "../../../utils/godle/godle.types";

interface GodleGuessCellProps {
	label: string | null;
	matchType: MatchType;
	href?: string;
	animationDelay?: number;
	textSize?: "sm" | "base";
	icon?: {
		src: string;
		alt: string;
	};
}

const getMatchStyle = (matchType: MatchType): string => {
	const baseClasses = "transition-all duration-500 ease-out";

	if (matchType === MatchType.EXACT) {
		return `${baseClasses} bg-gradient-to-br from-green-500 to-green-600 text-white border-green-700 shadow-lg shadow-green-500/30`;
	}
	if (matchType === MatchType.PARTIAL) {
		return `${baseClasses} bg-gradient-to-br from-yellow-400 to-yellow-500 text-white border-yellow-600 shadow-lg shadow-yellow-500/30`;
	}
	return `${baseClasses} bg-gradient-to-br from-red-500 to-red-600 text-white border-red-700 shadow-lg shadow-red-500/30`;
};

const GodleGuessCell: React.FC<GodleGuessCellProps> = ({
	label,
	matchType,
	href,
	animationDelay = 0,
	textSize = "base",
	icon,
}) => {
	const cellClasses = `px-4 py-5 rounded-xl border-2 text-center animate-colorReveal ${getMatchStyle(matchType)}`;
	const textClasses =
		textSize === "sm" ? "text-sm leading-tight" : "text-base font-medium";

	const content = (
		<div className="flex flex-col items-center justify-center h-full">
			{icon && (
				<div className="flex justify-center mb-2">
					<div className="flex justify-center w-10 h-10 overflow-hidden">
						<Image
							src={icon.src}
							alt={icon.alt}
							width={40}
							height={40}
							className="object-contain"
							sizes="2.5rem"
						/>
					</div>
				</div>
			)}
			<span className={textClasses}>{label ?? "/"}</span>
		</div>
	);

	if (href) {
		return (
			<Link
				href={href}
				target="_blank"
				className={`${cellClasses} hover:brightness-75`}
				style={{ animationDelay: `${animationDelay}ms` }}
			>
				{content}
			</Link>
		);
	}

	return (
		<div
			className={cellClasses}
			style={{ animationDelay: `${animationDelay}ms` }}
		>
			{content}
		</div>
	);
};

export default GodleGuessCell;
