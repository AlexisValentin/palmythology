import Image from "next/image";
import { redirect } from "next/navigation";
import SummaryIcon from "../../../src/assets/icons/open_book.svg";
import QnAIcon from "../../../src/assets/icons/question_marks.svg";
import QuotationIcon from "../../../src/assets/icons/quotation_marks.svg";
import Transcription from "../../../src/components/domains/cards/Transcription";
import Carousel from "../../../src/components/generics/Carousel";
import Faq from "../../../src/components/generics/Faq";
import PageHeader from "../../../src/components/generics/PageHeader";
import PageSquare, {
	CONTENT_TYPE,
	PAGE_SQUARE_SIZE_TYPE,
} from "../../../src/components/generics/PageSquare";
import Quotation from "../../../src/components/generics/Quotation";
import SocialNetworks from "../../../src/components/generics/SocialNetworks";
import Summary from "../../../src/components/generics/Summary";
import { getPantheonLabelFromValue } from "../../../src/utils/cards/pantheons";
import type { PantheonValue } from "../../../src/utils/cards/pantheons.constants";
import { getSubjectLabelFromValue } from "../../../src/utils/cards/subjects";
import type { SubjectValue } from "../../../src/utils/cards/subjects.constants";
import type { CardRelatedType } from "../../../src/utils/cms/cms.constants";
import { fetchSpecificCard } from "../../../src/utils/cms/cms.requests";
import { getPantheonData } from "../../../src/utils/pantheons";
import { capitalize, replaceDashesBySpaces } from "../../../src/utils/string";
import { getSubjectData } from "../../../src/utils/subjects";

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
	const { content } = story.story;

	return {
		title: `${capitalize(replaceDashesBySpaces(title))}, ${
			content?.subtitle
		} - Les Grandes Lignes | Palmythology`,
		description: content?.metaDescription,
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
			title: `${capitalize(replaceDashesBySpaces(title))}, ${
				content?.subtitle
			} - Les Grandes Lignes | Palmythology`,
			description: content?.metaDescription,
			url: `https://palmythology.com/cards/${pantheon}/${title}`,
			siteName: "Palmythology",
			images: [
				{
					url: content?.icon?.filename,
					width: 600,
					height: 600,
					alt: `Logo de ${capitalize(
						replaceDashesBySpaces(title),
					)} sur la Palmythology`,
				},
			],
			locale: "fr_FR",
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: `${capitalize(replaceDashesBySpaces(title))}, ${
				content?.subtitle
			} - Les Grandes Lignes | Palmythology`,
			description: content?.metaDescription,
			images: [content?.icon?.filename],
		},
	};
};

const CardPage = async ({ params }: CardPagePropsType) => {
	const pageParams = await params;
	const pantheon = pageParams.card[0];
	const title = pageParams.card[1];

	if (!title && pantheon) redirect(`/pantheons/${pantheon}`);

	const story = await fetchSpecificCard(title, pantheon);

	if (!story) return null;

	const { content } = story.story;

	if (!content) return null;

	const {
		name,
		subtitle,
		mdSummary,
		images,
		available,
		instagramUrl,
		threadsUrl,
		blueskyUrl,
		relatedCards,
		subject,
		transcription,
		quotations,
		faq,
	} = content;

	if (!available || !pantheon) return null;

	const hasCustomLinks =
		instagramUrl?.url || threadsUrl?.url || blueskyUrl?.url;
	const socialLinks = hasCustomLinks && {
		instagram: instagramUrl?.url,
		threads: threadsUrl?.url,
		bluesky: blueskyUrl?.url,
	};

	const pantheonData = getPantheonData(pantheon as PantheonValue);
	const subjectData = getSubjectData(subject);

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: name,
		description: subtitle,
		image: images?.map((img: any) => img.filename) || [],
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
				{mdSummary && <Summary content={mdSummary} />}
				<div className="flex items-center justify-center w-full lg:w-3/4 mt-4">
					<Carousel imageList={images} />
				</div>
				{transcription?.length > 0 && (
					<div className="border-t-2 mt-8 w-full lg:w-3/4">
						<div className="flex flex-row justify-center items-center mt-8">
							<Image
								className="mr-2"
								src={SummaryIcon}
								alt="Icône de résumé"
								width={24}
								height={24}
							/>
							<h4 className="text-xl font-bold">L'essentiel</h4>
						</div>
						<div className="w-full mt-8">
							<Transcription transcriptionContent={transcription} />
						</div>
					</div>
				)}
				{faq?.length > 0 && (
					<div className="flex flex-col items-center w-full border-t-2 mt-6 lg:w-3/4">
						<div className="flex flex-row justify-center items-center mt-6">
							<Image
								className="mr-2"
								src={QnAIcon}
								alt="Icône de foire aux questions"
								width={32}
								height={32}
							/>
							<h4 className="text-xl font-bold">Questions fréquentes</h4>
						</div>
						{faq.map(
							({
								question,
								response,
							}: {
								question: string;
								response: string;
							}) => (
								<div
									key={question}
									className="flex flex-col justify-center items-center mt-8 w-full"
								>
									<Faq question={question} answer={response} />
								</div>
							),
						)}
					</div>
				)}
				{quotations?.length > 0 && (
					<div className="flex flex-col items-center w-full border-t-2 mt-10 lg:w-3/4">
						<div className="flex flex-row justify-center items-center mt-6">
							<Image
								className="mr-2"
								src={QuotationIcon}
								alt="Icône de citation"
								width={24}
								height={24}
							/>
							<h4 className="text-xl font-bold">Citations</h4>
						</div>
						{quotations.map(
							({
								author,
								quotation,
								origin,
							}: {
								author: string;
								quotation: string;
								origin?: string;
							}) => {
								return (
									<div
										key={`${author}-${quotation.split(" ")}`}
										className="flex flex-col mt-6 w-full"
									>
										<Quotation
											quote={quotation}
											author={author}
											origin={origin}
										/>
									</div>
								);
							},
						)}
					</div>
				)}
				{relatedCards && relatedCards.length > 0 && (
					<div className="flex flex-col items-center w-full border-t-2 mt-10 lg:w-3/4">
						<div className="flex align-center justify-center mt-8">
							<h3 className="text-xl font-bold">Dans le même sujet</h3>
						</div>
						<div className="flex flex-wrap justify-center mt-4">
							{relatedCards.map(
								({ name, subtitle, pantheon, icon }: CardRelatedType) => (
									<PageSquare
										key={`${name}-${subtitle}}`}
										title={name}
										subtitle={subtitle}
										pantheon={pantheon}
										icon={icon}
										contentType={CONTENT_TYPE.CARD}
										size={PAGE_SQUARE_SIZE_TYPE.COMPACT}
									/>
								),
							)}
						</div>
					</div>
				)}
				{hasCustomLinks && (
					<div className="mt-16">
						<SocialNetworks customLinks={socialLinks} />
					</div>
				)}
			</div>
		</>
	);
};

export default CardPage;
