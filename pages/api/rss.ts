import { NextApiRequest, NextApiResponse } from 'next'
import RSS from 'rss'
import articles from '../../data/articles'

/**
 * RSS Feed for the articles on the site.
 * Read more about rss pacakge here: https://github.com/dylang/node-rss
 *
 * To add new articles in the feed, add the article metadata in `/data/articles.ts`.
 */
export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 400
    res.end('Bad Request')
  }

  const feed = new RSS({
    title: "Daw-Chih's tech articles",
    description: 'description',
    feed_url: 'https://dawchihliou.github.io/api/rss',
    site_url: 'https://dawchihliou.github.io/',
    image_url: 'https://dawchihliou.github.io/portrait.png',
    docs: 'https://dawchihliou.github.io/articles',
    managingEditor: 'Daw-Chih Liou',
    webMaster: 'Daw-Chih Liou',
    copyright: `© ${new Date().getFullYear()} Daw-Chih Liou`,
    language: 'en',
    categories: [
      'Technology',
      'TypesScript',
      'JavaScript',
      'Frontend',
      'Fullstack',
      'React',
      'RxJS',
      'Web Development',
      'Web Engineering',
      'Unit Test',
      'Release Pipeline',
      'Database',
    ],
    pubDate: `${new Date().toUTCString()}`,
    ttl: 60,
  })

  const items = articles.map((article) => ({
    title: article.title,
    description: article.description,
    url: `https://dawchihliou.github.io${article.url}`, // link to the item
    categories: [article.category], // optional - array of item categories
    author: article.author, // optional - defaults to feed author property
    date: article.date, // any format that js Date can parse.
  }))

  items.forEach((item) => {
    feed.item(item)
  })

  const xml = feed.xml()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/xml')
  res.end(xml)
}
