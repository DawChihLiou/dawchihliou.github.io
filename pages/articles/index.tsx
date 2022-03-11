import React, { useEffect, useState } from 'react'
import articles from '../../data/articles'
import styles from '../../styles/Articles.module.css'
import Link from '../../components/Link'
import { FiRss } from 'react-icons/fi'
import SeoContainer from '../../components/SeoContainer'
import socials from '../../.generated/meta/socialsTs'

import * as wasm from '../../wasm/fulltext_search/core/pkg'

export default function Articles() {
  const [results, setResults] = useState<string[]>([])
  useEffect(() => {
    const results = wasm.search('rust next.js wasm', 5)
    setResults(results)
  }, [])

  return (
    <SeoContainer
      title="Daw-Chih's articles"
      description="I write for engineers. Documenting web technology, coding patterns, and best practices from my learnings."
      url={`${socials.home}/articles`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.banner}>
            <p>
              If you enjoy the articles, please{' '}
              <Link href="/rss.xml">
                subscribe to the RSS feed <FiRss />
              </Link>
            </p>
          </div>
          <div>
            <h1>Test</h1>
            <p>{results.join(' | ')}</p>
          </div>
          <div className={styles.description}>
            <h1>I Write to Share What I Learned</h1>
            <h2>Ship. Learn. Share. Repeat.</h2>
            <p>
              I enjoy writing about TypeScript, Rust, and web technology.
              Especially the subtle things that unblock engineers' daily work
              and inspire to strive for engineering excellence. Some of my
              articles are featured in publications such as{' '}
              <Link href={socials.medium}>Better Programming</Link> and{' '}
              <Link href={socials.hackernoon}>Hacker Noon</Link>.
            </p>
          </div>
          <div className={styles.articles}>
            {articles.map((article) => (
              <section className={styles.grid} key={article.url}>
                <div className={styles.date}>
                  <p>{article.date}</p>
                </div>
                <article className={styles.description}>
                  <p className={styles.category}>{article.category}</p>
                  {article.external && (
                    <Link href={article.url}>{article.title}</Link>
                  )}
                  {!article.external && (
                    <Link href={article.url}>{article.title}</Link>
                  )}
                  {article.external && (
                    <Link
                      href={article.publisherUrl}
                      className={styles.caption}
                    >
                      {'Published on '}
                      <span>{article.publisher}</span>
                    </Link>
                  )}
                  <p>{article.description}</p>
                  <div>
                    <img
                      src={article.avatar}
                      alt={article.author}
                      className={styles.avatar}
                      loading="lazy"
                    />
                    <Link href={article.social} className={styles.author}>
                      {article.author}
                    </Link>
                  </div>
                </article>
              </section>
            ))}
          </div>
        </main>
      </div>
    </SeoContainer>
  )
}
