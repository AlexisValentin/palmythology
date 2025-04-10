import FoldersIcon from '../../assets/icons/folders.svg'
import InformationIcon from '../../assets/icons/information.svg'
import LaurelIcon from '../../assets/icons/laurel.svg'
import MagnifyingGlassIcon from '../../assets/icons/magnifying_glass.svg'
import Q2NIcon from '../../assets/icons/number_two.svg'
import PalmythologyLogo from '../../assets/images/logo.webp'
import { NextImageType } from '../image.constants'

export const ROOT = '/'

export interface RouteType {
  name: string
  subtitle?: string
  url?: string
  icon: NextImageType
}

export const ROUTE_URLS = {
  HOME: ROOT,
  SEARCH: `${ROOT}search`,
  ABOUT: `${ROOT}about`,
  Q2N: `${ROOT}q2n`,
  CHANGELOG: `${ROOT}changelog`,
  CARD: `${ROOT}cards/:pantheon/:card`,
  PANTHEONS: `${ROOT}pantheons`,
  PANTHEON: `${ROOT}pantheons/:pantheon`,
  SUBJECTS: `${ROOT}subjects`,
  SUBJECT: `${ROOT}subjects/:subject`,
}

export const ROUTES: RouteType[] = [
  {
    name: 'Palmythology',
    url: ROUTE_URLS.HOME,
    icon: PalmythologyLogo as unknown as NextImageType,
  },
  {
    name: 'Quoi 2 Neuf ?',
    subtitle: 'Le planning',
    url: ROUTE_URLS.Q2N,
    icon: Q2NIcon as unknown as NextImageType,
  },
  {
    name: 'Panthéons',
    subtitle: '11 civilisations',
    url: ROUTE_URLS.PANTHEONS,
    icon: LaurelIcon as unknown as NextImageType,
  },
  {
    name: 'Sujets',
    subtitle: '7 thématiques',
    url: ROUTE_URLS.SUBJECTS,
    icon: FoldersIcon as unknown as NextImageType,
  },
  {
    name: 'Recherche',
    url: ROUTE_URLS.SEARCH,
    subtitle: 'Trouver votre fiche',
    icon: MagnifyingGlassIcon as unknown as NextImageType,
  },
  {
    name: 'A propos',
    url: ROUTE_URLS.ABOUT,
    subtitle: 'La Palmythology et vous',
    icon: InformationIcon as unknown as NextImageType,
  },
]

export const BREADCRUMB_NODES = {
  ABOUT: { label: 'A propos', value: 'about' },
  CARDS: { label: 'Les grandes lignes', value: 'cards' },
  CHANGELOG: { label: 'Notes de version', value: 'changelog' },
  PANTHEONS: { label: 'Panthéons', value: 'pantheons' },
  Q2N: { label: 'Quoi 2 Neuf', value: 'q2n' },
  SEARCH: { label: 'Recherche', value: 'search' },
  SUBJECTS: { label: 'Sujets', value: 'subjects' },
}
