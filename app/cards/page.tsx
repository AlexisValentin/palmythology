import React from 'react'
import PageHeader from '../../src/components/generics/PageHeader'
import { wording } from '../../src/wording/fr/main'
import PageSection from '../../src/components/generics/PageSection'

import ColorsIcon from '../../src/assets/icons/colors.svg'
import KnowledgeIcon from '../../src/assets/icons/knowledge.svg'
import { Metadata } from 'next'
import { SEO_WORDING } from '../../src/wording/fr/seo'

export const metadata: Metadata = {
  title: SEO_WORDING.CARDS.title,
  description: SEO_WORDING.CARDS.description,
}

const CardHubPage = () => {
  return (
    <>
      <PageHeader
        title={wording.sections.cards_title}
        subtitle={wording.sections.cards_description}
      />
      <div className="flex flex-col">
        <PageSection
          name="Des connaissances essentielles"
          description="Les fiches de la Palmythology résument de manière concise et intuitive l'entièreté d'un sujet mythologique ainsi que tout son écosystème. De cette manière, la Palmythologie analyse l'essentiel des panthéons à travers le monde, afin de fournir un accès rapide et clair à l'information sur les mythes et légendes."
          iconUrl={KnowledgeIcon}
        />
        <PageSection
          name="Un univers coloré !"
          description="Chaque panthéon est associé à un code couleur spécifique et à une icône dédiée en haut à gauche de la page de couverture. La Palmythology découpe ses fiches en plusieurs sujets, eux aussi reconnaissables graĉe une icône dédiée en bas à droite de la page de couverture."
          iconUrl={ColorsIcon}
        />
      </div>
    </>
  )
}

export default CardHubPage
