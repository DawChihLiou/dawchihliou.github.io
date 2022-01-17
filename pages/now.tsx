import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allOtherPages } from '.contentlayer/data'
import type { OtherPage } from '.contentlayer/types'
import components from '../components/MDXComponents'
import SeoContainer from '../components/SeoContainer'
import socials from '../utils/socials'
import styles from '../styles/Now.module.css'

export default function Now({ now }: { now: OtherPage }) {
  const Component = useMDXComponent(now.body.code)

  return (
    <SeoContainer
      title={now.title}
      description={now.description}
      url={`${socials.home}/${now.slug}`}
      image={now.cover}
      imageWidth={now.coverWidth}
      imageHeight={now.coverHeight}
    >
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>{now.title}</h1>
          <Component components={components} />
        </article>
      </main>
    </SeoContainer>
  )
}

export async function getStaticProps({ params }) {
  const now = allOtherPages.find((page) => page.slug === 'now')

  return { props: { now } }
}
