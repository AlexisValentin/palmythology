/* Types */
import { CelticNames } from "./names/celtic";
import { EgyptianNames } from "./names/egyptian";
import { GreekNames } from "./names/greek";
import { HinduNames } from "./names/hindu";
import { JapaneseNames } from "./names/japanese";
import { MayanNames } from "./names/mayan";
import { NorseNames } from "./names/norse";
import { RomanNames } from "./names/roman";
import { Pantheons } from "./pantheons";
import { Subjects } from "./subjects";

export interface Card {
  details: CardDetails;
}

export interface CardDetails {
  name: CardName;
  pantheon: Pantheons;
  subject: Subjects;
}

type CardName = CelticNames |
  EgyptianNames |
  GreekNames |
  HinduNames |
  JapaneseNames |
  MayanNames |
  NorseNames |
  RomanNames;

export interface ResearchCriterias {
  name: string;
  pantheon: string;
  subject: string;
}

export const UNSET_CARD_DETAILS = {
  name: "",
  pantheon: "",
  subject: "",
};
