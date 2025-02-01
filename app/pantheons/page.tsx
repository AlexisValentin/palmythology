/* Libs */
import React from 'react'
import { Metadata } from 'next'

/* Components */
import PageHeader from '../../src/components/generics/PageHeader'
import PantheonsList from '../../src/components/domains/cards/PantheonList'

/* Wording */
import { wording } from '../../src/wording/fr/main'
import { SEO_WORDING } from '../../src/wording/fr/seo'

export const metadata: Metadata = {
  title: SEO_WORDING.PANTHEONS.title,
  description: SEO_WORDING.PANTHEONS.description,
}

const PantheonsPage = () => {
  return (
    <>
      <PageHeader
        title={wording.sections.pantheon_title}
        subtitle={wording.sections.pantheon_description}
      />
      <PantheonsList />
    </>
  )
}

export default PantheonsPage
