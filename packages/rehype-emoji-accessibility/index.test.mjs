import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeEmoji from './index'

unified()
  .use(remarkParse)
  .use(remarkRehype)
  // .use(rehypeEmoji)
  .use(rehypeStringify)
  .process('🧑‍🔬')
  .then(
    (file) => {
      console.log(String(file))
    },
    (error) => {
      // Handle your error here!
      throw error
    }
  )
