import React from 'react'
import PageHeader from '../../src/components/generics/PageHeader'
import Filter from '../../src/components/domains/search/Filter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recherche de contenu | Palmythology',
  description: `La Palmythology propose un moteur de recherche spécial pour trouver la fiche qu'il vous faut. Peaufiner votre recherche avec les 11 différents panthéons disponibles (Aztèque, Celtique, Chinois, Égyptien, Grec, Hindou, Japonais, Maya, Mésopotamien, Scandinave, Romain) et les 7 différents sujets (Créature, Divinité; Personnage, Lieu, Peuple, Écrits, Événements).`,
  openGraph: {
    title: 'Recherche de contenu | Palmythology',
    description: `La Palmythology propose un moteur de recherche spécial pour trouver la fiche qu'il vous faut. Peaufiner votre recherche avec les 11 différents panthéons disponibles (Aztèque, Celtique, Chinois, Égyptien, Grec, Hindou, Japonais, Maya, Mésopotamien, Scandinave, Romain) et les 6 différents sujets (Créature, Divinité; Personnage, Lieu, Peuple, Écrits, Événements).`,
    url: 'https://palmythology.com/search',
    siteName: 'Palmythology',
    images: [
      {
        url: 'https://palmythology.com/icon/favicon.ico',
        width: 600,
        height: 600,
        alt: 'Logo officiel de la Palmythology',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

const SearchPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Recherche"
        subtitle="Recherchez votre fiche préférée parmi les panthéons que couvre la Palmythology"
      />
      <Filter />
    </>
  )
}

export default SearchPage
