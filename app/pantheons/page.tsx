import React from 'react'
import { Metadata } from 'next'
import PageHeader from '../../src/components/generics/PageHeader'
import PantheonsList from '../../src/components/domains/cards/PantheonList'

export const metadata: Metadata = {
  title: 'Liste des panthéons | Palmythology',
  description:
    'Sélectionnez un panthéon mythologique parmi 11 différents : grec, égyptien, scandinave, celtique, japonais, chinois, maya, aztèque, hindou, romain.',
}

const PantheonsPage = () => {
  return (
    <>
      <PageHeader
        title="Panthéons"
        subtitle="Consultez tous les détails de chaque panthéon mythologique"
      />
      <PantheonsList />
    </>
  )
}

export default PantheonsPage
