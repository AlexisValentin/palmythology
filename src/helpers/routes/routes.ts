import { PantheonValue } from '../../types/cards/pantheons'
import { SubjectValue } from '../../types/cards/subjects'
import { BREADCRUMB_NODES, ROUTE_URLS } from './routes.constants'
import {
  getPantheonLabelFromValue,
  getSubjectLabelFromValue,
} from '../dictionary'
import { capitalize, parseStringToSlug, replaceDashesBySpaces } from '../string'

export const setCardRouteParameters = (cardName: string, pantheon: string) =>
  ROUTE_URLS.CARD.replace(':pantheon', pantheon).replace(
    ':card',
    parseStringToSlug(cardName.toLowerCase()),
  )

export const setPantheonRouteParameters = (pantheon: string) =>
  ROUTE_URLS.PANTHEON.replace(':pantheon', pantheon)

export const setSubjectRouteParameters = (subject: string) =>
  ROUTE_URLS.SUBJECT.replace(':subject', subject)

export const getHomeBreadcrumbNode = () => 'Accueil'
export const parseBreadcrumbNode = (nodeLabel: string) => {
  switch (nodeLabel) {
    case BREADCRUMB_NODES.ABOUT.value:
      return BREADCRUMB_NODES.ABOUT.label
    case BREADCRUMB_NODES.CARDS.value:
      return BREADCRUMB_NODES.CARDS.label
    case BREADCRUMB_NODES.CHANGELOG.value:
      return BREADCRUMB_NODES.CHANGELOG.label
    case BREADCRUMB_NODES.PANTHEONS.value:
      return BREADCRUMB_NODES.PANTHEONS.label
    case BREADCRUMB_NODES.Q2N.value:
      return BREADCRUMB_NODES.Q2N.label
    case BREADCRUMB_NODES.SEARCH.value:
      return BREADCRUMB_NODES.SEARCH.label
    case BREADCRUMB_NODES.SUBJECTS.value:
      return BREADCRUMB_NODES.SUBJECTS.label
    case PantheonValue.AZTEC:
    case PantheonValue.CELTIC:
    case PantheonValue.CHINESE:
    case PantheonValue.EGYPTIAN:
    case PantheonValue.GREEK:
    case PantheonValue.HINDU:
    case PantheonValue.JAPANESE:
    case PantheonValue.MAYAN:
    case PantheonValue.MESOPOTAMIAN:
    case PantheonValue.NORSE:
    case PantheonValue.ROMAN:
      return getPantheonLabelFromValue(nodeLabel)
    case SubjectValue.DIVINITY:
    case SubjectValue.MONSTER:
    case SubjectValue.PERSON:
    case SubjectValue.PLACE:
    case SubjectValue.TRIBE:
    case SubjectValue.WRITINGS:
      return getSubjectLabelFromValue(nodeLabel)
    default:
      return capitalize(replaceDashesBySpaces(nodeLabel))
  }
}

export const generateBreadcrumbLinks = (breadcrumbNodes: string[]) => {
  let breadcrumLinks: string[] = []

  breadcrumbNodes.reduce((acc, curr) => {
    const link = acc ? `${acc}/${curr}` : `/${curr}`

    breadcrumLinks.push(link)

    return link
  }, '')

  return breadcrumLinks
}

export const getCardPantheonTitleFromUrl = (url: string) => {
  const splitUrl = url.split('/')
  const pantheonAndName = splitUrl.slice(splitUrl.length - 2)

  return { pantheon: pantheonAndName[0], title: pantheonAndName[1] }
}
