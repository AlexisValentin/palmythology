import React from 'react'
import { getCardStory } from '../../../src/helpers/storyblok'
import PageHeader from '../../../src/components/generics/PageHeader'
import Summary from '../../../src/components/generics/Summary'
import Carrousel from '../../../src/components/generics/Carrousel'
import PageSquare, {
  CONTENT_TYPE,
} from '../../../src/components/generics/PageSquare'
import SocialNetworks from '../../../src/components/generics/SocialNetworks'
import { CardRelatedType } from '../../../src/types/storyblok/storyblok'
import { SEO_WORDING } from '../../../src/wording/fr/seo'
import { capitalize } from '../../../src/helpers/string'

interface CardPagePropsType {
  params: { card: string[] }
}

export const generateMetadata = async ({ params }: CardPagePropsType) => {
  const pantheon = params.card[0]
  const title = params.card[1]
  const story = await getCardStory(title, pantheon)

  if (!story?.data?.story?.content) {
    return {
      title: SEO_WORDING.CARD.title,
      description: SEO_WORDING.CARD.description,
    }
  }

  return {
    title: `${capitalize(title)}, ${
      story.data.story.content?.subtitle
    } | Palmythology`,
    description: story.data.story.content?.summary,
  }
}

const CardPage = async ({ params }: CardPagePropsType) => {
  const pantheon = params.card[0]
  const title = params.card[1]
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
    twitterUrl,
    threadsUrl,
    relatedCards,
  } = story.data.story.content

  if (!available) return <></>

  const hasCustomLinks =
    instagramUrl.url || facebookUrl.url || twitterUrl.url || threadsUrl.url
  const socialLinks = hasCustomLinks && {
    instagram: instagramUrl?.url,
    facebook: facebookUrl?.url,
    twitter: twitterUrl?.url,
    threads: threadsUrl?.url,
  }

  return (
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
  )
}

export default CardPage
