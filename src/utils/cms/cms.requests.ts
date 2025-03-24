'use server'

import axios from 'axios'
import {
  Quoi2NeufStoryType,
  STORYBLOK_MAX_ITEMS_PER_REQUEST,
  STORYBLOK_RESULTS_PER_PAGE,
  STORYBLOK_VERSIONS,
  StoryblokCardComponentType,
  StoryblokQ2NComponentType,
} from './cms.constants'
import { parseStringToSlug, replaceHyphenByDashes } from '../string'
import { getStoryblokBaseUrl, getStoryblokToken } from './cms'
import { CardDetails, ResearchCriterias } from '../cards/card.constants'

export const getCardSlug = async (cardName?: string, pantheon?: string) =>
  !cardName || !pantheon
    ? ''
    : `cards/${parseStringToSlug(pantheon)}/${parseStringToSlug(cardName)}`

export const getCardStory = async (title: string, pantheon: string) =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}cards/${pantheon}/${replaceHyphenByDashes(title)}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

export const getPantheonStory = async (pantheon: string) =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}pantheons/${pantheon}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

export const getSubjectStory = async (subject: string) =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}subjects/${subject}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

const fetchStoriesByStartingString = async (startingString: string) =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}?starts_with=${startingString}&token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}&per_page=${STORYBLOK_MAX_ITEMS_PER_REQUEST}`,
    responseType: 'json',
  })

const fetchMostRecentCardStories = async () =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}?token=${getStoryblokToken()}&version=${
      STORYBLOK_VERSIONS.PUBLISHED
    }&starts_with=card&sort_by=published_at:desc&per_page=${STORYBLOK_RESULTS_PER_PAGE}&page=1`,
    responseType: 'json',
  })

const fetchCardStoriesFromFilters = async (
  startingString: string,
  searchCriterias: ResearchCriterias,
  currentPage: number,
) => {
  const { pantheon, subject } = searchCriterias

  return axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}?starts_with=${startingString}&token=${getStoryblokToken()}&version=${
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
) => {
  const cardStories = await fetchCardStoriesFromFilters(
    'card',
    searchCriterias,
    currentPage,
  )

  return {
    total: cardStories.headers.total,
    results: cardStories.data.stories.map(
      (cardStory: StoryblokCardComponentType) =>
        cardStory.content.component === 'card' && parseCardData(cardStory),
    ),
  }
}

export const fetchPlaceholderCards = async () => {
  const cardStories = await fetchMostRecentCardStories()

  return {
    results: cardStories.data.stories.map(
      (cardStory: StoryblokCardComponentType) =>
        cardStory.content.component === 'card' && parseCardData(cardStory),
    ),
  }
}

export const fetchQuoi2NeufStories = async () => {
  const cardStories = await fetchStoriesByStartingString('quoi2neuf')

  return cardStories.data.stories.map(
    (cardStory: StoryblokQ2NComponentType) =>
      cardStory.content.component === 'quoi2Neuf' &&
      parseQuoi2NeufData(cardStory),
  )
}

const parseCardData = (card: StoryblokCardComponentType): CardDetails => {
  const { name, subtitle, icon, pantheon, subject, available, isFolder } =
    card.content

  return {
    name,
    subtitle,
    icon,
    pantheon,
    subject,
    available,
    isFolder,
  }
}

const parseQuoi2NeufData = (
  quoi2NeufItem: StoryblokQ2NComponentType,
): Quoi2NeufStoryType => {
  const { title, subtitle, icon, available, pantheon, month } =
    quoi2NeufItem.content

  return {
    title,
    subtitle,
    icon,
    available,
    pantheon,
    month,
  }
}
