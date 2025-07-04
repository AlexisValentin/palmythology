import React from 'react'
import PageHeader from '../../../src/components/generics/PageHeader'
import PantheonCardList from '../../../src/components/domains/cards/LPCardList'
import {
  fetchCardStories,
  getPantheonStory,
} from '../../../src/utils/cms/cms.requests'
import { getPantheonLabelFromValue } from '../../../src/utils/cards/pantheons'
import { PantheonValue } from '../../../src/utils/cards/pantheons.constants'

interface PantheonPagePropsType {
  params: Promise<{ pantheon: string }>
}

export const generateMetadata = async ({ params }: PantheonPagePropsType) => {
  const pageParams = await params
  const pantheon = pageParams.pantheon
  const story = await getPantheonStory(pantheon)

  return {
    title: `Panthéon ${getPantheonLabelFromValue(
      pantheon as PantheonValue,
    )} - Les Grandes Lignes | Palmythology`,
    description: story.data.story.content?.metaDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://palmythology.com/cards/${pantheon}`,
    },
    openGraph: {
      title: `Panthéon ${getPantheonLabelFromValue(
        pantheon as PantheonValue,
      )} - Les Grandes Lignes | Palmythology`,
      description: story.data.story.content?.metaDescription,
      siteName: 'Palmythology',
      url: `https://palmythology.com/cards/${pantheon}`,
      images: [
        {
          url: 'https://palmythology.com/icon/favicon.ico',
          width: 600,
          height: 600,
          alt: 'Logo officiel de la Palmythology',
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
  }
}

const PantheonPage = async ({ params }: PantheonPagePropsType) => {
  const pageParams = await params
  const pantheon = pageParams.pantheon

  const { results } = await fetchCardStories({ pantheon, subject: '' }, 1)

  const pantheonLabel = getPantheonLabelFromValue(pantheon as PantheonValue)

  return (
    <>
      <PageHeader title={`Panthéon ${pantheonLabel?.toLowerCase()}`} />
      <PantheonCardList relatedCards={results} />
    </>
  )
}

export default PantheonPage
