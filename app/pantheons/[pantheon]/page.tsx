import PageHeader from '../../../src/components/generics/PageHeader'
import { getPantheonLabelFromValue } from '../../../src/helpers/dictionary'
import { PantheonValue } from '../../../src/types/cards/pantheons'
import { getPantheonStory } from '../../../src/helpers/storyblok'
import { isObjectEmpty } from '../../../src/helpers/object'

import React from 'react'
import PantheonCardList from '../../../src/components/domains/cards/PantheonCardList'
import { SEO_WORDING } from '../../../src/wording/fr/seo'

interface PantheonPagePropsType {
  params: { pantheon: string }
}

export const generateMetadata = async ({ params }: PantheonPagePropsType) => {
  const pantheon = params.pantheon
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
  const pantheon = params.pantheon
  const story = await getPantheonStory(pantheon)

  if (!story?.data?.story?.content) return <></>

  const { relatedCards, summary } = story.data.story.content

  const pantheonLabel = getPantheonLabelFromValue(
    params.pantheon! as PantheonValue,
  )

  return (
    <>
      <PageHeader title={`Panthéon ${pantheonLabel?.toLowerCase()}`} />
      <PantheonCardList summary={summary} relatedCards={relatedCards} />
    </>
  )
}

export default PantheonPage
