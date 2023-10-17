import axios from 'axios'
import { CardDetails, ResearchCriterias } from '../types/cards/card'
import {
  NewsPageType,
  Quoi2NeufItemType,
  STORYBLOK_RESULTS_PER_PAGE,
  STORYBLOK_TOKEN,
  STORYBLOK_URL_STORIES,
  STORYBLOK_VERSIONS,
} from '../types/storyblok/storyblok'
import { parseStringToSlug } from './string'
import {
  StoryblokCardComponentType,
  StoryblokNewsComponentType,
  StoryblokQ2NComponentType,
} from '../types/storyblok/stories'
import { PantheonValue } from '../types/cards/pantheons'

export const getCardSlug = (cardName?: string, pantheon?: string) =>
  !cardName || !pantheon
    ? ''
    : `cards/${parseStringToSlug(pantheon)}/${parseStringToSlug(cardName)}`

export const getPantheonLandingPageSlut = (pantheon?: PantheonValue) =>
  !pantheon ? '' : `pantheons/${pantheon}`

export const getNewsSlug = (newsTitle?: string) => {
  return !newsTitle ? '' : `news/${parseStringToSlug(newsTitle)}`
}

export const getAboutSlug = () => `about/page`

const fetchStoriesByStartingString = (startingString: string) =>
  axios({
    method: 'get',
    url: `${STORYBLOK_URL_STORIES}?starts_with=${startingString}&token=${STORYBLOK_TOKEN}&version=${STORYBLOK_VERSIONS.PUBLISHED}&per_page=${STORYBLOK_RESULTS_PER_PAGE}`,
    responseType: 'json',
  })

const fetchCardStoriesFromFilters = (
  startingString: string,
  searchCriterias: ResearchCriterias,
  currentPage: number,
) => {
  const { pantheon, subject } = searchCriterias

  return axios({
    method: 'get',
    url: `${STORYBLOK_URL_STORIES}?starts_with=${startingString}&token=${STORYBLOK_TOKEN}&version=${
      STORYBLOK_VERSIONS.PUBLISHED
    }&per_page=${STORYBLOK_RESULTS_PER_PAGE}&page=${currentPage}&${
      pantheon && `filter_query[pantheon][in]=${pantheon}`
    }&${subject && `filter_query[subject][in]=${subject}`}`,
    responseType: 'json',
  })
}

export const fetchCardStories = async (
  searchCriterias: ResearchCriterias,
  currentPage: number,
) =>
  await fetchCardStoriesFromFilters('card', searchCriterias, currentPage).then(
    (stories) => {
      return {
        total: stories.headers.total,
        results: stories.data.stories.map(
          (story: StoryblokCardComponentType) =>
            story.content.component === 'card' && parseCardData(story),
        ),
      }
    },
  )

export const fetchQuoi2NeufStories = async () =>
  await fetchStoriesByStartingString('quoi2neuf').then((stories) =>
    stories.data.stories.map(
      (story: StoryblokQ2NComponentType) =>
        story.content.component === 'quoi2Neuf' && parseQuoi2NeufData(story),
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
