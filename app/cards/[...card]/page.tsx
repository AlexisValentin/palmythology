import React from 'react'
import { redirect } from 'next/navigation'

import Carrousel from '../../../src/components/generics/Carrousel'
import PageHeader from '../../../src/components/generics/PageHeader'
import PageSquare, {
  CONTENT_TYPE,
  PAGE_SQUARE_SIZE_TYPE,
} from '../../../src/components/generics/PageSquare'
import SocialNetworks from '../../../src/components/generics/SocialNetworks'
import Summary from '../../../src/components/generics/Summary'
import {
  getPantheonLabelFromValue,
  getSubjectLabelFromValue,
} from '../../../src/helpers/dictionary'
import { getPantheonData } from '../../../src/helpers/pantheons'
import { getCardStory } from '../../../src/helpers/storyblok'
import { capitalize, replaceDashesBySpaces } from '../../../src/helpers/string'
import { getSubjectData } from '../../../src/helpers/subjects'
import { PantheonValue } from '../../../src/types/cards/pantheons'
import { SubjectValue } from '../../../src/types/cards/subjects'
import { CardRelatedType } from '../../../src/types/storyblok/storyblok'
import { SEO_WORDING } from '../../../src/wording/fr/seo'

interface CardPagePropsType {
  params: Promise<{ card: string[] }>
}

export const generateMetadata = async ({ params }: CardPagePropsType) => {
  const pageParams = await params
  const pantheon = pageParams.card[0]
  const title = pageParams.card[1]

  if (!title && pantheon) redirect(`/pantheons/${pantheon}`)

  const story = await getCardStory(title, pantheon)

  if (!story?.data?.story?.content) {
    return {
      title: SEO_WORDING.CARD.title,
      description: SEO_WORDING.CARD.description,
    }
  }

  return {
    title: `${capitalize(replaceDashesBySpaces(title))}, ${
      story.data.story.content?.subtitle
    } | Palmythology`,
    description: story.data.story.content?.metaDescription,
    icons: {
      icon: story.data.story.content?.icon?.filename,
      shortcut: story.data.story.content?.icon?.filename,
      apple: story.data.story.content?.icon?.filename,
    },
  }
}

const CardPage = async ({ params }: CardPagePropsType) => {
  const pageParams = await params
  const pantheon = pageParams.card[0]
  const title = pageParams.card[1]

  const story = await getCardStory(title, pantheon)

  if (!story?.data?.story?.content) return <></>

  const {
    name,
    subtitle,
    summary,
    images,
    available,
    instagramUrl,
    facebookUrl,
    threadsUrl,
    relatedCards,
    subject,
  } = story.data.story.content

  if (!available || !pantheon) return <></>

  const hasCustomLinks =
    instagramUrl?.url || facebookUrl?.url || threadsUrl?.url
  const socialLinks = hasCustomLinks && {
    instagram: instagramUrl?.url,
    facebook: facebookUrl?.url,
    threads: threadsUrl?.url,
  }

  const pantheonData = getPantheonData(pantheon as PantheonValue)
  const subjectData = getSubjectData(subject)

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center gap-x-6 sm:gap-x-10 md:gap-x-16 lg:gap-x-20 xl:gap-x-24">
        {pantheonData && (
          <PageSquare
            title={
              getPantheonLabelFromValue(pantheon as PantheonValue) ??
              'Pantheon inconnu'
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
              'Sujet inconnu'
            }
            subject={subject as SubjectValue}
            icon={subjectData.icon}
            contentType={CONTENT_TYPE.SUBJECT}
            size={PAGE_SQUARE_SIZE_TYPE.SM}
            withoutText={true}
          />
        )}
      </div>
      {summary && <Summary content={summary} />}
      <div className="flex items-center justify-center w-full lg:w-3/4 mt-4">
        <Carrousel imageList={images} />
      </div>
      {relatedCards && relatedCards.length > 0 && (
        <div className="flex flex-col mt-16">
          <div className="flex align-center justify-center">
            <h3 className="fontsemibold">Dans le même sujet</h3>
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
      <div className="mt-16">
        {hasCustomLinks && <SocialNetworks customLinks={socialLinks} />}
      </div>
    </div>
  )
}

export default CardPage
