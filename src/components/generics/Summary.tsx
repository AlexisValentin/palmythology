"use client";

import type { FC } from "react";
import { useRef, useState } from "react";
import Markdown from "react-markdown";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";
import styles from "./Summary.module.scss";

interface SummaryProps {
	content: string;
}

export const Summary: FC<SummaryProps> = ({ content }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const summaryRef = useRef<HTMLDivElement>(null);

	const handleToggle = () => {
		if (isExpanded) {
			const element = summaryRef.current;

			if (element) {
				const offsetTop =
					element.getBoundingClientRect().top + window.scrollY - 75;
				window.scrollTo({
					top: offsetTop,
					behavior: "smooth",
				});
			}
		}

		setIsExpanded(!isExpanded);
	};

	return (
		<div className={styles.outer}>
			<div ref={summaryRef} className={styles.container}>
				<div className={styles.inner}>
					<div
						className={`${styles.content} ${isExpanded ? styles.contentExpanded : ""}`}
					>
						<Markdown>{content}</Markdown>
					</div>
					{!isExpanded && <div className={styles.fade} />}
				</div>
				<button
					type="button"
					onClick={handleToggle}
					onTouchEnd={(e) => {
						e.preventDefault();
						handleToggle();
					}}
					className={`${styles.toggleButton} ${isExpanded ? styles.toggleButtonExpanded : styles.toggleButtonCollapsed}`}
					aria-expanded={isExpanded}
					aria-label={isExpanded ? "Voir moins" : "Voir plus"}
				>
					<div className={`${styles.arrowWrapper} ${isExpanded ? styles.arrowRotated : ""}`}>
						<ArrowDownIcon customColor="black" />
					</div>
				</button>
			</div>
		</div>
	);
};
