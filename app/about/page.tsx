import { Metadata } from "next";
import PageHeader from "../../src/components/generics/PageHeader";
import PageSection from "../../src/components/generics/PageSection";
import FrenchHeartIcon from "../../src/assets/icons/french_heart.svg";
import NoAdsIcon from "../../src/assets/icons/no_ads.svg";
import AnonymousIcon from "../../src/assets/icons/anonymous.svg";
import { NextImageType } from "../../src/utils/image.constants";

export const metadata: Metadata = {
	title: "A propos du site internet | Palmythology",
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
		title: "A propos du site internet | Palmythology",
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
			},
		],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "A propos du site internet | Palmythology",
		description:
			"Made in France, La Palmythology vous propose une expérience sans publicité et sans pollution visuelle, avec des données de navigation anonymisées.",
		images: ["https://palmythology.com/icon/favicon.ico"],
	},
};

const AboutPage = () => {
	return (
		<>
			<PageHeader
				title="A propos"
				subtitle="Retrouvez des informations pratiques sur la Palmythology"
			/>
			<div className="flex flex-col">
				<PageSection
					name="100% français"
					description="Cocorico ! Le site web de la Palmythology est réalisé par un seul et unique développeur français."
					icon={FrenchHeartIcon as unknown as NextImageType}
				/>
				<PageSection
					name="Garanti sans publicité"
					description="La Palmythology vous garantit une navigation sans aucune pollution visuelle."
					icon={NoAdsIcon as unknown as NextImageType}
				/>
				<PageSection
					name="Données anonymisées"
					description="Le site récolte des statistiques de navigation sans pour autant impacter vos données personnelles."
					icon={AnonymousIcon as unknown as NextImageType}
				/>
			</div>
		</>
	);
};

export default AboutPage;
