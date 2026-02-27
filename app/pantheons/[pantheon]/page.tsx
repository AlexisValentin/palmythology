import { notFound } from "next/navigation";
import LPCardList from "../../../src/components/domains/cards/LPCardList";
import {
	CategoryPageFaqSection,
	CategoryPageSummarySection,
} from "../../../src/components/domains/categories/CategoryPageSections";
import PageHeader from "../../../src/components/generics/PageHeader";
import { getPantheonLabelFromValue } from "../../../src/utils/cards/pantheons";
import type { PantheonValue } from "../../../src/utils/cards/pantheons.constants";
import {
	fetchAllCardsFromCriterias,
	fetchLandingPage,
} from "../../../src/utils/cms/cms.requests";

export const dynamicParams = true;
export const generateStaticParams = async () => [];
// Revalidate constant should be statically analyzed, so no calculation or export can be used
export const revalidate = 604800;

interface PantheonPagePropsType {
	params: Promise<{ pantheon: string }>;
}

export const generateMetadata = async ({ params }: PantheonPagePropsType) => {
	const pageParams = await params;
	const pantheon = pageParams.pantheon;

	const pantheonLabel = getPantheonLabelFromValue(pantheon as PantheonValue);
	const optimizedTitle = `${pantheonLabel} | Panthéon mythologique - Palmythology`;

	const description = `Explorez le panthéon ${pantheonLabel} avec des fiches détaillées sur les divinités, héros et créatures. Ressources pédagogiques sur Palmythology.`;

	return {
		title: optimizedTitle,
		description,
		robots: {
			index: true,
			follow: true,
		},
		alternates: {
			canonical: `https://palmythology.com/pantheons/${pantheon}`,
			languages: {
				fr: `https://palmythology.com/pantheons/${pantheon}`,
			},
		},
		openGraph: {
			title: optimizedTitle,
			description,
			siteName: "Palmythology",
			url: `https://palmythology.com/pantheons/${pantheon}`,
			images: [
				{
					url: "https://palmythology.com/og-image.png",
					width: 1200,
					height: 630,
					alt: "Logo officiel de la Palmythology",
					type: "image/png",
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
					url: "https://palmythology.com/og-image.png",
					alt: "Logo officiel de la Palmythology",
				},
			],
		},
	};
};

const PantheonPage = async ({ params }: PantheonPagePropsType) => {
	const pageParams = await params;
	const pantheon = pageParams.pantheon;
	const pantheonLabel = getPantheonLabelFromValue(pantheon as PantheonValue);

	if (!pantheonLabel) notFound();

	const [results, pantheonContent] = await Promise.all([
		fetchAllCardsFromCriterias({ pantheon, subject: "", genre: "" }),
		fetchLandingPage("pantheons", pantheon),
	]);

	return (
		<>
			<PageHeader title={`Panthéon ${pantheonLabel?.toLowerCase()}`} />
			<CategoryPageSummarySection summary={pantheonContent?.mdSummary} />
			<LPCardList cards={results} />
			<CategoryPageFaqSection faq={pantheonContent?.faq} />
		</>
	);
};

export default PantheonPage;
