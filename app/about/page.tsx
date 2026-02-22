import type { Metadata } from "next";
import AnonymousIcon from "../../src/assets/icons/anonymous.svg";
import FrenchHeartIcon from "../../src/assets/icons/french_heart.svg";
import NoAdsIcon from "../../src/assets/icons/no_ads.svg";
import PageHeader from "../../src/components/generics/PageHeader";
import PageSection from "../../src/components/generics/PageSection";


export const metadata: Metadata = {
	title: "À propos | Palmythology",
	description:
		"Made in France, La Palmythology vous propose une expérience sans publicité et sans pollution visuelle, avec des données de navigation anonymisées.",
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://palmythology.com/about",
		languages: {
			fr: "https://palmythology.com/about",
		},
	},
	openGraph: {
		title: "À propos | Palmythology",
		description:
			"Made in France, La Palmythology vous propose une expérience sans publicité et sans pollution visuelle, avec des données de navigation anonymisées.",
		url: "https://palmythology.com/about",
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
		title: "À propos | Palmythology",
		description:
			"Made in France, La Palmythology vous propose une expérience sans publicité et sans pollution visuelle, avec des données de navigation anonymisées.",
		images: [
			{
				url: "https://palmythology.com/icon/favicon.ico",
				alt: "Logo officiel de la Palmythology",
			},
		],
	},
};

const AboutPage = () => {
	const webPageSchema = {
		"@context": "https://schema.org",
		"@type": "AboutPage",
		name: "À propos | Palmythology",
		description:
			"Made in France, La Palmythology vous propose une expérience sans publicité et sans pollution visuelle, avec des données de navigation anonymisées.",
		url: "https://palmythology.com/about",
		inLanguage: "fr-FR",
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
			/>
			<PageHeader
				title="A propos"
				subtitle="Retrouvez des informations pratiques sur la Palmythology"
			/>
			<div className="flex flex-col">
				<PageSection
					title="100% français"
					description="Cocorico ! Le site web de la Palmythology est réalisé par un seul et unique développeur français."
					icon={FrenchHeartIcon}
				/>
				<PageSection
					title="Garanti sans publicité"
					description="La Palmythology vous garantit une navigation sans aucune pollution visuelle."
					icon={NoAdsIcon}
				/>
				<PageSection
					title="Données anonymisées"
					description="Le site récolte des statistiques de navigation sans pour autant impacter vos données personnelles."
					icon={AnonymousIcon}
				/>
			</div>
		</>
	);
};

export default AboutPage;
