import prettier from 'prettier'
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import { remark } from 'remark'
import strip from 'strip-markdown'
import { allArticles } from '.contentlayer/data'
import externalArticles from '../../.generated/meta/externalArticles.mjs'

const outdir = '.generated/fulltext-search'
const outfilename = 'index.json'

/**
 * Consolidate all articles and generate the index JSON file for full text search WebAssembly module.
 */
async function generate() {
  if (existsSync(outdir)) {
    rmSync(outdir, { recursive: true })
  }

  const originals = allArticles.map((a) => ({
    title: a.title,
    url: `/articles/${a.slug}`,
    body: a.body.raw,
  }))
  const externals = externalArticles.map((a) => ({
    title: a.title,
    url: a.url,
    body: a.description,
  }))
  const articles = originals.concat(externals)

  Promise.all(
    articles.map(async (a) => {
      const file = await remark().use(strip).process(a.body)
      return {
        ...a,
        body: String(file),
      }
    })
  )

  const prettierConfig = await prettier.resolveConfig('.prettierrc')

  const formatted = prettier.format(JSON.stringify(articles), {
    ...prettierConfig,
    parser: 'json',
  })

  mkdirSync(outdir, { recursive: true })

  writeFileSync(`${outdir}/${outfilename}`, formatted)
}

generate()
