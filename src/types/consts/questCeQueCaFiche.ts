import { FOLDERS_COLORS } from "../styles/colors";
import { ROOT } from "./routes";
import FutharkIcon from "../../assets/icons/quoi_2_neuf/futhark.svg";
import GalaxyIcon from "../../assets/icons/qu_est_ce_que_ca_fiche/galaxy.svg";
import WorldIcon from "../../assets/icons/qu_est_ce_que_ca_fiche/world.svg";
import DuckIcon from "../../assets/icons/qu_est_ce_que_ca_fiche/duck.svg";

export interface QuestCeQueCaFicheItemType {
  name: string;
  description: string;
  url: string;
  gradient?: {
    startingColor: string;
    endingColor: string;
  };
  iconUrl?: string;
}

export const QU_EST_CE_QUE_CA_FICHE_ITEMS: QuestCeQueCaFicheItemType[] = [
  {
    name: "Guide de la Palmythology",
    description: "Mais comment diantre fonctionne cette encyclopédie ?",
    url: `${ROOT}palmythology/guide`,
    gradient: {
      startingColor: FOLDERS_COLORS.PANTHEONS.DEFAULT[0],
      endingColor: FOLDERS_COLORS.PANTHEONS.DEFAULT[1],
    },
    iconUrl: DuckIcon,
  },
  {
    name: "Futhark",
    description: "Les runes scandinaves décortiquées une par une",
    url: `${ROOT}norse/futhark`,
    gradient: {
      startingColor: FOLDERS_COLORS.PANTHEONS.NORSE[0],
      endingColor: FOLDERS_COLORS.PANTHEONS.NORSE[1],
    },
    iconUrl: FutharkIcon,
  },
  {
    name: "Cosmogonie égyptienne",
    description: "Les différents mythes de la création du monde égyptien",
    url: `${ROOT}egyptian/cosmogony`,
    gradient: {
      startingColor: FOLDERS_COLORS.PANTHEONS.EGYPTIAN[0],
      endingColor: FOLDERS_COLORS.PANTHEONS.EGYPTIAN[1],
    },
    iconUrl: GalaxyIcon,
  },
  {
    name: "Mondes nordiques",
    description: "Analyse des 9 royaumes de la mythologie scandinave",
    url: `${ROOT}norse/worlds`,
    gradient: {
      startingColor: FOLDERS_COLORS.PANTHEONS.NORSE[0],
      endingColor: FOLDERS_COLORS.PANTHEONS.NORSE[1],
    },
    iconUrl: WorldIcon,
  },
  {
    name: "Cosmogonie greque",
    description: "Les différents mythes de la création du monde grec",
    url: `${ROOT}grec/cosmogony`,
    gradient: {
      startingColor: FOLDERS_COLORS.PANTHEONS.GREEK[0],
      endingColor: FOLDERS_COLORS.PANTHEONS.GREEK[1],
    },
    iconUrl: GalaxyIcon,
  },
];
