import { PantheonValue } from '../cards/pantheons'
import { SubjectValue } from '../cards/subjects'
import { StoryblokImageType } from './storyblok'

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
export interface StoryblokQQCFComponentType {
  content: {
    component: string
    title: string
    summary: string
    icon: { alt: string; filename: string }
    pantheon: PantheonValue
  }
}
export interface StoryblokNewsComponentType {
  content: {
    component: string
    title: string
    summary: string
    icon: StoryblokImageType[]
    newsItem: TextBlockType[]
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
