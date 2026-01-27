import type { Metadata } from "next";
import GodleGame from "../../src/components/domains/godle/GodleGame";
import PageHeader from "../../src/components/generics/PageHeader";
import { fetchAllAvailableEntitiesForGodle } from "../../src/utils/cms/cms.requests";
import {
	getGameNumber,
	getTodayDateString,
	getYesterdayEntity,
} from "../../src/utils/godle";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Godle | Le jeu quotidien - Palmythology",
	description:
		"Devinez l'entité mythologique du jour ! Un jeu de devinettes quotidien gratuit inspiré de Wordle. Testez vos connaissances sur 11 panthéons mondiaux : mythologies grecque, romaine, égyptienne, nordique, celtique, japonaise, chinoise, hindoue, aztèque, maya et mésopotamienne. Nouveau défi chaque jour à minuit !",
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
			"Devinez l'entité mythologique du jour ! Jeu quotidien gratuit inspiré de Wordle. 11 panthéons, des centaines d'entités. Nouveau défi chaque jour !",
		url: "https://palmythology.com/godle",
		siteName: "Palmythology",
		images: [
			{
				url: "https://palmythology.com/icon/favicon.ico",
				width: 600,
				height: 600,
				alt: "Logo Palmythology - Godle",
			},
		],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Godle | Le jeu quotidien mythologique",
		description:
			"Devinez l'entité mythologique du jour ! Jeu quotidien gratuit avec 11 panthéons du monde entier.",
		images: ["https://palmythology.com/icon/favicon.ico"],
	},
};

const GodlePage = async () => {
	try {
		const allEntities = await fetchAllAvailableEntitiesForGodle();
		const gameNumber = await getGameNumber();
		const todayDate = await getTodayDateString();
		const yesterdayEntity = await getYesterdayEntity();

		const videoGameSchema = {
			"@context": "https://schema.org",
			"@type": "VideoGame",
			name: "Godle",
			alternateName: `Godle #${gameNumber}`,
			description:
				"Jeu de devinettes quotidien sur les mythologies du monde. Devinez l'entité mythologique du jour parmi des centaines de divinités, créatures et héros issus de 11 panthéons différents.",
			url: "https://palmythology.com/godle",
			gamePlatform: "Web Browser",
			genre: ["Quiz", "Puzzle", "Educational"],
			numberOfPlayers: "1",
			playMode: "SinglePlayer",
			keywords:
				"mythologie, quiz, wordle, jeu quotidien, culture générale, éducation",
			inLanguage: "fr-FR",
			isAccessibleForFree: true,
			publisher: {
				"@type": "Organization",
				name: "Palmythology",
				url: "https://palmythology.com",
			},
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "EUR",
				availability: "https://schema.org/InStock",
			},
			audience: {
				"@type": "PeopleAudience",
				suggestedMinAge: 12,
			},
		};

		const breadcrumbSchema = {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Accueil",
					item: "https://palmythology.com",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Godle",
					item: "https://palmythology.com/godle",
				},
			],
		};

		return (
			<>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(videoGameSchema),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(breadcrumbSchema),
					}}
				/>
				<PageHeader
					title={`Godle #${gameNumber}`}
					subtitle="Devinez l'entité mythologique du jour"
				/>
				<GodleGame
					allEntities={allEntities}
					todayDate={todayDate}
					gameNumber={gameNumber}
					yesterdayEntity={yesterdayEntity}
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
