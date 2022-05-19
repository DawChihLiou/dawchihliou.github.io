import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '../../components/MDXComponents'
import Article from '../../components/Article'
import { allArticles } from 'contentlayer/generated'
import type { Article as ArticleType } from 'contentlayer/generated'

type PostProps = {
  post: ArticleType
}

export default function Post({ post }: PostProps) {
  const Component = useMDXComponent(post.body.code)

  return (
    <Article {...post}>
      <Component components={components} />
    </Article>
  )
}

export async function getStaticPaths() {
  return {
    paths: allArticles.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allArticles.find((post) => post.slug === params.slug)

  return { props: { post } }
}
