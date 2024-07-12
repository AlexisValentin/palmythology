import FoldersIcon from '../../assets/icons/folders.svg'
import InformationIcon from '../../assets/icons/information.svg'
import LaurelIcon from '../../assets/icons/laurel.svg'
import MagnifyingGlassIcon from '../../assets/icons/magnifying_glass.svg'
import Q2NIcon from '../../assets/icons/number_two.svg'
import PalmythologyLogo from '../../assets/images/logo.webp'
import { wording } from '../../wording/fr/main'
import { GradientType, SECTION_COLORS } from '../../types/styles/colors'

export const ROOT = '/'

export interface RouteType {
  name: string
  url?: string
  description: string
  gradient?: GradientType
  iconUrl: string
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
    name: wording.sections.home_title,
    url: ROUTE_URLS.HOME,
    description: wording.sections.home_description,
    iconUrl: PalmythologyLogo,
  },
  {
    name: wording.sections.q2n_title,
    url: ROUTE_URLS.Q2N,
    description: wording.sections.q2n_description,
    gradient: {
      startingColor: SECTION_COLORS.Q2N[0],
      endingColor: SECTION_COLORS.Q2N[1],
    },
    iconUrl: Q2NIcon,
  },
  {
    name: wording.sections.pantheon_title,
    url: ROUTE_URLS.PANTHEONS,
    description: wording.sections.pantheon_description,
    gradient: {
      startingColor: SECTION_COLORS.PANTHEONS[0],
      endingColor: SECTION_COLORS.PANTHEONS[1],
    },
    iconUrl: LaurelIcon,
  },
  {
    name: wording.sections.subject_title,
    url: ROUTE_URLS.SUBJECTS,
    description: wording.sections.subject_description,
    gradient: {
      startingColor: SECTION_COLORS.SUBJECTS[0],
      endingColor: SECTION_COLORS.SUBJECTS[1],
      intermediateColor: SECTION_COLORS.SUBJECTS[2],
    },
    iconUrl: FoldersIcon,
  },
  {
    name: wording.sections.research_title,
    url: ROUTE_URLS.SEARCH,
    description: wording.sections.research_description,
    gradient: {
      startingColor: SECTION_COLORS.RESEARCH[0],
      endingColor: SECTION_COLORS.RESEARCH[1],
    },
    iconUrl: MagnifyingGlassIcon,
  },
  {
    name: wording.sections.about_title,
    url: ROUTE_URLS.ABOUT,
    description: wording.sections.about_description,
    gradient: {
      startingColor: SECTION_COLORS.ABOUT[0],
      endingColor: SECTION_COLORS.ABOUT[1],
    },
    iconUrl: InformationIcon,
  },
]

export const BREADCRUMB_NODES = {
  ABOUT: { label: 'A propos', value: 'about' },
  CARDS: { label: 'Les grandes lignes', value: 'cards' },
  CHANGELOG: { label: 'Notes de version', value: 'changelog' },
  PANTHEONS: { label: 'Panthéons', value: 'pantheons' },
  Q2N: { label: 'Quoi 2 Neuf', value: 'q2n' },
  SEARCH: { label: 'Recherche', value: 'search' },
  SUBJECTS: { label: 'Sujets', value: 'sujet' },
}
