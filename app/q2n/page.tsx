import React from 'react'
import { Metadata } from 'next'
import { SEO_WORDING } from '../../src/wording/fr/seo'
import Q2NCardList from '../../src/components/domains/cards/Quoi2NeufCardList'
import { fetchQuoi2NeufStories } from '../../src/utils/cms/cms.requests'

export const metadata: Metadata = {
  title: SEO_WORDING.Q2N.title,
  description: SEO_WORDING.Q2N.description,
}

const Quoi2NeufPage = async () => {
  const stories = await fetchQuoi2NeufStories()

  return <Q2NCardList stories={stories} />
}

export default Quoi2NeufPage
