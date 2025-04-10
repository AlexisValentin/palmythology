import { StoryblokImageType } from '../cms/cms.constants'
import { PantheonLabel, PantheonValue } from './pantheons.constants'
import { SubjectLabel, SubjectValue } from './subjects.constants'

export interface Card {
  details: CardDetails
}

export interface CardDetails {
  name: string
  subtitle: string
  icon: StoryblokImageType
  pantheon: PantheonValue
  subject: SubjectValue
  available: boolean
  isFolder: boolean
  summary?: string
  image?: string
}

export interface TranslatedCardDetails {
  name: string
  subtitle: string
  icon: StoryblokImageType
  pantheon: PantheonLabel
  subject: SubjectLabel
  available: boolean
  isFolder: boolean
  summary?: string
  image?: string
}

export interface ResearchCriterias {
  pantheon: string
  subject: string
}
