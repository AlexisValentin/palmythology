import { PantheonValue } from '../types/cards/pantheons'
import { SubjectValue } from '../types/cards/subjects'
import { ROUTE_URLS } from '../types/consts/routes'
import {
  getPantheonLabelFromValue,
  getSubjectLabelFromValue,
} from './dictionary'
import { capitalize, parseStringToSlug, replaceDashesBySpaces } from './string'

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
export const parseBreadcrumbNodeLabel = (nodeLabel: string) => {
  switch (nodeLabel) {
    case 'cards':
      return 'Les grandes lignes'
    case 'search':
      return 'Recherche'
    case 'q2n':
      return 'Quoi 2 Neuf'
    case 'pantheons':
      return 'Panthéons'
    case 'subjects':
      return 'Sujets'
    case 'about':
      return 'A propos'
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
