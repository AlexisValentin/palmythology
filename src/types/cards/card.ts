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
import { PantheonLabel } from "./pantheons";
import { SubjectLabel } from "./subjects";

export interface Card {
  details: CardDetails;
}

export interface CardDetails {
  name: string;
  pantheon: PantheonLabel;
  subject: SubjectLabel;
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
