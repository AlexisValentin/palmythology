import { wording } from "../../wording/fr/main";
import { FOLDERS_COLORS } from "../styles/colors";
import NumberTwoIcon from "../../assets/icons/number_two.svg";
import QuestionMarkIcon from "../../assets/icons/question_mark.svg";
import { ROOT } from "./routes";

export interface FoldersType {
  name: string;
  url: string;
  description: string;
  gradient?: {
    startingColor: string;
    endingColor: string;
  };
  iconUrl?: string;
}

export const FOLDERS_URLS = {
  QUOI_2_NEUF: `${ROOT}folders/q2n`,
  QU_EST_CE_QUE_CA_FICHE: `${ROOT}folders/qqcf`,
};

export const FOLDERS: FoldersType[] = [
  {
    name: wording.folders.quoi_2_neuf_title,
    url: FOLDERS_URLS.QUOI_2_NEUF,
    description: wording.folders.quoi_2_neuf_description,
    gradient: {
      startingColor: FOLDERS_COLORS.QUOI_2_NEUF[0],
      endingColor: FOLDERS_COLORS.QUOI_2_NEUF[1],
    },
    iconUrl: NumberTwoIcon,
  },
  {
    name: wording.folders.qu_est_ce_que_ca_fiche_title,
    url: FOLDERS_URLS.QU_EST_CE_QUE_CA_FICHE,
    description: wording.folders.qu_est_ce_que_ca_fiche_description,
    gradient: {
      startingColor: FOLDERS_COLORS.QU_EST_CE_QUE_CA_FICHE[0],
      endingColor: FOLDERS_COLORS.QU_EST_CE_QUE_CA_FICHE[1],
    },
    iconUrl: QuestionMarkIcon,
  },
];
