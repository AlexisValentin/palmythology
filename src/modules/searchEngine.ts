import {
  getPantheonLabelFromValue,
  getSubjectLabelFromValue,
} from '../helpers/dictionary'
import { fetchCardStories, fetchPlaceholderCards } from '../helpers/storyblok'
import { CardDetails, ResearchCriterias } from '../types/cards/card'

export const filterCards = (
  currentPage: number,
  searchCriterias?: ResearchCriterias,
) =>
  fetchCardStories(
    searchCriterias ?? { pantheon: '', subject: '' },
    currentPage,
  ).then((stories) => {
    return {
      total: stories.total,
      results: stories.results
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
  })

export const getPlaceholderCards = () => {
  return fetchPlaceholderCards().then((stories) => {
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
  })
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
