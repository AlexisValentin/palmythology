import axios from 'axios'
import { CardDetails } from '../types/cards/card'
import {
  NewsPageType,
  QuestCeQueCaFicheItemType,
  Quoi2NeufItemType,
  STORYBLOK_TOKEN,
  STORYBLOK_URL_STORIES,
  STORYBLOK_VERSIONS,
} from '../types/storyblok/storyblok'
import { parseStringToSlug } from './string'
import {
  StoryblokCardComponentType,
  StoryblokNewsComponentType,
  StoryblokQ2NComponentType,
  StoryblokQQCFComponentType,
} from '../types/storyblok/stories'

export const getCardSlug = (cardName?: string, pantheon?: string) => {
  return !cardName || !pantheon
    ? ''
    : `cards/${parseStringToSlug(pantheon)}/${parseStringToSlug(cardName)}`
}

export const getNewsSlug = (newsTitle?: string) => {
  return !newsTitle ? '' : `news/${parseStringToSlug(newsTitle)}`
}

export const getAboutSlug = () => `about/page`

const fetchStoriesByStartingString = (startingString: string) =>
  axios({
    method: 'get',
    url: `${STORYBLOK_URL_STORIES}?starts_with=${startingString}&token=${STORYBLOK_TOKEN}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

export const fetchCardStories = async () =>
  await fetchStoriesByStartingString('card').then((stories) =>
    stories.data.stories.map(
      (story: StoryblokCardComponentType) =>
        story.content.component === 'card' && parseCardData(story),
    ),
  )

export const fetchQuoi2NeufStories = async () =>
  await fetchStoriesByStartingString('quoi2neuf').then((stories) =>
    stories.data.stories.map(
      (story: StoryblokQ2NComponentType) =>
        story.content.component === 'quoi2Neuf' && parseQuoi2NeufData(story),
    ),
  )

export const fetchQuEstCeQueCaFicheStories = async () =>
  await fetchStoriesByStartingString('questcequecafiche').then((stories) =>
    stories.data.stories.map(
      (story: StoryblokQQCFComponentType) =>
        story.content.component === 'quEstCeQueCaFiche' &&
        parseQuEstCeQueCaFicheData(story),
    ),
  )

export const fetchNewsStories = async () =>
  await fetchStoriesByStartingString('news').then((stories) =>
    stories.data.stories.map(
      (story: StoryblokNewsComponentType) =>
        story.content.component === 'newsPage' && parseNewsData(story),
    ),
  )

const parseCardData = (card: StoryblokCardComponentType): CardDetails => {
  const { name, pantheon, subject, available, isFolder } = card.content

  return {
    name,
    pantheon,
    subject,
    available,
    isFolder,
  }
}

// @ts-ignore
const parseQuoi2NeufData = (quoi2NeufItem): Quoi2NeufItemType => {
  const { title, subtitle, icon, available, pantheon } = quoi2NeufItem.content

  return {
    title,
    subtitle,
    icon,
    available,
    pantheon,
  }
}

const parseQuEstCeQueCaFicheData = (
  quEstCeQueCaFicheItem: StoryblokQQCFComponentType,
): QuestCeQueCaFicheItemType => {
  const { title, summary, icon, pantheon } = quEstCeQueCaFicheItem.content

  return {
    title,
    summary,
    icon,
    pantheon,
  }
}

const parseNewsData = (
  newsArticle: StoryblokNewsComponentType,
): NewsPageType => {
  const { title, summary, icon, newsItem } = newsArticle.content

  return {
    title,
    summary,
    icon,
    newsItem,
  }
}
