import { redirect } from "next/navigation";
import type { FC } from "react";
import Carousel from "../../../src/components/generics/Carousel";
import PageHeader from "../../../src/components/generics/PageHeader";
import PageSquare, {
	CONTENT_TYPE,
	PAGE_SQUARE_SIZE_TYPE,
} from "../../../src/components/generics/PageSquare";
import SocialNetworks from "../../../src/components/generics/SocialNetworks";
import { getPantheonLabelFromValue } from "../../../src/utils/cards/pantheons";
import type { PantheonValue } from "../../../src/utils/cards/pantheons.constants";
import { getSubjectLabelFromValue } from "../../../src/utils/cards/subjects";
import type { SubjectValue } from "../../../src/utils/cards/subjects.constants";
import { fetchSpecificCard } from "../../../src/utils/cms/cms.requests";
import { getPantheonData } from "../../../src/utils/pantheons";
import {
	calculateWordCount,
	capitalize,
	replaceDashesBySpaces,
} from "../../../src/utils/string";
import { getSubjectData } from "../../../src/utils/subjects";
import {
	CardPageFaqSection,
	CardPageQuotationsSection,
	CardPageRelatedCardsSection,
	CardPageSummarySection,
} from "./CardPageSections";

export const dynamicParams = true;
export const generateStaticParams = async () => [];
// Revalidate constant should be statically analyzed, so no calculation or export can be used
export const revalidate = 86400;

interface CardPagePropsType {
	params: Promise<{ card: string[] }>;
}

export const generateMetadata = async ({ params }: CardPagePropsType) => {
	const pageParams = await params;
	const pantheon = pageParams.card[0];
	const title = pageParams.card[1];

	const story = await fetchSpecificCard(title, pantheon);
	const { content, published_at, updated_at } = story.story;

	const pantheonLabel = getPantheonLabelFromValue(pantheon as PantheonValue);
	const cardName = capitalize(replaceDashesBySpaces(title));
	const optimizedTitle = `${cardName} | ${pantheonLabel} | ${content?.subtitle} - Palmythology`;
	const imageAlt = `Logo de ${cardName} sur la Palmythology`;
	const description =
		content?.metaDescription ||
		`Découvrez ${cardName}, figure majeure de la mythologie ${pantheonLabel}. Fiches détaillées, illustrations et ressources sur Palmythology.`;

	return {
		title: optimizedTitle,
		description,
		icons: {
			icon: content?.icon?.filename,
			shortcut: content?.icon?.filename,
			apple: content?.icon?.filename,
		},
		robots: {
			index: true,
			follow: true,
		},
		alternates: {
			canonical: `https://palmythology.com/cards/${pantheon}/${title}`,
			languages: {
				fr: `https://palmythology.com/cards/${pantheon}/${title}`,
			},
		},
		openGraph: {
			title: optimizedTitle,
			description: content?.metaDescription,
			url: `https://palmythology.com/cards/${pantheon}/${title}`,
			siteName: "Palmythology",
			images: [
				{
					url: content?.icon?.filename,
					width: 600,
					height: 600,
					alt: imageAlt,
					type: "image/png",
				},
			],
			locale: "fr_FR",
			type: "article",
			publishedTime: published_at,
			modifiedTime: updated_at,
			section: pantheonLabel,
			tags: [
				cardName,
				pantheonLabel,
				getSubjectLabelFromValue(content?.subject as SubjectValue),
			].filter(Boolean),
		},
		twitter: {
			card: "summary_large_image",
			title: optimizedTitle,
			description: content?.metaDescription,
			images: [
				{
					url: content?.icon?.filename,
					alt: imageAlt,
				},
			],
		},
	};
};

const CardPage: FC<CardPagePropsType> = async ({ params }) => {
	const pageParams = await params;
	const pantheon = pageParams.card[0];
	const title = pageParams.card[1];

	if (!title && pantheon) redirect(`/pantheons/${pantheon}`);

	const story = await fetchSpecificCard(title, pantheon);

	if (!story) return null;

	const { content, published_at, updated_at } = story.story;

	if (!content) return null;

	const {
		name,
		subtitle,
		mdSummary,
		images,
		available,
		instagramUrl,
		relatedCards,
		subject,
		quotations,
		faq,
	} = content;

	if (!available || !pantheon) return null;

	const socialLinks = {
		instagram: instagramUrl?.url,
	};

	const pantheonData = getPantheonData(pantheon as PantheonValue);
	const subjectData = getSubjectData(subject);

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: name,
		description: subtitle,
		image: images?.map((img: any) => img.filename) || [],
		datePublished: published_at,
		dateModified: updated_at,
		wordCount: calculateWordCount(mdSummary),
		keywords: [
			name,
			getPantheonLabelFromValue(pantheon as PantheonValue),
			getSubjectLabelFromValue(subject as SubjectValue),
		].filter(Boolean),
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://palmythology.com/cards/${pantheon}/${title}`,
		},
		author: {
			"@type": "Organization",
			name: "Palmythology",
		},
		publisher: {
			"@type": "Organization",
			name: "Palmythology",
			logo: {
				"@type": "ImageObject",
				url: "https://palmythology.com/icon/favicon.ico",
			},
		},
		inLanguage: "fr-FR",
		about: {
			"@type": "Thing",
			name: getPantheonLabelFromValue(pantheon as PantheonValue),
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>
			<div className="flex justify-center items-center flex-col">
				<div className="flex justify-center items-center gap-x-6 sm:gap-x-10 md:gap-x-16 lg:gap-x-20 xl:gap-x-24">
					{pantheonData && (
						<PageSquare
							title={
								getPantheonLabelFromValue(pantheon as PantheonValue) ??
								"Pantheon inconnu"
							}
							pantheon={pantheon as PantheonValue}
							icon={pantheonData.icon}
							contentType={CONTENT_TYPE.PANTHEON}
							size={PAGE_SQUARE_SIZE_TYPE.SM}
							withoutText={true}
						/>
					)}
					<PageHeader title={name} subtitle={subtitle} upperGap={false} />
					{subjectData && (
						<PageSquare
							title={
								getSubjectLabelFromValue(subject as SubjectValue) ??
								"Sujet inconnu"
							}
							subject={subject as SubjectValue}
							icon={subjectData.icon}
							contentType={CONTENT_TYPE.SUBJECT}
							size={PAGE_SQUARE_SIZE_TYPE.SM}
							withoutText={true}
						/>
					)}
				</div>
				<div className="hidden md:block w-full lg:w-3/4">
					<CardPageSummarySection summary={mdSummary} />
				</div>
				<div className="flex items-center justify-center w-full lg:w-3/4 mt-4">
					<Carousel imageList={images} />
				</div>
				<div className="block md:hidden border-t-2 mt-8 w-full lg:w-3/4">
					<CardPageSummarySection summary={mdSummary} />
				</div>
				<CardPageFaqSection faq={faq} />
				<CardPageQuotationsSection quotations={quotations} />
				<CardPageRelatedCardsSection relatedCards={relatedCards} />
				{socialLinks && (
					<div className="mt-16">
						<SocialNetworks customLinks={socialLinks} />
					</div>
				)}
			</div>
		</>
	);
};

export default CardPage;
