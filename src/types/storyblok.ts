export const STORYBLOK_TOKEN = 'Q7BU90ToNkaevy4h0HpEbwtt'
export const STORYBLOK_CV = '1671618809'
const STORYBLOK_URL = 'https://api.storyblok.com/'
export const STORYBLOK_URL_STORIES = `${STORYBLOK_URL}v2/cdn/stories/`

export enum STORYBLOK_VERSIONS {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export interface NewsPageType {
  title: string
  summary: string
  icon: {
    alt: string
    filename: string
  }
  newsItem: TextBlockType[]
}

export interface QuestCeQueCaFicheItemType {
  title: string
  summary: string
  icon: {
    alt: string
    filename: string
  }
  pantheon: string
}

export interface Quoi2NeufItemType {
  title: string
  subtitle: string
  available: boolean
  icon: {
    alt: string
    filename: string
  }
  pantheon: string
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

export type AboutPageType = AboutItemType[]
export interface AboutItemType {
  aboutItem: TextBlockType[]
}
