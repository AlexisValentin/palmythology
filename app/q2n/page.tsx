import { Metadata } from 'next'
import Q2NCardList from '../../src/components/domains/cards/Quoi2NeufCardList'
import { fetchQuoi2NeufStories } from '../../src/utils/cms/cms.requests'

export const metadata: Metadata = {
  title: 'Quoi 2 Neuf, planning de sortie des fiches | Palmythology',
  description: `Découvrez le planning mensuel de la Palmythology et anticipez les futures fiches. Chaque mois, plongez dans l'univers des mythologies à travers des fiches détaillées et pedagogiques.`,
  openGraph: {
    title: 'Quoi 2 Neuf, planning de sortie des fiches | Palmythology',
    description: `Découvrez le planning mensuel de la Palmythology et anticipez les futures fiches. Chaque mois, plongez dans l'univers des mythologies à travers des fiches détaillées et pedagogiques.`,
    url: 'https://palmythology.com/q2n',
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

const Quoi2NeufPage = async () => {
  const stories = await fetchQuoi2NeufStories()

  return <Q2NCardList stories={stories} />
}

export default Quoi2NeufPage
