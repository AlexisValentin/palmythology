import React from 'react'
import PageHeader from '../../src/components/generics/PageHeader'
import PageSection from '../../src/components/generics/PageSection'
import ColorsIcon from '../../src/assets/icons/colors.svg'
import KnowledgeIcon from '../../src/assets/icons/knowledge.svg'
import { Metadata } from 'next'
import { NextImageType } from '../../src/utils/image.constants'

export const metadata: Metadata = {
  title: 'Fiches mythologiques | Palmythology',
  description:
    'Des résumés simples accompagnés une direction artistique colorées, la Palmythology vous propose de plonger dans des fiches mythologiques intuitive et pédagogiques pour en apprendre toujours plus sur les différents panthéons dans le monde.',
}

const CardHubPage = () => {
  return (
    <>
      <PageHeader
        title="Les grandes lignes"
        subtitle="Comment ça fonctionne ?"
      />
      <div className="flex flex-col">
        <PageSection
          name="Des connaissances essentielles"
          description="Les fiches de la Palmythology résument de manière concise et intuitive l'entièreté d'un sujet mythologique ainsi que tout son écosystème. De cette manière, la Palmythologie analyse l'essentiel des panthéons à travers le monde, afin de fournir un accès rapide et clair à l'information sur les mythes et légendes."
          icon={KnowledgeIcon as unknown as NextImageType}
        />
        <PageSection
          name="Un univers coloré !"
          description="Chaque panthéon est associé à un code couleur spécifique et à une icône dédiée en haut à gauche de la page de couverture. La Palmythology découpe ses fiches en plusieurs sujets, eux aussi reconnaissables grâce une icône dédiée en bas à droite de la page de couverture."
          icon={ColorsIcon as unknown as NextImageType}
        />
      </div>
    </>
  )
}

export default CardHubPage
