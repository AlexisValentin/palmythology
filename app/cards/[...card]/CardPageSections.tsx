import Image from "next/image";
import Script from "next/script";
import type { FC } from "react";
import MagnifyingGlassIcon from "../../../src/assets/icons/magnifying_glass.svg";
import QnAIcon from "../../../src/assets/icons/question_marks.svg";
import QuotationIcon from "../../../src/assets/icons/quotation_marks.svg";
import ReuseArrowsIcon from "../../../src/assets/icons/reuse_arrows.svg";
import { Faq, type FaqProps } from "../../../src/components/generics/Faq";
import PageSquare, {
	CONTENT_TYPE,
	PAGE_SQUARE_SIZE_TYPE,
} from "../../../src/components/generics/PageSquare";
import type { QuotationProps } from "../../../src/components/generics/Quotation";
import Quotation from "../../../src/components/generics/Quotation";
import Summary from "../../../src/components/generics/Summary";
import type { CardRelatedType } from "../../../src/utils/cms/cms.constants";

interface CardPageSummarySectionProps {
	summary: string;
}

export const CardPageSummarySection: FC<CardPageSummarySectionProps> = ({
	summary,
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
				/>
				<h3 className="text-xl font-bold">Les Grandes Lignes</h3>
			</div>
			<div className="w-full mt-8">
				<Summary content={summary} />
			</div>
		</>
	);
};

interface CardPageFaqSectionProps {
	faq: FaqProps[];
}

export const CardPageFaqSection: FC<CardPageFaqSectionProps> = ({ faq }) => {
	if (!faq || faq?.length === 0) {
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
			<div className="flex flex-col items-center w-full border-t-2 mt-8 lg:w-3/4">
				<div className="flex flex-row justify-center items-center mt-6">
					<Image
						className="mr-2"
						src={QnAIcon}
						alt="Icône de foire aux questions"
						width={32}
						height={32}
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

interface CardPageQuotationsSectionProps {
	quotations: QuotationProps[];
}

export const CardPageQuotationsSection: FC<CardPageQuotationsSectionProps> = ({
	quotations,
}) => {
	if (!quotations || quotations?.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col items-center w-full border-t-2 mt-8 lg:w-3/4">
			<div className="flex flex-row justify-center items-center mt-8">
				<Image
					className="mr-2"
					src={QuotationIcon}
					alt="Icône de citation"
					width={24}
					height={24}
				/>
				<h3 className="text-xl font-bold">Citations</h3>
			</div>
			{quotations.map(({ author, quotation, origin }) => {
				return (
					<div
						key={`${author}-${quotation.split(" ")}`}
						className="flex flex-col mt-6 w-full"
					>
						<Quotation quotation={quotation} author={author} origin={origin} />
					</div>
				);
			})}
		</div>
	);
};

interface CardPageRelatedCardsSectionProps {
	relatedCards: CardRelatedType[];
}

export const CardPageRelatedCardsSection: FC<
	CardPageRelatedCardsSectionProps
> = ({ relatedCards }) => {
	if (!relatedCards || relatedCards.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col items-center w-full border-t-2 mt-8 lg:w-3/4">
			<div className="flex items-center justify-center mt-8">
				<Image
					className="mr-2"
					src={ReuseArrowsIcon}
					alt="Icône de foire aux questions"
					width={32}
					height={32}
				/>
				<h3 className="text-xl font-bold">Dans le même sujet</h3>
			</div>
			<div className="flex flex-wrap justify-center mt-4">
				{relatedCards.map(
					({ name, subtitle, pantheon, icon }: CardRelatedType) => (
						<PageSquare
							key={`${name}-${subtitle}}`}
							title={name}
							subtitle={subtitle}
							pantheon={pantheon}
							icon={icon}
							contentType={CONTENT_TYPE.CARD}
							size={PAGE_SQUARE_SIZE_TYPE.COMPACT}
						/>
					),
				)}
			</div>
		</div>
	);
};
