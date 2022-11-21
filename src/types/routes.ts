import { wording } from "../wording/fr/main";

const ROOT = "/";

interface RouteInfo {
  name: string;
  url: string;
  description: string;
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
  },
];
