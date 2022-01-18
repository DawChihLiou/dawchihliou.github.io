import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

const dir = 'data/meta'
const outDir = '.generated/meta'
const extensions = ['.ts', '.mjs']

/**
 * Generate TypeScript and ESM files based on meta data in `data/meta/`.
 */
async function generate() {
  const prettierConfig = await prettier.resolveConfig('./prettierrc')
  const files = await globby(dir)

  if (existsSync(outDir)) {
    // clear all generated files
    rmSync(outDir, { recursive: true })
  }

  files.forEach((file) => {
    const filename = file.replace('data', '.generated').replace('.json', '')

    const raw = readFileSync(file)
    const parsed = JSON.parse(raw)
    const output = `export default ${JSON.stringify(parsed)}`

    mkdirSync(outDir, { recursive: true })

    extensions.forEach((extension) => {
      const formatted = prettier.format(output, {
        ...prettierConfig,
        parser: extension === '.ts' ? 'typescript' : 'babel',
      })
      const postfix = extension === '.ts' ? 'Ts' : ''

      writeFileSync(`${filename}${postfix}${extension}`, formatted)
    })
  })
}

generate()
