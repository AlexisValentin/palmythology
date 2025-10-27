import PantheonCardList from "../../../src/components/domains/cards/LPCardList";
import PageHeader from "../../../src/components/generics/PageHeader";
import { getPantheonLabelFromValue } from "../../../src/utils/cards/pantheons";
import type { PantheonValue } from "../../../src/utils/cards/pantheons.constants";
import {
	fetchCardsFromCriterias,
	fetchSpecificPantheon,
} from "../../../src/utils/cms/cms.requests";

interface PantheonPagePropsType {
	params: Promise<{ pantheon: string }>;
}

export const generateMetadata = async ({ params }: PantheonPagePropsType) => {
	const pageParams = await params;
	const pantheon = pageParams.pantheon;
	const story = await fetchSpecificPantheon(pantheon);

	return {
		title: `Panthéon ${getPantheonLabelFromValue(
			pantheon as PantheonValue,
		)} - Les Grandes Lignes | Palmythology`,
		description: story.data.story.content?.metaDescription,
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
			title: `Panthéon ${getPantheonLabelFromValue(
				pantheon as PantheonValue,
			)} - Les Grandes Lignes | Palmythology`,
			description: story.data.story.content?.metaDescription,
			siteName: "Palmythology",
			url: `https://palmythology.com/pantheons/${pantheon}`,
			images: [
				{
					url: "https://palmythology.com/icon/favicon.ico",
					width: 600,
					height: 600,
					alt: "Logo officiel de la Palmythology",
				},
			],
			locale: "fr_FR",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: `Panthéon ${getPantheonLabelFromValue(
				pantheon as PantheonValue,
			)} - Les Grandes Lignes | Palmythology`,
			description: story.data.story.content?.metaDescription,
			images: ["https://palmythology.com/icon/favicon.ico"],
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
