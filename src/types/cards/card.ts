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
  available: boolean;
  summary?: string;
  image?: string;
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
