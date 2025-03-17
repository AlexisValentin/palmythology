/* Libs */
import React from 'react'

/* Components */
import PageHeader from '../../../src/components/generics/PageHeader'
import SubjectCardList from '../../../src/components/domains/cards/SubjectCardList'

/* Hooks */
import { useSubjectPageSquareLoader } from '../../../src/components/hooks/usePageSquareLoader'

/* Methods */
import { getSubjectStory } from '../../../src/utils/cms/cms.requests'
import { getSubjectLabelFromValue } from '../../../src/utils/cards/subjects'

/* Types */
import { SubjectValue } from '../../../src/utils/cards/subjects.constants'

/* Wording */
import { SEO_WORDING } from '../../../src/wording/fr/seo'

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
      description: SEO_WORDING.PANTHEON.description,
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
