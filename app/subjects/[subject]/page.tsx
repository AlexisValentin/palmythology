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
      title: subject,
      description:
        "Retrouvez la fiche qu'il vous faut à travers la page dédiée aux thématiques dédiées présentées par la Palmythology.",
    }
  }

  return {
    title: `Sujet ${getSubjectLabelFromValue(
      subject as SubjectValue,
    )?.toLowerCase()} | Palmythology`,
    description: story.data.story.content?.summary,
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
