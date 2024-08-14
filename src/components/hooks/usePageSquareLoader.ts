/* Components */
import { PantheonValue } from '../../types/cards/pantheons'

/* Methods */
import { getPantheonStory, getSubjectStory } from '../../helpers/storyblok'

/* Types */
import { SubjectValue } from '../../types/cards/subjects'

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
