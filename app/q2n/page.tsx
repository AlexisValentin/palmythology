import type { Metadata } from "next";
import Q2NCardList from "../../src/components/domains/cards/Quoi2NeufCardList";
import { fetchQ2NContent } from "../../src/utils/cms/cms.requests";

export const metadata: Metadata = {
	title: "Quoi 2 Neuf | Prochaines publications - Palmythology",
	description: `Découvrez les prochaines publications sur la Palmythology. Plongez dans l'univers des mythologies à travers des fiches détaillées et pedagogiques.`,
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://palmythology.com/q2n",
		languages: {
			fr: "https://palmythology.com/q2n",
		},
	},
	openGraph: {
		title: "Quoi 2 Neuf | Prochaines publications - Palmythology",
		description: `Découvrez le planning mensuel de la Palmythology. Chaque mois, plongez dans l'univers des mythologies à travers des fiches détaillées et pedagogiques.`,
		url: "https://palmythology.com/q2n",
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
		title: "Quoi 2 Neuf | Prochaines publications - Palmythology",
		description: `Découvrez les prochaines publications sur la Palmythology. Plongez dans l'univers des mythologies à travers des fiches détaillées et pedagogiques.`,
		images: [
			{
				url: "https://palmythology.com/icon/favicon.ico",
				alt: "Logo officiel de la Palmythology",
			},
		],
	},
};

const Quoi2NeufPage = async () => {
	const stories = await fetchQ2NContent();

	return <Q2NCardList stories={stories} />;
};

export default Quoi2NeufPage;
