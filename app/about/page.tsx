import React from 'react'
import { Metadata } from 'next'
import PageHeader from '../../src/components/generics/PageHeader'
import PageSection from '../../src/components/generics/PageSection'
import FrenchHeartIcon from '../../src/assets/icons/french_heart.svg'
import NoAdsIcon from '../../src/assets/icons/no_ads.svg'
import AnonymousIcon from '../../src/assets/icons/anonymous.svg'
import { NextImageType } from '../../src/utils/image.constants'

export const metadata: Metadata = {
  title: 'Recherche de contenu | Palmythology',
  description:
    "Découvrez les mythologies du monde en plongeant dans l'histoire et la culture divine à travers des fiches simple, intuitives et pédagogiques.",
}

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="A propos"
        subtitle="Retrouvez des informations pratiques sur la Palmythology et son site web"
      />
      <div className="flex flex-col">
        <PageSection
          name="100% français"
          description="Cocorico ! Le site web de la Palmythology est réalisé par un seul et unique développeur français."
          icon={FrenchHeartIcon as unknown as NextImageType}
        />
        <PageSection
          name="Garanti sans publicité"
          description="La Palmythology vous garantit une navigation sans aucune pollution visuelle."
          icon={NoAdsIcon as unknown as NextImageType}
        />
        <PageSection
          name="Données anonymisées"
          description="Le site récolte des statistiques de navigation sans pour autant impacter vos données personnelles."
          icon={AnonymousIcon as unknown as NextImageType}
        />
      </div>
    </>
  )
}

export default AboutPage
