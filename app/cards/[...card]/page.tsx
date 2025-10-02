import React from "react";
import { redirect } from "next/navigation";
import Carousel from "../../../src/components/generics/Carousel";
import PageHeader from "../../../src/components/generics/PageHeader";
import PageSquare, {
  CONTENT_TYPE,
  PAGE_SQUARE_SIZE_TYPE,
} from "../../../src/components/generics/PageSquare";
import SocialNetworks from "../../../src/components/generics/SocialNetworks";
import { getPantheonData } from "../../../src/utils/pantheons";
import { getCardStory } from "../../../src/utils/cms/cms.requests";
import { capitalize, replaceDashesBySpaces } from "../../../src/utils/string";
import { getSubjectData } from "../../../src/utils/subjects";
import { PantheonValue } from "../../../src/utils/cards/pantheons.constants";
import { SubjectValue } from "../../../src/utils/cards/subjects.constants";
import Transcription from "../../../src/components/domains/cards/Transcription";
import { CardRelatedType } from "../../../src/utils/cms/cms.constants";
import { getPantheonLabelFromValue } from "../../../src/utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../../../src/utils/cards/subjects";
import Summary from "../../../src/components/generics/Summary";
import Quotation, {
  QuotationProps,
} from "../../../src/components/generics/Quotation";

interface CardPagePropsType {
  params: Promise<{ card: string[] }>;
}

export const generateMetadata = async ({ params }: CardPagePropsType) => {
  const pageParams = await params;
  const pantheon = pageParams.card[0];
  const title = pageParams.card[1];

  const story = await getCardStory(title, pantheon);

  return {
    title: `${capitalize(replaceDashesBySpaces(title))}, ${
      story.data.story.content?.subtitle
    } - Les Grandes Lignes | Palmythology`,
    description: story.data.story.content?.metaDescription,
    icons: {
      icon: story.data.story.content?.icon?.filename,
      shortcut: story.data.story.content?.icon?.filename,
      apple: story.data.story.content?.icon?.filename,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://palmythology.com/cards/${pantheon}/${title}`,
    },
    openGraph: {
      title: `${capitalize(replaceDashesBySpaces(title))}, ${
        story.data.story.content?.subtitle
      } - Les Grandes Lignes | Palmythology`,
      description: story.data.story.content?.metaDescription,
      url: `https://palmythology.com/cards/${pantheon}/${title}`,
      siteName: "Palmythology",
      images: [
        {
          url: story.data.story.content?.icon?.filename,
          width: 600,
          height: 600,
          alt: `Logo de ${capitalize(
            replaceDashesBySpaces(title)
          )} sur la Palmythology`,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
  };
};

const CardPage = async ({ params }: CardPagePropsType) => {
  const pageParams = await params;
  const pantheon = pageParams.card[0];
  const title = pageParams.card[1];

  if (!title && pantheon) redirect(`/pantheons/${pantheon}`);

  const story = await getCardStory(title, pantheon);

  if (!story?.data?.story?.content) return <></>;

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
  } = story.data.story.content;

  if (!available || !pantheon) return <></>;

  const hasCustomLinks =
    instagramUrl?.url || threadsUrl?.url || blueskyUrl?.url;
  const socialLinks = hasCustomLinks && {
    instagram: instagramUrl?.url,
    threads: threadsUrl?.url,
    bluesky: blueskyUrl?.url,
  };

  const pantheonData = getPantheonData(pantheon as PantheonValue);
  const subjectData = getSubjectData(subject);

  return (
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
      {transcription && (
        <div className="mt-16 w-full lg:w-3/4">
          <Transcription transcription={transcription} />
        </div>
      )}
      {quotations && (
        <>
          <h4 className="text-xl font-bold mt-2">Citations</h4>
          {quotations.map(({ quote, author, origin }: QuotationProps) => (
            <div
              key={`${author}-${origin ?? "unknown"}`}
              className="flex flex-col justify-center items-center mt-8 w-full lg:w-3/4"
            >
              <Quotation quote={quote} author={author} origin={origin} />
            </div>
          ))}
        </>
      )}
      {relatedCards && relatedCards.length > 0 && (
        <div className="flex flex-col mt-16">
          <div className="flex align-center justify-center">
            <h3 className="text-xl font-bold">Dans le même sujet</h3>
          </div>
          <div className="flex flex-col lg:flex-row mt-4">
            {relatedCards.map((card: CardRelatedType) => (
              <PageSquare
                key={`${card.name}-${card.subtitle}}`}
                title={card.name}
                subtitle={card.subtitle}
                pantheon={card.pantheon}
                icon={card.icon}
                contentType={CONTENT_TYPE.CARD}
              />
            ))}
          </div>
        </div>
      )}
      {hasCustomLinks && (
        <div className="mt-16">
          <SocialNetworks customLinks={socialLinks} />
        </div>
      )}
    </div>
  );
};

export default CardPage;
