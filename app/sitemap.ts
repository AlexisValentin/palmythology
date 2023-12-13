import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.palmythology.com',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.palmythology.com/q2n',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.palmythology.com/pantheons/greek',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/egyptian',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/norse',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/celtic',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/japanese',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/mayan',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/chinese',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/aztec',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/hindu',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/roman',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.palmythology.com/pantheons/search',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.palmythology.com/pantheons/about',
      changeFrequency: 'never',
      priority: 0.5,
    },
  ]
}
