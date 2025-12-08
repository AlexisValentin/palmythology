"use client";

import type { FC } from "react";
import { useRef, useState } from "react";
import Markdown from "react-markdown";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";
import { getSummaryBackgroundColor } from "../../utils/styles/colors";

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
		<div className="md:flex md:justify-center">
			<div
				ref={summaryRef}
				className={`flex flex-col items-center justify-center rounded-lg drop-shadow-lg ${getSummaryBackgroundColor()} italic p-3 mb-10 w-full relative`}
			>
				<div className="w-full relative">
					<div
						className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
							isExpanded ? "max-h-[125rem]" : "max-h-48 md:max-h-80"
						}`}
					>
						<Markdown>{content}</Markdown>
					</div>
					{!isExpanded && (
						<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-200 via-neutral-200 to-transparent pointer-events-none" />
					)}
				</div>
				<button
					type="button"
					onClick={handleToggle}
					onTouchEnd={(e) => {
						e.preventDefault();
						handleToggle();
					}}
					className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition-all cursor-pointer ${
						isExpanded ? "mt-2" : "absolute bottom-2 left-1/2 -translate-x-1/2"
					}`}
					aria-expanded={isExpanded}
					aria-label={isExpanded ? "Voir moins" : "Voir plus"}
				>
					<div
						className={`transition-transform duration-500 ease-in-out ${isExpanded ? "rotate-180" : ""}`}
					>
						<ArrowDownIcon customColor="black" />
					</div>
				</button>
			</div>
		</div>
	);
};
