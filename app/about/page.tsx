import React from 'react'
import { wording } from '../../src/wording/fr/main'
import PageHeader from '../../src/components/generics/PageHeader'
import Changelog from '../../src/components/generics/Changelog'
import { Metadata } from 'next'
import { SEO_WORDING } from '../../src/wording/fr/seo'

export const metadata: Metadata = {
  title: SEO_WORDING.ABOUT.title,
  description: SEO_WORDING.ABOUT.description,
}

const AboutPage = async () => {
  return (
    <>
      <PageHeader
        title={wording.sections.about_title}
        subtitle={wording.sections.about_description}
      />
      <div className="mt-4">
        <Changelog />
      </div>
    </>
  )
}

export default AboutPage
