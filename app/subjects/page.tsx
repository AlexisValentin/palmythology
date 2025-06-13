import { Metadata } from 'next'
import PageHeader from '../../src/components/generics/PageHeader'
import PageSquare, {
  CONTENT_TYPE,
} from '../../src/components/generics/PageSquare'
import { ALL_SUBJECT } from '../../src/utils/cards/subjects.constants'

export const metadata: Metadata = {
  title: 'Liste des sujets | Palmythology',
  description:
    'Découvrez les fiches mythologiques les plus populaires, tout panthéons confondus, classées par thèmatiques : personnages, divinités, monstres, peuples, écrits et lieux.',
  openGraph: {
    title: 'Liste des sujets | Palmythology',
    description: `Découvrez les fiches mythologiques les plus populaires, tout panthéons confondus, classées par thèmatiques : personnages, divinités, monstres, peuples, écrits et lieux.`,
    url: 'https://palmythology.com/subjects',
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

const SubjectsPage = () => {
  return (
    <>
      <PageHeader
        title="Sujets"
        subtitle="Découvrez les fiches les plus populaires classées par thème"
      />
      <div className="flex flex-col items-center justify-center flex-wrap md:flex-row mt-4">
        {ALL_SUBJECT.map((subject, idx) => (
          <PageSquare
            title={subject.label}
            subject={subject.value}
            key={idx}
            icon={{
              alt: `Icône du sujet ${subject.label}`,
              filename: subject.icon,
            }}
            contentType={CONTENT_TYPE.SUBJECT}
          />
        ))}
      </div>
    </>
  )
}

export default SubjectsPage
