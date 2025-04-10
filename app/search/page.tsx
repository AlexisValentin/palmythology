import React from 'react'
import PageHeader from '../../src/components/generics/PageHeader'
import Filter from '../../src/components/domains/search/Filter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recherche de contenu | Palmythology',
  description: `Vous êtes à la recherche d'informations mythologiques ? La Palmythology vous propose un moteur de recherche spécial pour trouver la fiche qu'il vous faut. Peaufiner votre recherche avec les 10 panthéons disponibles (Aztèque, Celtique, Chinois, Égyptien, Grec, Hindou, Japonais, MAya, Scandinave, Romain) et les 6 différents sujets (Créature, Divinité; Personnage, Lieu, Peuple, Écrits).`,
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
