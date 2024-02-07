import { MetadataRoute } from 'next'
import { URLS } from '../src/types/consts/url'

const sitemap = (): MetadataRoute.Sitemap => {
  const { STATIC, PANTHEONS, CARDS } = URLS

  const staticsMapping = STATIC.map((url) => ({
    url,
    priority: 0.5,
  }))

  const pantheonsMapping = PANTHEONS.map((url) => ({
    url,
    priority: 1,
  }))

  const cardsMapping = CARDS.map((url) => ({
    url,
    priority: 0.8,
  }))

  return [...staticsMapping, ...pantheonsMapping, ...cardsMapping]
}

export default sitemap
