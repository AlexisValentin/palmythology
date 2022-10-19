/* Types */
import {
  AztecNames,
  CelticNames,
  ChineseNames,
  EgyptianNames,
  GreekNames,
  HinduNames,
  JapaneseNames,
  MayanNames,
  NorseNames,
  RomanNames,
} from "./names";

export interface Card {
  details: CardDetails;
}

export interface CardDetails {
  name: string;
  pantheon: string;
  subject: string;
}

export type CardName =
  | AztecNames
  | CelticNames
  | ChineseNames
  | EgyptianNames
  | GreekNames
  | HinduNames
  | JapaneseNames
  | MayanNames
  | NorseNames
  | RomanNames;

export interface ResearchCriterias {
  pantheon?: string;
  subject?: string;
}

export const UNSET_CARD_DETAILS = {
  pantheon: "",
  subject: "",
};
