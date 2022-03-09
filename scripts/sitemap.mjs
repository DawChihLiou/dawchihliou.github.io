import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'
import socials from '../.generated/meta/socials.mjs'

/**
 * Returns the ISO string of a given datetime.
 *
 * @param datetime { string | number | undefined | null }
 * @return string
 */
function getDateISOString(datetime) {
  if (datetime) {
    return new Date(datetime).toISOString().match(/.{4}-.{2}-.{2}/g)[0]
  }
  return new Date().toISOString().match(/.{4}-.{2}-.{2}/g)[0]
}

/**
 * Generate Sitemap.xml based on files in "/pages" and "/data".
 */
async function generate() {
  const pages = await globby([
    'pages/*.tsx',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx',
  ])

  const urlTags = pages
    .map((file) =>
      file
        .replace('pages', '')
        .replace('data/content', '')
        .replace('.tsx', '')
        .replace('.mdx', '')
    )
    .reduce(
      (memo, file) => {
        memo[0].add(file)
        return memo
      },
      [new Set()]
    )
    .reduce((files, memo) => [...files, ...Array.from(memo)], [])
    .map((path) => (path === '/index' ? '/' : path))
    .map(
      (path) => `
        <url>
            <loc>${socials.home}${path}</loc>
            <lastmod>${getDateISOString()}</lastmod>
        </url>
      `
    )

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
        ${urlTags.join('')}
    </urlset>
  `

  const prettierConfig = await prettier.resolveConfig('./prettierrc')
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  writeFileSync('public/sitemap.xml', formatted)
}

generate()
