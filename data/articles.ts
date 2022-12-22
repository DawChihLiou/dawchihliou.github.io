import socials from '../.generated/meta/socialsTs'
import { allArticles } from 'contentlayer/generated'
import externalArticles from '../.generated/meta/externalArticlesTs'

type Writing = {
  date: string
  publisher: string
  title: string
  description: string
  url: string
  cover: string
  category: string
  author: string
  avatar: string
  social: string
  external: boolean
  publisherUrl: string
}

const originals = allArticles.map<Writing>((a) => ({
  date: a.publishedAt,
  publisher: '',
  title: a.title,
  description: a.description,
  url: `/articles/${a.slug}`,
  cover: a.cover,
  category: a.category,
  author: 'Daw-Chih Liou',
  avatar: '/optimized/raw/portrait-sm.png',
  social: socials.github,
  external: false,
  publisherUrl: '',
}))

const articles = originals
  .concat(externalArticles)
  .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

export default articles
