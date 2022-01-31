import sharp from 'sharp'
import got from 'got'
import image from '../.generated/meta/shieldsIoBadges.mjs'
import { existsSync, mkdirSync, rmSync } from 'fs'

async function generate() {
  const outdir = 'public/optimized/shields'

  if (existsSync(outdir)) {
    // clear all generated files
    rmSync(outdir, { recursive: true })
  }
  mkdirSync(outdir, { recursive: true })

  const keys = Object.keys(image)

  const streams = keys.map(async (key) => {
    const url = image[key]
    const stream = sharp({ failOnError: false })

    // more detail: https://github.com/sindresorhus/got#gotstreamurl-options
    got.stream(url).pipe(stream)

    return stream.clone().webp().toFile(`${outdir}/${key.toLowerCase()}.webp`)
  })

  Promise.all(streams).catch((error) => {
    console.log('Failed to generate Shields image.', error)
  })
}

generate()
