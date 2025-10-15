import { MetadataRoute } from 'next'
import { URLS } from '../src/utils/url.constants'

const sitemap = (): MetadataRoute.Sitemap => {
  const { STATIC, PANTHEONS, CARDS } = URLS

  const staticsMapping = STATIC.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const pantheonsMapping = PANTHEONS.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const cardsMapping = CARDS.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

  return [...staticsMapping, ...pantheonsMapping, ...cardsMapping]
}

export default sitemap
