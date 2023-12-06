import { PantheonValue } from '../cards/pantheons'
import { SubjectValue } from '../cards/subjects'
import { CardRelatedType, StoryblokImageType } from './storyblok'

export interface StoryblokCardComponentType {
  content: {
    component: string
    name: string
    pantheon: PantheonValue
    subject: SubjectValue
    available: boolean
    isFolder: boolean
  }
}

export interface StoryblokQ2NComponentType {
  content: {
    component: string
    title: string
    subtitle: PantheonValue
    icon: { alt: string; filename: string }
    available: boolean
    isFolder: boolean
    pantheon: PantheonValue
  }
}

export interface StoryblokPantheonLandingPageType {
  content: {
    component: string
    summary?: string
    relatedCards: CardRelatedType[]
  }
}

export interface TextBlockType {
  text: string
  illustration: {
    alt: string
    filename: string
  }
  component: string
  _uid: string
}
