import { wording } from '../../wording/fr/main'
import NewIcon from '../../assets/icons/new.svg'
import MagnifyingGlassIcon from '../../assets/icons/magnifying_glass.svg'
import InformationIcon from '../../assets/icons/information.svg'
import Q2NIcon from '../../assets/icons/number_two.svg'
import LaurelIcon from '../../assets/icons/laurel.svg'
import { GradientType, SECTION_COLORS } from '../styles/colors'
import PalmythologyLogo from '../../assets/images/logo.webp'

export const ROOT = '/'

export interface RouteType {
  name: string
  url: string
  description: string
  gradient?: GradientType
  iconUrl?: string
}

export const ROUTE_URLS = {
  HOME: ROOT,
  RESEARCH: `${ROOT}research`,
  ABOUT: `${ROOT}about`,
  NEWS: `${ROOT}news`,
  Q2N: `${ROOT}q2n`,
  CARD: `${ROOT}cards/:pantheon/:card`,
  ARTICLE: `${ROOT}news/:title`,
  PANTHEONS: `${ROOT}pantheons`,
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
    name: wording.sections.news_title,
    url: ROUTE_URLS.NEWS,
    description: wording.sections.news_description,
    gradient: {
      startingColor: SECTION_COLORS.NEWS[0],
      endingColor: SECTION_COLORS.NEWS[1],
    },
    iconUrl: NewIcon,
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
    name: wording.sections.research_title,
    url: ROUTE_URLS.RESEARCH,
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
