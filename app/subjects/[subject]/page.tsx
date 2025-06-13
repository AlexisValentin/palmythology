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

  if (!story?.data?.story?.content) {
    return {
      title: `Sujets ${subject} | Palmythology`,
      description:
        "Retrouvez la fiche mythologique qu'il vous faut, quelque soit le panthéon, à travers la page dédiée aux thématiques et sujets présentées par la Palmythology.",
      openGraph: {
        title: `Sujets ${subject} | Palmythology`,
        description: `Retrouvez la fiche mythologique qu'il vous faut, quelque soit le panthéon, à travers la page dédiée aux thématiques et sujets présentées par la Palmythology.`,
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

  return {
    title: `Sujet ${getSubjectLabelFromValue(
      subject as SubjectValue,
    )?.toLowerCase()} | Palmythology`,
    description: story.data.story.content?.summary,
    openGraph: {
      title: `Sujet ${getSubjectLabelFromValue(
        subject as SubjectValue,
      )?.toLowerCase()} | Palmythology`,
      description: story.data.story.content?.summary,
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
