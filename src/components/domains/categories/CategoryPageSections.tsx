import type { FC } from "react";
import type { FaqItemType } from "../../../utils/cms/cms.constants";
import {
	PageFaqSection,
	PageSummarySection,
} from "../../generics/PageSummarySections";

interface CategoryPageSummarySectionProps {
	summary?: string;
}

export const CategoryPageSummarySection: FC<
	CategoryPageSummarySectionProps
> = ({ summary }) => (
	<PageSummarySection summary={summary} label="Présentation" />
);

interface CategoryPageFaqSectionProps {
	faq?: FaqItemType[];
}

export const CategoryPageFaqSection: FC<CategoryPageFaqSectionProps> = ({
	faq,
}) => <PageFaqSection faq={faq} className="mx-auto" />;
