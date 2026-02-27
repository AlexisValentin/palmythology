import type { Metadata } from "next";
import PageHeader from "../src/components/generics/PageHeader";
import PageSquare, {
	CONTENT_TYPE,
} from "../src/components/generics/PageSquare";
import { ROUTES } from "../src/utils/routes/routes.constants";
import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Palmythology, l'encyclopédie mythologique",
	description:
		"Explorez les mythologies du monde avec des fiches simples et intuitives avec la Palmythology. Découvrez les panthéons qui ont façonnés l'histoire.",
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://palmythology.com/",
		languages: {
			fr: "https://palmythology.com/",
		},
	},
	openGraph: {
		title: "Palmythology, l'encyclopédie mythologique",
		description:
			"Explorez les mythologies du monde avec des fiches simples et intuitives avec la Palmythology. Découvrez les panthéons qui ont façonnés l'histoire.",
		url: "https://palmythology.com/",
		siteName: "Palmythology",
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
		title: "Palmythology, l'encyclopédie mythologique",
		description:
			"Explorez les mythologies du monde avec des fiches simples et intuitives avec la Palmythology. Découvrez les panthéons qui ont façonnés l'histoire.",
		images: [
			{
				url: "https://palmythology.com/og-image.png",
				alt: "Logo officiel de la Palmythology",
			},
		],
	},
};

const HomePage = () => {
	return (
		<>
			<PageHeader title="Palmythology" subtitle="L'encyclopédie mythologique" />
			<div className={styles.routeList}>
				{ROUTES.map((route) => {
					const { name, subtitle, url, icon } = route;

					if (name === "Palmythology") {
						return <div key={`section-${name}`} />;
					}

					return (
						<PageSquare
							title={name}
							subtitle={subtitle}
							url={url}
							icon={icon.src}
							contentType={CONTENT_TYPE.ROUTE}
							key={`section-${name}`}
						/>
					);
				})}
			</div>
		</>
	);
};

export default HomePage;
