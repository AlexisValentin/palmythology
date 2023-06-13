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
} from './names'
import { PantheonLabel, PantheonValue } from './pantheons'
import { SubjectLabel, SubjectValue } from './subjects'

export interface Card {
  details: CardDetails
}

export interface CardDetails {
  name: string
  pantheon: PantheonValue
  subject: SubjectValue
  available: boolean
  isFolder: boolean
  summary?: string
  image?: string
}

export interface TranslatedCardDetails {
  name: string
  pantheon: PantheonLabel
  subject: SubjectLabel
  available: boolean
  isFolder: boolean
  summary?: string
  image?: string
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
  | RomanNames

export interface ResearchCriterias {
  pantheon: string
  subject: string
}
