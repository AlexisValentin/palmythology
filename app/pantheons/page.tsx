import type { Metadata } from "next";
import PantheonsList from "../../src/components/domains/cards/PantheonList";
import PageHeader from "../../src/components/generics/PageHeader";

export const metadata: Metadata = {
	title: "Panthéons | Mythologies du monde - Palmythology",
	description:
		"Sélectionnez un panthéon parmi 11 : grec, égyptien, scandinave, celtique, japonais, chinois, maya, mésopotamien, aztèque, hindou, romain.",
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://palmythology.com/pantheons",
		languages: {
			fr: "https://palmythology.com/pantheons",
		},
	},
	openGraph: {
		title: "Panthéons | Mythologies du monde - Palmythology",
		description:
			"Sélectionnez un panthéon parmi 11 : grec, égyptien, scandinave, celtique, japonais, chinois, maya, mésopotamien, aztèque, hindou, romain.",
		url: "https://palmythology.com/pantheons",
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
		title: "Panthéons | Mythologies du monde - Palmythology",
		description:
			"Sélectionnez un panthéon parmi 11 : grec, égyptien, scandinave, celtique, japonais, chinois, maya, mésopotamien, aztèque, hindou, romain.",
		images: [
			{
				url: "https://palmythology.com/icon/favicon.ico",
				alt: "Logo officiel de la Palmythology",
			},
		],
	},
};

const PantheonsPage = () => {
	return (
		<>
			<PageHeader
				title="Panthéons"
				subtitle="Consultez tous les détails de chaque panthéon mythologique"
			/>
			<PantheonsList />
		</>
	);
};

export default PantheonsPage;
