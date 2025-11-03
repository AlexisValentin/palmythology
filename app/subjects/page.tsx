import type { Metadata } from "next";
import PageHeader from "../../src/components/generics/PageHeader";
import PageSquare, {
	CONTENT_TYPE,
} from "../../src/components/generics/PageSquare";
import { ALL_SUBJECT } from "../../src/utils/cards/subjects.constants";

export const metadata: Metadata = {
	title: "Sujets mythologiques | Classification - Palmythology",
	description:
		"Sélectionnez un sujet parmi 7 : divinité, personnage, peuple, créature, lieu, écrits et événement.",
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://palmythology.com/subjects",
		languages: {
			fr: "https://palmythology.com/subjects",
		},
	},
	openGraph: {
		title: "Sujets mythologiques | Classification - Palmythology",
		description:
			"Sélectionnez un sujet parmi 7 : divinité, personnage, peuple, créature, lieu, écrits et événement.",
		url: "https://palmythology.com/subjects",
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
		title: "Sujets mythologiques | Classification - Palmythology",
		description:
			"Sélectionnez un sujet parmi 7 : divinité, personnage, peuple, créature, lieu, écrits et événement.",
		images: [
			{
				url: "https://palmythology.com/icon/favicon.ico",
				alt: "Logo officiel de la Palmythology",
			},
		],
	},
};

const SubjectsPage = () => {
	const webPageSchema = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Sujets mythologiques | Classification - Palmythology",
		description:
			"Sélectionnez un sujet parmi 7 : divinité, personnage, peuple, créature, lieu, écrits et événement.",
		url: "https://palmythology.com/subjects",
		inLanguage: "fr-FR",
		mainEntity: {
			"@id": "https://palmythology.com/subjects#itemlist",
		},
	};

	const itemListSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"@id": "https://palmythology.com/subjects#itemlist",
		name: "Classification des sujets mythologiques",
		description: "Découvrez les 7 types de sujets couverts par Palmythology",
		numberOfItems: 7,
		itemListElement: ALL_SUBJECT.map((subject, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: subject.label,
			url: `https://palmythology.com/subjects/${subject.value}`,
			image: subject.icon,
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
				title="Sujets"
				subtitle="Découvrez les fiches les plus populaires classées par thème"
			/>
			<div className="flex flex-col items-center justify-center flex-wrap md:flex-row mt-4">
				{ALL_SUBJECT.map((subject) => (
					<PageSquare
						title={subject.label}
						subject={subject.value}
						key={`${subject.value}-${subject.label}`}
						icon={{
							alt: `Icône du sujet ${subject.label}`,
							filename: subject.icon,
						}}
						contentType={CONTENT_TYPE.SUBJECT}
					/>
				))}
			</div>
		</>
	);
};

export default SubjectsPage;
