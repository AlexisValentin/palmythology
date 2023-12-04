import PageHeader from '../../../src/components/generics/PageHeader'
import NotFound404 from '../../../src/components/domains/http/404'
import { getPantheonLabelFromValue } from '../../../src/helpers/dictionary'
import { PantheonValue } from '../../../src/types/cards/pantheons'
import { fetchPantheonLandingPage } from '../../../src/helpers/storyblok'
import { isObjectEmpty } from '../../../src/helpers/object'

import React from 'react'
import PantheonCardList from '../../../src/components/domains/cards/PantheonCardList'

interface PantheonPagePropsType {
  params: { pantheon: string }
}

const PantheonPage = async ({ params }: PantheonPagePropsType) => {
  const pantheon = params.pantheon
  const story = await fetchPantheonLandingPage(pantheon)

  const pantheonLabel = getPantheonLabelFromValue(
    params.pantheon! as PantheonValue,
  )

  if (isObjectEmpty(story)) return <NotFound404 />

  return (
    <>
      <PageHeader title={`Panthéon ${pantheonLabel?.toLowerCase()}`} />
      <PantheonCardList pantheon={pantheon} pantheonCardList={story} />
    </>
  )
}

export default PantheonPage
