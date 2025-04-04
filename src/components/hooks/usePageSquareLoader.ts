import { PantheonValue } from '../../utils/cards/pantheons.constants'
import { getPantheonStory, getSubjectStory } from '../../utils/cms/cms.requests'
import { SubjectValue } from '../../utils/cards/subjects.constants'

export const usePantheonPageSquareLoader = async (
  pantheon: PantheonValue | string,
) => {
  const story = await getPantheonStory(pantheon)

  if (!story?.data?.story?.content) return { summary: null, relatedCards: [] }

  const { relatedCards, summary } = story.data.story.content

  return { summary, relatedCards }
}

export const useSubjectPageSquareLoader = async (
  subject: SubjectValue | string,
) => {
  const story = await getSubjectStory(subject)

  if (!story?.data?.story?.content) return { summary: null, relatedCards: null }

  const { relatedCards, summary } = story.data.story.content

  return { summary, relatedCards }
}
