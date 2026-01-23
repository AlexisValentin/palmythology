import LPCardList from "../../../src/components/domains/cards/LPCardList";
import {
	CategoryPageFaqSection,
	CategoryPageSummarySection,
} from "../../../src/components/domains/categories/CategoryPageSections";
import PageHeader from "../../../src/components/generics/PageHeader";
import { getSubjectLabelFromValue } from "../../../src/utils/cards/subjects";
import type { SubjectValue } from "../../../src/utils/cards/subjects.constants";
import {
	fetchAllCardsFromCriterias,
	fetchLandingPage,
} from "../../../src/utils/cms/cms.requests";

export const dynamicParams = true;
export const generateStaticParams = async () => [];
// Revalidate constant should be statically analyzed, so no calculation or export can be used
export const revalidate = 604800;

interface SubjectPagePropsType {
	params: Promise<{ subject: string }>;
}

export const generateMetadata = async ({ params }: SubjectPagePropsType) => {
	const pageParams = await params;
	const subject = pageParams.subject;

	const subjectLabel = getSubjectLabelFromValue(subject as SubjectValue);
	const optimizedTitle = `${subjectLabel} | Mythologie - Palmythology`;

	const description = `Découvrez tous les ${subjectLabel} de la mythologie mondiale. Fiches illustrées, comparaisons et ressources pédagogiques sur Palmythology.`;

	return {
		title: optimizedTitle,
		description,
		robots: {
			index: true,
			follow: true,
		},
		alternates: {
			canonical: `https://palmythology.com/subjects/${subject}`,
			languages: {
				fr: `https://palmythology.com/subjects/${subject}`,
			},
		},
		openGraph: {
			title: optimizedTitle,
			description,
			url: `https://palmythology.com/subjects/${subject}`,
			siteName: "Palmythology",
			images: [
				{
					url: "https://palmythology.com/icon/favicon.ico",
					width: 600,
					height: 600,
					alt: "Logo officiel de la Palmythology",
					type: "image/x-icon",
				},
			],
			locale: "fr_FR",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: optimizedTitle,
			description,
			images: [
				{
					url: "https://palmythology.com/icon/favicon.ico",
					alt: "Logo officiel de la Palmythology",
				},
			],
		},
	};
};

const SubjectPage = async ({ params }: SubjectPagePropsType) => {
	const pageParams = await params;
	const subject = pageParams.subject;

	const [results, subjectContent] = await Promise.all([
		fetchAllCardsFromCriterias({ pantheon: "", subject }),
		fetchLandingPage("subjects", subject),
	]);

	const subjectLabel = getSubjectLabelFromValue(subject as SubjectValue);

	return (
		<>
			<PageHeader title={`${subjectLabel}`} />
			<CategoryPageSummarySection summary={subjectContent?.mdSummary} />
			<LPCardList cards={results} />
			<CategoryPageFaqSection faq={subjectContent?.faq} />
		</>
	);
};

export default SubjectPage;
