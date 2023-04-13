import { program } from 'commander'

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

async function main() {
  program
    .name('yarn new:article')
    .description('Bootstrap a new article.')
    .argument('<title>', 'article title')
    .action((title) => console.log(title))
    .parse()

  const [title] = program.args
  const formattedTitle = titlize(title)
  const imagePath = title.toLocaleLowerCase().replace(/\W+/g, '-')
}

main()
