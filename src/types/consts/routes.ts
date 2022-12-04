import { wording } from "../../wording/fr/main";

import NewspaperIcon from "../../assets/icons/newspaper.svg";
import MagnifyingGlassIcon from "../../assets/icons/magnifying_glass.svg";
import InformationIcon from "../../assets/icons/information.svg";

import { SECTION_COLORS } from "../styles/colors";

const ROOT = "/";

export interface RouteType {
  name: string;
  url: string;
  description: string;
  gradient?: {
    startingColor: string;
    endingColor: string;
  };
  iconUrl?: string;
}

export const ROUTE_URL = {
  HOME: ROOT,
  RESEARCH: `${ROOT}research`,
  ABOUT: `${ROOT}about`,
  NEWS: `${ROOT}news`,
};

export const ROUTES: RouteType[] = [
  {
    name: wording.sections.home_title,
    url: ROUTE_URL.HOME,
    description: wording.sections.home_description,
  },
  {
    name: wording.sections.news_title,
    url: ROUTE_URL.NEWS,
    description: wording.sections.news_description,
    gradient: {
      startingColor: SECTION_COLORS.NEWS[0],
      endingColor: SECTION_COLORS.NEWS[1],
    },
    iconUrl: NewspaperIcon,
  },
  {
    name: wording.sections.research_title,
    url: ROUTE_URL.RESEARCH,
    description: wording.sections.research_description,
    gradient: {
      startingColor: SECTION_COLORS.RESEARCH[0],
      endingColor: SECTION_COLORS.RESEARCH[1],
    },
    iconUrl: MagnifyingGlassIcon,
  },
  {
    name: wording.sections.about_title,
    url: ROUTE_URL.ABOUT,
    description: wording.sections.about_description,
    gradient: {
      startingColor: SECTION_COLORS.ABOUT[0],
      endingColor: SECTION_COLORS.ABOUT[1],
    },
    iconUrl: InformationIcon,
  },
];
