import { ROUTE_URLS } from '../types/consts/routes'
import { parseStringToSlug } from './string'

export const setCardRouteParameters = (cardName: string, pantheon: string) =>
  ROUTE_URLS.CARD.replace(':pantheon', pantheon).replace(
    ':card',
    parseStringToSlug(cardName.toLowerCase()),
  )

export const setPantheonRouteParameters = (pantheon: string) =>
  ROUTE_URLS.PANTHEON.replace(':pantheon', pantheon)

export const setSubjectRouteParameters = (subject: string) =>
  ROUTE_URLS.SUBJECT.replace(':subject', subject)
