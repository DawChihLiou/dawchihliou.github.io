import got from 'got'
import prettier from 'prettier'
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs'
import image from '../.generated/meta/shieldsIoBadges.mjs'

async function generate() {
  const outdir = 'public/optimized/shields'

  if (existsSync(outdir)) {
    // clear all generated files
    rmSync(outdir, { recursive: true })
  }
  mkdirSync(outdir, { recursive: true })

  const prettierConfig = await prettier.resolveConfig('./prettierrc')

  const downloads = Object.keys(image).map(async (key) => {
    const url = image[key]
    const result = await got(url)
    const formatted = prettier.format(result.body, {
      ...prettierConfig,
      parser: 'html',
    })

    writeFileSync(`${outdir}/${key.toLocaleLowerCase()}.svg`, formatted)
  })

  Promise.all(downloads).catch((error) => {
    console.log('Failed to generate Shields image.', error)
  })
}

generate()
