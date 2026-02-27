import Image from "next/image";
import Link from "next/link";
import { getMatchStyleKey } from "../../../utils/godle/godle.styles";
import type { MatchType } from "../../../utils/godle/godle.types";
import styles from "./GodleGuessCell.module.scss";

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

const GodleGuessCell: React.FC<GodleGuessCellProps> = ({
	label,
	matchType,
	href,
	animationDelay = 0,
	textSize = "base",
	icon,
}) => {
	const matchKey = getMatchStyleKey(matchType);
	const cellClass = `${styles.cell} ${styles[matchKey]} animate-colorReveal`;
	const textClass = textSize === "sm" ? styles.textSm : styles.textBase;

	const content = (
		<div className={styles.content}>
			{icon && (
				<div className={styles.iconWrapper}>
					<div className={styles.iconInner}>
						<Image
							src={icon.src}
							alt={icon.alt}
							width={40}
							height={40}
							className={styles.icon}
							sizes="2.5rem"
						/>
					</div>
				</div>
			)}
			<span className={textClass}>{label ?? "/"}</span>
		</div>
	);

	if (href) {
		return (
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={`${cellClass} ${styles.cellLink}`}
				style={{ animationDelay: `${animationDelay}ms` }}
			>
				{content}
			</Link>
		);
	}

	return (
		<div className={cellClass} style={{ animationDelay: `${animationDelay}ms` }}>
			{content}
		</div>
	);
};

export default GodleGuessCell;
