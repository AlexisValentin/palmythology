import React from 'react'

import { Metadata } from 'next'
import PageHeader from '../../src/components/generics/PageHeader'
import PageSection from '../../src/components/generics/PageSection'
import { wording } from '../../src/wording/fr/main'
import { SEO_WORDING } from '../../src/wording/fr/seo'

import FrenchHeartIcon from '../../src/assets/icons/french_heart.svg'
import NoAdsIcon from '../../src/assets/icons/no_ads.svg'
import AnonymousIcon from '../../src/assets/icons/anonymous.svg'

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
      <div className="flex flex-col">
        <PageSection
          name="100% français"
          description="Cocorico ! Le site web de la Palmythology est réalisé par un seul et unique développeur français."
          iconUrl={FrenchHeartIcon}
        />
        <PageSection
          name="Navigation anonyme"
          description="Pas de panique ! Les données collectées sont anonymes et permettent de contribuer à l'amélioration du site web."
          iconUrl={AnonymousIcon}
        />
        <PageSection
          name="Garanti sans publicité"
          description="La Palmythology vous garantit une navigation sans aucune pollution visuelle."
          iconUrl={NoAdsIcon}
        />
      </div>
    </>
  )
}

export default AboutPage
