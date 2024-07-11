import React from 'react'
import { Metadata } from 'next'
import { stringifyMonthCode } from '../../src/helpers/dates'
import { fetchQuoi2NeufStories } from '../../src/helpers/storyblok'
import PageHeader from '../../src/components/generics/PageHeader'
import { wording } from '../../src/wording/fr/main'
import Q2NItemList from '../../src/components/domains/cards/Quoi2NeufCardList'
import { SEO_WORDING } from '../../src/wording/fr/seo'

export const metadata: Metadata = {
  title: SEO_WORDING.Q2N.title,
  description: SEO_WORDING.Q2N.description,
}

const Quoi2NeufPage = async () => {
  const stories = await fetchQuoi2NeufStories()

  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const parsedDate = `${stringifyMonthCode(month)} ${year}`

  return (
    <>
      <PageHeader
        title={`${wording.sections.q2n_title}`}
        subtitle={`${parsedDate}`}
      />
      <Q2NItemList quoi2NeufStories={stories} />
    </>
  )
}

export default Quoi2NeufPage
