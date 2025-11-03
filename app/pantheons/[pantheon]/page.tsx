import PantheonCardList from "../../../src/components/domains/cards/LPCardList";
import PageHeader from "../../../src/components/generics/PageHeader";
import { getPantheonLabelFromValue } from "../../../src/utils/cards/pantheons";
import type { PantheonValue } from "../../../src/utils/cards/pantheons.constants";
import {
	fetchCardsFromCriterias,
	fetchSpecificPantheon,
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
	const story = await fetchSpecificPantheon(pantheon);

	const pantheonLabel = getPantheonLabelFromValue(pantheon as PantheonValue);
	const optimizedTitle = `${pantheonLabel} | Panthéon mythologique - Palmythology`;
	const description =
		story.data.story.content?.metaDescription ||
		`Explorez le panthéon ${pantheonLabel} avec des fiches détaillées sur les divinités, héros et créatures. Ressources pédagogiques sur Palmythology.`;

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
			description: story.data.story.content?.metaDescription,
			siteName: "Palmythology",
			url: `https://palmythology.com/pantheons/${pantheon}`,
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

const PantheonPage = async ({ params }: PantheonPagePropsType) => {
	const pageParams = await params;
	const pantheon = pageParams.pantheon;

	const { results } = await fetchCardsFromCriterias(
		{ pantheon, subject: "" },
		1,
	);

	const pantheonLabel = getPantheonLabelFromValue(pantheon as PantheonValue);

	return (
		<>
			<PageHeader title={`Panthéon ${pantheonLabel?.toLowerCase()}`} />
			<PantheonCardList relatedCards={results} />
		</>
	);
};

export default PantheonPage;
