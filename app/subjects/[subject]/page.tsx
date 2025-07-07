import React from 'react'
import PageHeader from '../../../src/components/generics/PageHeader'
import SubjectCardList from '../../../src/components/domains/cards/LPCardList'
import {
  fetchCardStories,
  getSubjectStory,
} from '../../../src/utils/cms/cms.requests'
import { getSubjectLabelFromValue } from '../../../src/utils/cards/subjects'
import { SubjectValue } from '../../../src/utils/cards/subjects.constants'

interface SubjectPagePropsType {
  params: Promise<{ subject: string }>
}

export const generateMetadata = async ({ params }: SubjectPagePropsType) => {
  const pageParams = await params
  const subject = pageParams.subject
  const story = await getSubjectStory(subject)

  return {
    title: `Sujet ${getSubjectLabelFromValue(
      subject as SubjectValue,
    )?.toLowerCase()} - Les Grandes Lignes | Palmythology`,
    description: story.data.story.content?.metaDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://palmythology.com/subjects/${subject}`,
    },
    openGraph: {
      title: `Sujet ${getSubjectLabelFromValue(
        subject as SubjectValue,
      )?.toLowerCase()} Les Grandes Lignes | Palmythology`,
      description: story.data.story.content?.metaDescription,
      url: `https://palmythology.com/subjects/${subject}`,
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
}

const SubjectPage = async ({ params }: SubjectPagePropsType) => {
  const pageParams = await params
  const subject = pageParams.subject

  const { results } = await fetchCardStories({ pantheon: '', subject }, 1)

  const subjectLabel = getSubjectLabelFromValue(subject! as SubjectValue)

  return (
    <>
      <PageHeader title={`${subjectLabel}`} />
      <SubjectCardList relatedCards={results} />
    </>
  )
}

export default SubjectPage
