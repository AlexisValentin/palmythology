/* Libs */
import React from 'react'

/* Components */
import PageHeader from '../../../src/components/generics/PageHeader'
import PantheonCardList from '../../../src/components/domains/cards/PantheonCardList'

/* Hooks */
import { usePantheonPageSquareLoader } from '../../../src/components/hooks/usePageSquareLoader'

/* Methods */
import { getPantheonStory } from '../../../src/utils/cms/cms.requests'
import { getPantheonLabelFromValue } from '../../../src/utils/cards/pantheons'

/* Types */
import { PantheonValue } from '../../../src/utils/cards/pantheons.constants'

/* Wording */
import { SEO_WORDING } from '../../../src/wording/fr/seo'

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
      description: SEO_WORDING.PANTHEON.description,
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
