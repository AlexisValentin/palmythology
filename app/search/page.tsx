import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import Filter from "../../src/components/domains/search/Filter";
import SearchAutocomplete from "../../src/components/domains/search/SearchAutocomplete";
import PageHeader from "../../src/components/generics/PageHeader";

export const metadata: Metadata = {
	title: "Recherche | Mythologies du monde - Palmythology",
	description: `La Palmythology propose un moteur de recherche pour trouver la fiche qu'il vous faut, parmi 11 différents panthéons et 7 différents sujets.`,
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://palmythology.com/search",
		languages: {
			fr: "https://palmythology.com/search",
		},
	},
	openGraph: {
		title: "Recherche | Mythologies du monde - Palmythology",
		description: `La Palmythology propose un moteur de recherche pour trouver la fiche qu'il vous faut, parmi 11 différents panthéons et 7 différents sujets.`,
		url: "https://palmythology.com/search",
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
		title: "Recherche | Mythologies du monde - Palmythology",
		description: `La Palmythology propose un moteur de recherche pour trouver la fiche qu'il vous faut, parmi 11 différents panthéons et 7 différents sujets.`,
		images: [
			{
				url: "https://palmythology.com/icon/favicon.ico",
				alt: "Logo officiel de la Palmythology",
			},
		],
	},
};

const SearchPage: React.FC = () => {
	const webPageSchema = {
		"@context": "https://schema.org",
		"@type": "SearchResultsPage",
		name: "Recherche | Mythologies du monde - Palmythology",
		description:
			"La Palmythology propose un moteur de recherche pour trouver la fiche qu'il vous faut, parmi 11 différents panthéons et 7 différents sujets.",
		url: "https://palmythology.com/search",
		inLanguage: "fr-FR",
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
			/>
			<PageHeader
				title="Recherche"
				subtitle="Recherchez votre fiche préférée de la Palmythology"
			/>
			<div className="flex flex-col items-center justify-center mt-12">
				<div className="w-full px-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
					<Suspense>
						<SearchAutocomplete />
					</Suspense>
				</div>
			</div>
			<Suspense>
				<Filter />
			</Suspense>
		</>
	);
};

export default SearchPage;
