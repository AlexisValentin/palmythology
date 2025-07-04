import React from 'react'
import { Metadata } from 'next'
import PageHeader from '../../src/components/generics/PageHeader'
import PantheonsList from '../../src/components/domains/cards/PantheonList'

export const metadata: Metadata = {
  title: 'Les Grandes Lignes - liste des panthéons | Palmythology',
  description:
    'Sélectionnez un panthéon parmi 11 : grec, égyptien, scandinave, celtique, japonais, chinois, maya, mésopotamien, aztèque, hindou, romain.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: 'https://palmythology.com/pantheons' },
  openGraph: {
    title: 'Les Grandes Lignes - liste des panthéons | Palmythology',
    description:
      'Sélectionnez un panthéon parmi 11 : grec, égyptien, scandinave, celtique, japonais, chinois, maya, mésopotamien, aztèque, hindou, romain.',
    url: 'https://palmythology.com/pantheons',
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
