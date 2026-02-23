import Image from "next/image";
import type { FC } from "react";
import QuotationIcon from "../../../src/assets/icons/quotation_marks.svg";
import ReuseArrowsIcon from "../../../src/assets/icons/reuse_arrows.svg";
import type { FaqProps } from "../../../src/components/generics/Faq";
import PageSquare, {
	CONTENT_TYPE,
	PAGE_SQUARE_SIZE_TYPE,
} from "../../../src/components/generics/PageSquare";
import {
	PageFaqSection,
	PageSummarySection,
} from "../../../src/components/generics/PageSummarySections";
import type { QuotationProps } from "../../../src/components/generics/Quotation";
import Quotation from "../../../src/components/generics/Quotation";
import type { CardRelatedType } from "../../../src/utils/cms/cms.constants";

interface CardPageSummarySectionProps {
	summary: string;
}

export const CardPageSummarySection: FC<CardPageSummarySectionProps> = ({
	summary,
}) => <PageSummarySection summary={summary} label="Les Grandes Lignes" />;

interface CardPageFaqSectionProps {
	faq: FaqProps[];
}

export const CardPageFaqSection: FC<CardPageFaqSectionProps> = ({ faq }) => (
	<PageFaqSection faq={faq} />
);

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
					unoptimized
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
					alt="Icône de suggestions"
					width={32}
					height={32}
					unoptimized
				/>
				<h3 className="text-xl font-bold">Dans le même sujet</h3>
			</div>
			<div className="flex flex-wrap justify-center mt-4">
				{relatedCards.map(
					({ name, subtitle, pantheon, icon }: CardRelatedType) => (
						<PageSquare
							key={`${name}-${subtitle}`}
							title={name}
							subtitle={subtitle}
							pantheon={pantheon}
							icon={icon}
							contentType={CONTENT_TYPE.CARD}
							size={PAGE_SQUARE_SIZE_TYPE.COMPACT}
							prefetch={false}
						/>
					),
				)}
			</div>
		</div>
	);
};
