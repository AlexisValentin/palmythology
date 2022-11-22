import { wording } from "../wording/fr/main";

import MagnifyingGlass from "../assets/magnifying_glass.svg";
import { SECTION_COLORS } from "./styles/colors";

const ROOT = "/";

interface RouteInfo {
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
};

export const ROUTES: RouteInfo[] = [
  {
    name: wording.sections.home_title,
    url: ROUTE_URL.HOME,
    description: wording.sections.home_description,
  },
  {
    name: wording.sections.research_title,
    url: ROUTE_URL.RESEARCH,
    description: wording.sections.research_description,
    gradient: {
      startingColor: SECTION_COLORS.RESEARCH[0],
      endingColor: SECTION_COLORS.RESEARCH[1],
    },
    iconUrl: MagnifyingGlass,
  },
];
