import { PantheonValue } from '../cards/pantheons'
import { SubjectValue } from '../cards/subjects'
import { TextBlockType } from './stories'

export const STORYBLOK_RESULTS_PER_PAGE = 12

export enum STORYBLOK_VERSIONS {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export interface StoryblokImageType {
  alt: string
  filename: string
}

interface StoryblokLinkType {
  alt: string
  filename: string
}

export type CardRelatedType = Pick<
  CardItemType,
  'name' | 'subtitle' | 'pantheon'
> & { icon: StoryblokImageType }

export interface CardItemType {
  name: string
  subtitle: string
  pantheon: PantheonValue
  subject: SubjectValue
  summary?: string
  images: StoryblokImageType[]
  available: boolean
  isFolder: boolean
  instagramUrl: StoryblokLinkType
  threadsUrl: StoryblokLinkType
  relatedCards: CardRelatedType[]
}

export interface Quoi2NeufStoryType {
  title: string
  subtitle: string
  pantheon: PantheonValue
  icon: StoryblokImageType
  available?: boolean
}

export type AboutPageType = AboutItemType[]
export interface AboutItemType {
  aboutItem: TextBlockType[]
}
