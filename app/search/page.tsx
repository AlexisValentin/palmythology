import React from 'react'
import PageHeader from '../../src/components/generics/PageHeader'
import Filter from '../../src/components/domains/search/Filter'
import { wording } from '../../src/wording/fr/main'
import { SEO_WORDING } from '../../src/wording/fr/seo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: SEO_WORDING.SEARCH.title,
  description: SEO_WORDING.SEARCH.description,
}

const SearchPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={wording.sections.research_title}
        subtitle={wording.sections.research_description}
      />
      <Filter />
    </>
  )
}

export default SearchPage
