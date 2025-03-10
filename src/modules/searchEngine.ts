import {
  getPantheonLabelFromValue,
  getSubjectLabelFromValue,
} from '../utils/dictionary'
import { fetchCardStories, fetchPlaceholderCards } from '../utils/storyblok'
import { CardDetails, ResearchCriterias } from '../types/cards/card'

export const filterCards = async (
  currentPage: number,
  searchCriterias?: ResearchCriterias,
) => {
  const cardStories = await fetchCardStories(
    searchCriterias ?? { pantheon: '', subject: '' },
    currentPage,
  )

  return {
    total: cardStories.total,
    results: cardStories.results
      .map((card: CardDetails) => {
        if (isACardFound(searchCriterias, card)) {
          const { pantheon, subject } = card

          return {
            ...card,
            pantheon: getPantheonLabelFromValue(pantheon),
            subject: getSubjectLabelFromValue(subject),
          }
        }

        return undefined
      })
      .filter((card: CardDetails) => card !== undefined),
  }
}

export const getPlaceholderCards = async () => {
  const stories = await fetchPlaceholderCards()

  return {
    results: stories.results.map((card: CardDetails) => {
      const { pantheon, subject } = card

      return {
        ...card,
        pantheon: getPantheonLabelFromValue(pantheon),
        subject: getSubjectLabelFromValue(subject),
      }
    }),
  }
}

export const isACardFound = (
  asked?: ResearchCriterias,
  found?: CardDetails,
): boolean => {
  const matchingPantheon = isSelectedOptionMatching(
    asked?.pantheon,
    found?.pantheon,
  )
  const matchingSubject = isSelectedOptionMatching(
    asked?.subject,
    found?.subject,
  )

  if (found?.isFolder) return false

  if (asked?.pantheon && !asked.subject) return matchingPantheon
  if (!asked?.pantheon && asked?.subject) return matchingSubject
  if (asked?.pantheon && asked?.subject)
    return matchingPantheon && matchingSubject

  return false
}

export const isSelectedOptionMatching = (
  asked?: string,
  found?: string,
): boolean => {
  return asked === found
}
