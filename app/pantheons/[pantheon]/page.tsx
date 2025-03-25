import React from 'react'
import PageHeader from '../../../src/components/generics/PageHeader'
import PantheonCardList from '../../../src/components/domains/cards/PantheonCardList'
import { usePantheonPageSquareLoader } from '../../../src/components/hooks/usePageSquareLoader'
import { getPantheonStory } from '../../../src/utils/cms/cms.requests'
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
        "Retrouvez la fiche qu'il vous faut à travers la page dédiée aux panthéons spécifiques présentés par la Palmythology",
    }
  }

  return {
    title: `Panthéon ${getPantheonLabelFromValue(
      pantheon as PantheonValue,
    )} | Palmythology`,
    description: story.data.story.content?.summary,
  }
}

const PantheonPage = async ({ params }: PantheonPagePropsType) => {
  const pageParams = await params
  const pantheon = pageParams.pantheon

  const { relatedCards, summary } = await usePantheonPageSquareLoader(pantheon)

  const pantheonLabel = getPantheonLabelFromValue(pantheon! as PantheonValue)

  return (
    <>
      <PageHeader title={`Panthéon ${pantheonLabel?.toLowerCase()}`} />
      <PantheonCardList summary={summary} relatedCards={relatedCards} />
    </>
  )
}

export default PantheonPage
