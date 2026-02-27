import type React from "react";
import Footer from "../src/components/domains/footer/Footer";
import MainMenu from "../src/components/domains/navigation/MainMenu";
import SocialsIncentivePopin from "../src/components/domains/social/SocialsIncentivePopin";
import Breadcrumbs from "../src/components/generics/Breadcrumbs";
import StoryblokProvider from "../src/components/StoryblokProvider";
import "../src/global.css";
import type { Metadata, Viewport } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { UpPageButton } from "../src/components/generics/UpPageButton";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export const metadata: Metadata = {
	icons: {
		icon: "https://a.storyblok.com/f/187414/2048x2048/c834d0c07d/logo.png",
		shortcut: "https://a.storyblok.com/f/187414/2048x2048/c834d0c07d/logo.png",
		apple: "https://a.storyblok.com/f/187414/2048x2048/c834d0c07d/logo.png",
	},
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": "https://palmythology.com/#organization",
		name: "Palmythology",
		url: "https://palmythology.com",
		logo: {
			"@type": "ImageObject",
			"@id": "https://palmythology.com/#logo",
			url: "https://palmythology.com/icon/favicon.ico",
			contentUrl: "https://palmythology.com/icon/favicon.ico",
			width: "2048",
			height: "2048",
			caption: "Logo Palmythology",
		},
		description:
			"L'encyclopédie mythologique française proposant des fiches intuitives sur 11 panthéons différents",
		knowsAbout: [
			"Mythologie",
			"Mythologie grecque",
			"Mythologie égyptienne",
			"Mythologie nordique",
			"Mythologie celtique",
			"Mythologie japonaise",
			"Mythologie chinoise",
			"Mythologie maya",
			"Mythologie mésopotamienne",
			"Mythologie aztèque",
			"Mythologie hindoue",
			"Mythologie romaine",
		],
		areaServed: {
			"@type": "Country",
			name: "France",
		},
		availableLanguage: "fr",
		sameAs: [
			"https://www.instagram.com/palmythology",
			"https://www.threads.net/@palmythology",
			"https://bsky.app/profile/palmythology.com",
		],
	};

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Palmythology",
		url: "https://palmythology.com",
		description:
			"Explorez les mythologies du monde avec des fiches simples et intuitives",
		inLanguage: "fr-FR",
	};

	return (
		<StoryblokProvider>
			<html lang="fr">
				<head>
					<link rel="preconnect" href="https://a.storyblok.com" />
					<link rel="dns-prefetch" href="https://a.storyblok.com" />
					<link rel="preconnect" href="https://analytics.lepalmypede.eu" />
					{process.env.NODE_ENV === "production" && (
						<script
							src="https://analytics.lepalmypede.eu/api/script.js"
							data-site-id="7822bb4f36a9"
							defer
						></script>
					)}
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(organizationSchema),
						}}
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
					/>
				</head>
				<body>
					<NuqsAdapter>
						<SocialsIncentivePopin />
						<MainMenu />
						<div className="flex flex-col min-h-screen">
							<div className="px-6 mb-20 sm:px-12 md:px-24 lg:px-40 xl:px-56 2xl:px-72">
								{children}
							</div>
						</div>
						<UpPageButton />
						<Breadcrumbs />
						<Footer />
					</NuqsAdapter>
				</body>
			</html>
		</StoryblokProvider>
	);
};

export default MainLayout;
