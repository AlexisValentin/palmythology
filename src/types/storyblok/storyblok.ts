import { PantheonValue } from '../cards/pantheons'
import { SubjectValue } from '../cards/subjects'
import { TextBlockType } from './stories'

export const STORYBLOK_TOKEN = 'Q7BU90ToNkaevy4h0HpEbwtt'
export const STORYBLOK_CV = '1671618809'
const STORYBLOK_URL = 'https://api.storyblok.com/'
export const STORYBLOK_URL_STORIES = `${STORYBLOK_URL}v2/cdn/stories/`

export enum STORYBLOK_VERSIONS {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

interface StoryblokImageType {
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
  twitterUrl: StoryblokLinkType
  relatedCards: CardRelatedType[]
}

export interface NewsPageType {
  title: string
  summary: string
  icon: StoryblokImageType[]
  newsItem: TextBlockType[]
}

export interface QuestCeQueCaFicheItemType {
  title: string
  summary: string
  icon: StoryblokImageType
  pantheon: string
}

export interface Quoi2NeufItemType {
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
