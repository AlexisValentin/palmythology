import type { Metadata } from "next";
import PageHeader from "../../src/components/generics/PageHeader";
import PageSquare, {
	CONTENT_TYPE,
} from "../../src/components/generics/PageSquare";
import { ALL_SUBJECT } from "../../src/utils/cards/subjects.constants";

export const metadata: Metadata = {
	title: "Les Grandes Lignes - liste des sujets | Palmythology",
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
		title: "Les Grandes Lignes - liste des sujets | Palmythology",
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
			},
		],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Les Grandes Lignes - liste des sujets | Palmythology",
		description:
			"Sélectionnez un sujet parmi 7 : divinité, personnage, peuple, créature, lieu, écrits et événement.",
		images: ["https://palmythology.com/icon/favicon.ico"],
	},
};

const SubjectsPage = () => {
	return (
		<>
			<PageHeader
				title="Sujets"
				subtitle="Découvrez les fiches les plus populaires classées par thème"
			/>
			<div className="flex flex-col items-center justify-center flex-wrap md:flex-row mt-4">
				{ALL_SUBJECT.map((subject, idx) => (
					<PageSquare
						title={subject.label}
						subject={subject.value}
						key={idx}
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
