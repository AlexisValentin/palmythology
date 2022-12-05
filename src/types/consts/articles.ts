import { wording } from "../../wording/fr/main";
import { ARTICLE_COLORS } from "../styles/colors";
import NumberTwoIcon from "../../assets/icons/number_two.svg";
import QuestionMarkIcon from "../../assets/icons/question_mark.svg";
import { ROOT } from "./routes";

export interface ArticleType {
  name: string;
  url?: string;
  description: string;
  gradient?: {
    startingColor: string;
    endingColor: string;
  };
  iconUrl?: string;
}

export const ARTICLE_URLS = {
  QUOI_2_NEUF: `${ROOT}quoi_de_neuf`,
  QU_EST_CE_QUE_CA_FICHE: `${ROOT}qu_est_ce_que_ca_fiche`,
};

export const ARTICLES: ArticleType[] = [
  {
    name: wording.articles.quoi_2_neuf_title,
    url: ARTICLE_URLS.QUOI_2_NEUF,
    description: wording.articles.quoi_2_neuf_description,
    gradient: {
      startingColor: ARTICLE_COLORS.QUOI_2_NEUF[0],
      endingColor: ARTICLE_COLORS.QUOI_2_NEUF[1],
    },
    iconUrl: NumberTwoIcon,
  },
  {
    name: wording.articles.qu_est_ce_que_ca_fiche_title,
    url: ARTICLE_URLS.QU_EST_CE_QUE_CA_FICHE,
    description: wording.articles.qu_est_ce_que_ca_fiche_description,
    gradient: {
      startingColor: ARTICLE_COLORS.QU_EST_CE_QUE_CA_FICHE[0],
      endingColor: ARTICLE_COLORS.QU_EST_CE_QUE_CA_FICHE[1],
    },
    iconUrl: QuestionMarkIcon,
  },
];
