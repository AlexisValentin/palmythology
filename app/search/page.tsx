import React from 'react'
import PageHeader from '../../src/components/generics/PageHeader'
import Filter from '../../src/components/domains/search/Filter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Les Grandes Lignes - Recherche de contenu | Palmythology',
  description: `La Palmythology propose un moteur de recherche pour trouver la fiche qu'il vous faut, parmi 11 différents panthéons et 7 différents sujets.`,
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: 'https://palmythology.com/search' },
  openGraph: {
    title: 'Les Grandes Lignes - Recherche de contenu | Palmythology',
    description: `La Palmythology propose un moteur de recherche pour trouver la fiche qu'il vous faut, parmi 11 différents panthéons et 7 différents sujets.`,
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
        subtitle="Recherchez votre fiche préférée de la Palmythology"
      />
      <Filter />
    </>
  )
}

export default SearchPage
