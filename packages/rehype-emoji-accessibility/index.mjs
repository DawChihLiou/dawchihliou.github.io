import { visit } from 'unist-util-visit'

export default function emojiAccessibility() {
  return (tree, file) => {
    visit(tree, 'ParagraphNode', (node) => {
      console.log(node)
    })
  }
}
