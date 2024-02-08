import { PantheonValue } from '../cards/pantheons'
import { SubjectValue } from '../cards/subjects'
import { TextBlockType } from './stories'

export const STORYBLOK_TOKEN = 'Q7BU90ToNkaevy4h0HpEbwtt'
export const STORYBLOK_CV = '1671618809'
const STORYBLOK_URL = 'https://api.storyblok.com/'
export const STORYBLOK_URL_STORIES = `${STORYBLOK_URL}v2/cdn/stories/`
export const STORYBLOK_RESULTS_PER_PAGE = 9

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

export interface PantheonLandingPageType {
  summary: string
  relatedCards: CardRelatedType[]
}

export interface Quoi2NeufStoryType {
  title: string
  subtitle: string
  pantheon: PantheonValue
  icon: StoryblokImageType
  available?: boolean
}

export interface PantheonLandingPageType {
  summary: string
  relatedCards: CardRelatedType[]
  metaDescription: string
}

export type AboutPageType = AboutItemType[]
export interface AboutItemType {
  aboutItem: TextBlockType[]
}
