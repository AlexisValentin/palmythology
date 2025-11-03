import SubjectCardList from "../../../src/components/domains/cards/LPCardList";
import PageHeader from "../../../src/components/generics/PageHeader";
import { getSubjectLabelFromValue } from "../../../src/utils/cards/subjects";
import type { SubjectValue } from "../../../src/utils/cards/subjects.constants";
import {
	fetchCardsFromCriterias,
	fetchSpecificSubject,
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
	const story = await fetchSpecificSubject(subject);

	const subjectLabel = getSubjectLabelFromValue(subject as SubjectValue);
	const optimizedTitle = `${subjectLabel} | Mythologie - Palmythology`;

	return {
		title: optimizedTitle,
		description: story.data.story.content?.metaDescription,
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
			description: story.data.story.content?.metaDescription,
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
			description: story.data.story.content?.metaDescription,
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

	const { results } = await fetchCardsFromCriterias(
		{ pantheon: "", subject },
		1,
	);

	const subjectLabel = getSubjectLabelFromValue(subject! as SubjectValue);

	return (
		<>
			<PageHeader title={`${subjectLabel}`} />
			<SubjectCardList relatedCards={results} />
		</>
	);
};

export default SubjectPage;
