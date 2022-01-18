import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

function getDateISOString(datetime) {
  if (datetime) {
    return new Date(datetime).toISOString().match(/.{4}-.{2}-.{2}/g)[0]
  }
  return new Date().toISOString().match(/.{4}-.{2}-.{2}/g)[0]
}

async function generate() {
  const pages = await globby([
    'pages/*.tsx',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx',
  ])

  // TODO: add images

  const urlTags = pages
    .map((file) =>
      file
        .replace('pages', '')
        .replace('data', '')
        .replace('.tsx', '')
        .replace('.mdx', '')
    )
    .map((path) => (path === '/index' ? '/' : path))
    .map(
      (path) => `
        <url>
            <loc>https://dawchihliou.github.io${path}</loc>
            <lastmod>${getDateISOString()}</lastmod>
        </url>
      `
    )

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml" 
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
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
