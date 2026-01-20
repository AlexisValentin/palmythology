import Link from "next/link";
import { MatchType } from "../../../utils/godle/godle.types";

interface GodleGuessCellProps {
	label: string | null;
	matchType: MatchType;
	href?: string;
	animationDelay?: number;
	textSize?: "sm" | "base";
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
}) => {
	const cellClasses = `px-4 py-5 rounded-xl border-2 text-center animate-colorReveal ${getMatchStyle(matchType)}`;
	const textClasses =
		textSize === "sm" ? "text-sm leading-tight" : "text-base font-medium";

	const content = (
		<div className="flex items-center justify-center h-full">
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
