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

  if (!story?.data?.story?.content) {
    return {
      title: pantheon,
      description:
        "Retrouvez la fiche mythologique qu'il vous faut à travers la page dédiée aux panthéons spécifiques présentés par la Palmythology.",
      openGraph: {
        title: `Panthéon ${pantheon} | Palmythology`,
        description: `Retrouvez la fiche mythologique qu'il vous faut à travers la page dédiée aux panthéons spécifiques présentés par la Palmythology.`,
        siteName: 'Palmythology',
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

  return {
    title: `Panthéon ${getPantheonLabelFromValue(
      pantheon as PantheonValue,
    )} | Palmythology`,
    description: story.data.story.content?.summary,
    openGraph: {
      title: `Panthéon ${getPantheonLabelFromValue(
        pantheon as PantheonValue,
      )} | Palmythology`,
      description: story.data.story.content?.summary,
      siteName: 'Palmythology',
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
