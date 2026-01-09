import type { Metadata } from "next";
import GodleGame from "../../src/components/domains/godle/GodleGame";
import PageHeader from "../../src/components/generics/PageHeader";
import {
	getDailyEntity,
	getGameNumber,
	getTodayDateString,
} from "../../src/modules/godle/godleDaily";
import { fetchAllAvailableEntitiesForGodle } from "../../src/utils/cms/cms.requests";

export const metadata: Metadata = {
	title: "Godle | Le jeu quotidien - Palmythology",
	description:
		"Devinez l'entité mythologique du jour ! Un jeu de devinettes quotidien inspiré de Wordle, avec 11 panthéons et 7 sujets.",
	keywords: [
		"godle",
		"jeu mythologie",
		"wordle mythologie",
		"palmythology",
		"quiz mythologie",
	],
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://palmythology.com/godle",
		languages: {
			fr: "https://palmythology.com/godle",
		},
	},
	openGraph: {
		title: "Godle | Le jeu quotidien mythologique",
		description:
			"Devinez l'entité mythologique du jour ! Jeu quotidien inspiré de Wordle.",
		url: "https://palmythology.com/godle",
		siteName: "Palmythology",
		images: [
			{
				url: "https://palmythology.com/icon/favicon.ico",
				width: 600,
				height: 600,
			},
		],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Godle | Le jeu quotidien mythologique",
		description:
			"Devinez l'entité mythologique du jour ! Jeu quotidien inspiré de Wordle.",
	},
};

const GodlePage = async () => {
	try {
		const dailyEntity = await getDailyEntity();
		const allEntities = await fetchAllAvailableEntitiesForGodle();
		const gameNumber = await getGameNumber();
		const todayDate = await getTodayDateString();

		return (
			<>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebApplication",
							name: "Godle",
							description:
								"Jeu de devinettes quotidien sur les mythologies du monde",
							applicationCategory: "Game",
							operatingSystem: "Web Browser",
							offers: {
								"@type": "Offer",
								price: "0",
								priceCurrency: "EUR",
							},
						}),
					}}
				/>
				<PageHeader
					title={`Godle #${gameNumber}`}
					subtitle="Devinez l'entité mythologique du jour"
				/>
				<GodleGame
					dailyEntity={dailyEntity}
					allEntities={allEntities}
					todayDate={todayDate}
					gameNumber={gameNumber}
				/>
			</>
		);
	} catch (error) {
		console.error("Error loading Godle game:", error);
		return (
			<>
				<PageHeader title="Godle" subtitle="Erreur de chargement" />
				<div className="text-center text-red-600">
					<p>Impossible de charger le jeu. Veuillez réessayer plus tard.</p>
				</div>
			</>
		);
	}
};

export default GodlePage;
