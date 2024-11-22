import axios from 'axios'
import { CardDetails, ResearchCriterias } from '../types/cards/card'
import {
  Quoi2NeufStoryType,
  STORYBLOK_RESULTS_PER_PAGE,
  STORYBLOK_VERSIONS,
} from '../types/storyblok/storyblok'
import { parseStringToSlug, replaceHyphenByDashes } from './string'
import {
  StoryblokCardComponentType,
  StoryblokQ2NComponentType,
} from '../types/storyblok/stories'

export const getStoryblokToken = () => process.env.STORYBLOK_TOKEN
export const getStoryblokBaseUrl = () => process.env.STORYBLOK_BASE_URL

export const getCardSlug = (cardName?: string, pantheon?: string) =>
  !cardName || !pantheon
    ? ''
    : `cards/${parseStringToSlug(pantheon)}/${parseStringToSlug(cardName)}`

export const getCardStory = (title: string, pantheon: string) =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}cards/${pantheon}/${replaceHyphenByDashes(title)}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

export const getPantheonStory = (pantheon: string) =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}pantheons/${pantheon}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

export const getSubjectStory = (subject: string) =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}subjects/${subject}/?token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: 'json',
  })

const fetchStoriesByStartingString = (startingString: string) =>
  axios({
    method: 'get',
    url: `${getStoryblokBaseUrl()}?starts_with=${startingString}&token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}&per_page=${STORYBLOK_RESULTS_PER_PAGE}`,
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

// @ts-ignore
const parseQuoi2NeufData = (quoi2NeufItem): Quoi2NeufStoryType => {
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
