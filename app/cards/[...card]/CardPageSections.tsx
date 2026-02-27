import Image from "next/image";
import type { FC } from "react";
import styles from "./CardPageSections.module.scss";
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
		<div className={styles.section}>
			<div className={styles.sectionHeader}>
				<Image
					className={styles.sectionIcon}
					src={QuotationIcon}
					alt="Icône de citation"
					width={24}
					height={24}
					unoptimized
				/>
				<h3 className={styles.sectionTitle}>Citations</h3>
			</div>
			{quotations.map(({ author, quotation, origin }) => {
				return (
					<div
						key={`${author}-${quotation.split(" ")}`}
						className={styles.quotationItem}
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
		<div className={styles.section}>
			<div className={styles.sectionHeader}>
				<Image
					className={styles.sectionIcon}
					src={ReuseArrowsIcon}
					alt="Icône de suggestions"
					width={32}
					height={32}
					unoptimized
				/>
				<h3 className={styles.sectionTitle}>Dans le même sujet</h3>
			</div>
			<div className={styles.cardList}>
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
