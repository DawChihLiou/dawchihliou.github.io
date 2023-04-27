import { program } from 'commander'
import makeDir from 'make-dir'
import write from 'write'
import { createReadStream } from 'fs'
import replaceStream from 'replacestream'
import allArticles from './articles.mjs'

const templatePath = 'scripts/article/templates'
const articlePath = 'data/content/articles'

const articles = ['a', 'an', 'the']
const conjunctions = ['and', 'but', 'for', 'nor', 'or', 'so', 'yet']
const prepositions = [
  'ago',
  'at',
  'by',
  'for',
  'from',
  'in',
  'into',
  'next',
  'of',
  'off',
  'on',
  'onto',
  'out',
  'over',
  'past',
  'till',
  'to',
]

function titlize(str) {
  const exceptions = [...articles, ...conjunctions, ...prepositions].join('|')
  const regex = new RegExp(`(\\b(?!${exceptions})\\b)\\S+`, 'g')
  return str.replace(
    regex,
    (letter) => letter.substring(0, 1).toUpperCase() + letter.substring(1)
  )
}

function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

async function main() {
  const now = new Date()

  program
    .name('yarn new:article')
    .description('Bootstrap a new article.')
    .argument('<title>', 'article title')
    .option('-p, --publishedat <string>', 'publishing date', formatDate(now))
    .option(
      '-d, --description <string>',
      'description',
      '✍️ Enter description here'
    )
    .option('-t, --tag <string>', 'tag', '✍️ Enter tag here')
    .parse()

  const [rawTitle] = program.args
  const options = program.opts()

  const title = titlize(rawTitle)
  const tag = titlize(options.tag)

  const filename = rawTitle.toLocaleLowerCase().replace(/\W+/g, '-')
  const imageOutputPath = await makeDir(`public/articles/${filename}`)

  createReadStream(`${templatePath}/hero.png`).pipe(
    write.stream(`${imageOutputPath}/hero.png`)
  )

  const latestArticle = allArticles[0]

  createReadStream(`${templatePath}/article.mdx`)
    .pipe(replaceStream('[TITLE]', title))
    .pipe(replaceStream('[PUBLISHED_AT]', options.publishedat))
    .pipe(replaceStream('[DESCRIPTION]', options.description))
    .pipe(replaceStream('[TAG]', tag))
    .pipe(replaceStream('[COVER]', `/optimized/articles/${filename}/hero.webp`))
    .pipe(replaceStream('[PREV_ARTICLE]', latestArticle.title))
    .pipe(
      replaceStream('[PREV_ARTICLE_URL]', `/articles/${latestArticle.slug}`)
    )
    .pipe(write.stream(`${articlePath}/${filename}.mdx`))
}

main()
