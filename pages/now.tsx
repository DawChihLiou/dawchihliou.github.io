import React from 'react'
import { useLiveReload, useMDXComponent } from 'next-contentlayer/hooks'
import { allOtherPages } from 'contentlayer/generated'
import type { OtherPage } from 'contentlayer/generated'
import components from '../components/MDXComponents'
import SeoContainer from '../components/SeoContainer'
import socials from '../.generated/meta/socialsTs'
import styles from '../styles/Now.module.css'
import Section from '../components/Section'
import Link from '../components/Link'

type NowProps = {
  meta: OtherPage
}

export default function Now({ meta }: NowProps) {
  const MDXContent = useMDXComponent(meta.body.code)
  useLiveReload()

  return (
    <SeoContainer
      title={`Daw-Chih's ${meta.title}`}
      description={meta.description}
      url={`${socials.home}/${meta.slug}`}
      image={meta.cover}
      imageWidth={meta.coverWidth}
      imageHeight={meta.coverHeight}
    >
      <main className={styles.main}>
        <Section>
          <article className={styles.article}>
            <h1>{meta.title}</h1>
            <h2>
              Inspired by{' '}
              <Link href="https://nownownow.com/about">nownownow.com</Link>
            </h2>
            <MDXContent components={components} />
          </article>
        </Section>
      </main>
    </SeoContainer>
  )
}

export async function getStaticProps() {
  const meta = allOtherPages.find((page) => page.slug === 'now')

  return { props: { meta } }
}
