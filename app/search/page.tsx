import React from 'react'
import PageHeader from '../../src/components/generics/PageHeader'
import Filter from '../../src/components/domains/cards/Filter'
import { wording } from '../../src/wording/fr/main'

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
