import React from 'react'
import PageHeader from '../../../src/components/generics/PageHeader'
import NotFound404 from '../../../src/components/domains/http/404'
import {
  getSubjectLabelFromValue,
} from '../../../src/helpers/dictionary'
import { getSubjectStory } from '../../../src/helpers/storyblok'
import { isObjectEmpty } from '../../../src/helpers/object'
import { SEO_WORDING } from '../../../src/wording/fr/seo'
import { SubjectValue } from '../../../src/types/cards/subjects'
import SubjectCardList from '../../../src/components/domains/cards/SubjectCardList'

interface SubjectPagePropsType {
  params: { subject: string }
}

export const generateMetadata = async ({ params }: SubjectPagePropsType) => {
  const subject = params.subject
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
  const subject = params.subject
  const story = await getSubjectStory(subject)

  if (!story?.data?.story?.content) return <></>

  const { relatedCards, summary } = story.data.story.content

  const subjectLabel = getSubjectLabelFromValue(params.subject! as SubjectValue)

  if (isObjectEmpty(story)) return <NotFound404 />

  return (
    <>
      <PageHeader title={`${subjectLabel}`} />
      <SubjectCardList summary={summary} relatedCards={relatedCards} />
    </>
  )
}

export default SubjectPage
