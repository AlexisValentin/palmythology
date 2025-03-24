import React from 'react'
import { Metadata } from 'next'
import Q2NCardList from '../../src/components/domains/cards/Quoi2NeufCardList'
import { fetchQuoi2NeufStories } from '../../src/utils/cms/cms.requests'

export const metadata: Metadata = {
  title: 'Quoi 2 Neuf, planning du mois | Palmythology',
  description: `C'est dans la section "Quoi 2 Neuf" que vous pouvez consulter le planning du mois en cours, ainsi que les fiches prévues qui sont déjà disponible sur le site web de la Palmythology et les réseaux sociaux ! Chaque fiche prévue est inscrite avec son illustration, son nom et son sous-titre tel qu'il paraîtra dans le mois courant.`,
}

const Quoi2NeufPage = async () => {
  const stories = await fetchQuoi2NeufStories()

  return <Q2NCardList stories={stories} />
}

export default Quoi2NeufPage
