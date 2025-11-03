import type { Metadata } from "next";
import PantheonsList from "../../src/components/domains/cards/PantheonList";
import PageHeader from "../../src/components/generics/PageHeader";
import { ALL_PANTHEON } from "../../src/utils/cards/pantheons.constants";

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
	const webPageSchema = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Panthéons | Mythologies du monde - Palmythology",
		description:
			"Sélectionnez un panthéon parmi 11 : grec, égyptien, scandinave, celtique, japonais, chinois, maya, mésopotamien, aztèque, hindou, romain.",
		url: "https://palmythology.com/pantheons",
		inLanguage: "fr-FR",
		mainEntity: {
			"@id": "https://palmythology.com/pantheons#itemlist",
		},
	};

	const itemListSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"@id": "https://palmythology.com/pantheons#itemlist",
		name: "Liste des panthéons mythologiques",
		description: "Découvrez les 11 panthéons couverts par Palmythology",
		numberOfItems: 11,
		itemListElement: ALL_PANTHEON.map((pantheon, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: pantheon.label,
			url: `https://palmythology.com/pantheons/${pantheon.value}`,
			image: pantheon.icon,
		})),
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
			/>
			<PageHeader
				title="Panthéons"
				subtitle="Consultez tous les détails de chaque panthéon mythologique"
			/>
			<PantheonsList />
		</>
	);
};

export default PantheonsPage;
