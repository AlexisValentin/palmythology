import { wording } from "../../wording/fr/main";
import NewIcon from "../../assets/icons/new.svg";
import MagnifyingGlassIcon from "../../assets/icons/magnifying_glass.svg";
import InformationIcon from "../../assets/icons/information.svg";
import FolderIcon from "../../assets/icons/folder.svg";
import { SECTION_COLORS } from "../styles/colors";
import PalmythologyLogo from "../../assets/images/logo.webp";

export const ROOT = "/";

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

export const ROUTE_URLS = {
  HOME: ROOT,
  RESEARCH: `${ROOT}research`,
  ABOUT: `${ROOT}about`,
  NEWS: `${ROOT}news`,
  FOLDERS: `${ROOT}folders`,
  CARD: `${ROOT}cards/:pantheon/:card`,
  ARTICLE: `${ROOT}news/:title`,
};

export const ROUTES: RouteType[] = [
  {
    name: wording.sections.home_title,
    url: ROUTE_URLS.HOME,
    description: wording.sections.home_description,
    iconUrl: PalmythologyLogo,
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
    name: wording.sections.folders_title,
    url: ROUTE_URLS.FOLDERS,
    description: wording.sections.folders_description,
    gradient: {
      startingColor: SECTION_COLORS.FOLDERS[0],
      endingColor: SECTION_COLORS.FOLDERS[1],
    },
    iconUrl: FolderIcon,
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
];
