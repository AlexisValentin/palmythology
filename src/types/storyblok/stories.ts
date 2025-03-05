import { MONTH_VALUE_TYPE } from '../../helpers/dates'
import { PantheonValue } from '../cards/pantheons'
import { SubjectValue } from '../cards/subjects'
import { StoryblokImageType } from './storyblok'

export interface StoryblokCardComponentType {
  content: {
    component: string
    name: string
    subtitle: string
    icon: StoryblokImageType
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
    month: MONTH_VALUE_TYPE
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
