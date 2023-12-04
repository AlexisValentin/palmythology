import axios from 'axios'
import { CardDetails, ResearchCriterias } from '../types/cards/card'
import {
  PantheonLandingPageType,
  Quoi2NeufStoryType,
  STORYBLOK_RESULTS_PER_PAGE,
  STORYBLOK_TOKEN,
  STORYBLOK_URL_STORIES,
  STORYBLOK_VERSIONS,
} from '../types/storyblok/storyblok'
import { parseStringToSlug } from './string'
import {
  StoryblokCardComponentType,
  StoryblokQ2NComponentType,
} from '../types/storyblok/stories'
import { PantheonValue } from '../types/cards/pantheons'

export const getCardSlug = (cardName?: string, pantheon?: string) =>
  !cardName || !pantheon
    ? ''
    : `cards/${parseStringToSlug(pantheon)}/${parseStringToSlug(cardName)}`

export const getPantheonLandingPageSlut = (pantheon?: PantheonValue) =>
  !pantheon ? '' : `pantheons/${pantheon}`

export const getAboutSlug = () => `about/page`

export const getCardStory = (title: string, pantheon: string) =>
  axios({
    method: 'get',
    url: `${STORYBLOK_URL_STORIES}cards/${pantheon}/${title}/?token=${STORYBLOK_TOKEN}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

export const getAboutStory = () =>
  axios({
    method: 'get',
    url: `${STORYBLOK_URL_STORIES}about/page/?token=${STORYBLOK_TOKEN}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

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

export const fetchPantheonLandingPage = async (pantheon: string) =>
  await fetchStoriesByStartingString('pantheonLandingPage').then((stories) =>
    stories.data.stories.map(
      (story: StoryblokQ2NComponentType) =>
        story.content.component === 'pantheonLandingPage' &&
        parsePantheonLandingPageData(story),
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
const parseQuoi2NeufData = (quoi2NeufItem): Quoi2NeufStoryType => {
  const { title, subtitle, icon, available, pantheon } = quoi2NeufItem.content

  return {
    title,
    subtitle,
    icon,
    available,
    pantheon,
  }
}

const parsePantheonLandingPageData = (
  // @ts-ignore
  pantheonLandingPage,
): PantheonLandingPageType => {
  const { summary, relatedCards, metaDescription } = pantheonLandingPage.content

  return {
    summary,
    relatedCards,
    metaDescription,
  }
}
