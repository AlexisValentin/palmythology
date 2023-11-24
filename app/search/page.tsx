import React from 'react'
import Meta from '../../src/components/generics/Meta'
import PageHeader from '../../src/components/generics/PageHeader'
import Filter from '../../src/components/domains/cards/Filter'
import { SEO_WORDING } from '../../src/wording/fr/seo'
import { wording } from '../../src/wording/fr/main'

const SearchPage: React.FC = () => {
  return (
    <>
      <Meta
        title={SEO_WORDING.SEARCH.title}
        description={SEO_WORDING.SEARCH.description}
      />
      <PageHeader
        title={wording.sections.research_title}
        subtitle={wording.sections.research_description}
      />
      <Filter />
    </>
  )
}

export default SearchPage
