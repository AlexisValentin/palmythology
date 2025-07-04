import { Metadata } from 'next'
import PageHeader from '../src/components/generics/PageHeader'
import { ROUTES } from '../src/utils/routes/routes.constants'
import CardRandomizer from '../src/components/domains/cards/CardRandomizer'
import PageSquare, { CONTENT_TYPE } from '../src/components/generics/PageSquare'

export const metadata: Metadata = {
  title: "Palmythology, l'encyclopédie mythologique",
  description:
    "Explorez les mythologies du monde avec des fiches simples et intuitives avec la Palmythology. Découvrez les panthéons qui ont façonnés l'histoire.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://palmythology.com/',
  },
  openGraph: {
    title: "Palmythology, l'encyclopédie mythologique",
    description:
      "Explorez les mythologies du monde avec des fiches simples et intuitives avec la Palmythology. Découvrez les panthéons qui ont façonnés l'histoire.",
    url: 'https://palmythology.com/',
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

const HomePage = () => {
  return (
    <>
      <PageHeader title="Palmythology" subtitle="L'encyclopédie mythologique" />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:mx-0 md:mt-16">
        {ROUTES.map((route) => {
          const { name, subtitle, url, icon } = route

          if (name === 'Palmythology') {
            return <div key={`section-${name}`} />
          }

          return (
            <PageSquare
              title={name}
              subtitle={subtitle}
              url={url}
              icon={icon.src}
              contentType={CONTENT_TYPE.ROUTE}
              key={`section-${name}`}
            />
          )
        })}
      </div>
      <CardRandomizer />
    </>
  )
}

export default HomePage
