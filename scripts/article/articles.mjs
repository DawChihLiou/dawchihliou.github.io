import { allArticles } from '../../.contentlayer/generated/index.mjs'

const articles = allArticles.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
)

export default articles
