'use client'

import { useStoryblok } from '@storyblok/react'
import React from 'react'
import { getCardSlug } from '../../../src/helpers/storyblok'
import { isObjectEmpty } from '../../../src/helpers/object'
import NotFound404 from '../../../src/components/domains/http/404'
import Forbidden403 from '../../../src/components/domains/http/403'
import Meta from '../../../src/components/generics/Meta'
import { SEO_WORDING } from '../../../src/wording/fr/seo'
import PageHeader from '../../../src/components/generics/PageHeader'
import Summary from '../../../src/components/generics/Summary'
import Carrousel from '../../../src/components/generics/Carrousel'
import PageSquare, {
  CONTENT_TYPE,
} from '../../../src/components/generics/PageSquare'
import SocialNetworks from '../../../src/components/generics/SocialNetworks'
import { CardRelatedType } from '../../../src/types/storyblok/storyblok'

interface CardPagePropsType {
  params: { card: string[] }
}

const CardPage: React.FC<CardPagePropsType> = ({ params }) => {
  const pantheon = params.card[0]
  const title = params.card[1]
  const story = useStoryblok(getCardSlug(title, pantheon), {
    version: 'published',
  })

  if (isObjectEmpty(story)) return <NotFound404 />

  const {
    name,
    subtitle,
    summary,
    images,
    available,
    instagramUrl,
    facebookUrl,
    twitterUrl,
    relatedCards,
  } = story.content

  if (!available) return <Forbidden403 />

  const hasCustomLinks = instagramUrl.url || facebookUrl.url || twitterUrl.url
  const socialLinks = hasCustomLinks && {
    instagram: instagramUrl.url,
    facebook: facebookUrl.url,
    twitter: twitterUrl.url,
  }

  return (
    <>
      <Meta
        title={`${name}, ${subtitle}`}
        description={summary ?? SEO_WORDING.CARD_DETAILS.description}
      />
      <div className="flex items-center justify-center flex-col">
        <PageHeader title={name} subtitle={subtitle} />
        {summary && <Summary content={summary} />}
        <div className="flex items-center justify-center w-full lg:w-3/4">
          <Carrousel imageList={images} />
        </div>
        {relatedCards && relatedCards.length > 0 && (
          <div className="flex flex-col mt-16">
            <div className="flex align-center justify-center">
              <h3 className="font-semibold">Dans le même sujet</h3>
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
    </>
  )
}

export default CardPage
