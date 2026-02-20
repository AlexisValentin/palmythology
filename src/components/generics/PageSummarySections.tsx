import Image from "next/image";
import Script from "next/script";
import type { FC } from "react";
import MagnifyingGlassIcon from "../../assets/icons/magnifying_glass.svg";
import QnAIcon from "../../assets/icons/question_marks.svg";
import { Faq } from "./Faq";
import { Summary } from "./Summary";

interface SummarySectionProps {
	summary?: string;
	label: string;
}

export const PageSummarySection: FC<SummarySectionProps> = ({
	summary,
	label,
}) => {
	if (!summary) return null;

	return (
		<>
			<div className="flex md:hidden flex-row justify-center items-center mt-8">
				<Image
					className="mr-2"
					src={MagnifyingGlassIcon}
					alt="Icône de résumé"
					width={24}
					height={24}
					unoptimized
				/>
				<h3 className="text-xl font-bold">{label}</h3>
			</div>
			<div className="w-full mt-8">
				<Summary content={summary} />
			</div>
		</>
	);
};

interface FaqItem {
	question: string;
	response: string;
}

interface FaqSectionProps {
	faq?: FaqItem[];
	className?: string;
}

export const PageFaqSection: FC<FaqSectionProps> = ({ faq, className }) => {
	if (!faq || faq.length === 0) {
		return null;
	}

	const faqPageSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faq.map(({ question, response }) => ({
			"@type": "Question",
			name: question,
			acceptedAnswer: {
				"@type": "Answer",
				text: response,
			},
		})),
	};

	return (
		<>
			<Script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
			/>
			<div
				className={`flex flex-col items-center w-full border-t-2 mt-8 lg:w-3/4 ${className ?? ""}`}
			>
				<div className="flex flex-row justify-center items-center mt-6">
					<Image
						className="mr-2"
						src={QnAIcon}
						alt="Icône de foire aux questions"
						width={32}
						height={32}
						unoptimized
					/>
					<h3 className="text-xl font-bold">Questions fréquentes</h3>
				</div>
				{faq.map(({ question, response }) => (
					<div
						key={question}
						className="flex flex-col justify-center items-center mt-8 w-full"
					>
						<Faq question={question} response={response} />
					</div>
				))}
			</div>
		</>
	);
};
