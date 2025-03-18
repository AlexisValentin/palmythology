import React from 'react'
import PageHeader from '../../../src/components/generics/PageHeader'
import SubjectCardList from '../../../src/components/domains/cards/SubjectCardList'
import { useSubjectPageSquareLoader } from '../../../src/components/hooks/usePageSquareLoader'
import { getSubjectStory } from '../../../src/utils/cms/cms.requests'
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

  const { relatedCards, summary } = await useSubjectPageSquareLoader(subject)

  const subjectLabel = getSubjectLabelFromValue(subject! as SubjectValue)

  return (
    <>
      <PageHeader title={`${subjectLabel}`} />
      <SubjectCardList summary={summary} relatedCards={relatedCards} />
    </>
  )
}

export default SubjectPage
