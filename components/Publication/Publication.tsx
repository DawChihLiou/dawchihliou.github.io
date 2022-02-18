import React from 'react'
import styles from './Publication.module.css'
import articles from '../../data/articles'
import Link from '../Link'
import Section from '../Section'
import socialsTs from '../../.generated/meta/socialsTs'

const publication = articles.filter((_, i) => i < 3)
const isSameSite = (url: string) => url.startsWith('/')

export default function Publication() {
  return (
    <Section heading="I love writing">
      <p>
        I
        <span role="img" aria-label="heart">
          {'❤️ '}
        </span>
        writing. I share frequently about what I learned in TypeScript, Rust,
        and the subtle things in web technology that give you an "AHA!" moment.
        Some of my articles are featured in publications such as{' '}
        <Link href={socialsTs.medium}>Better Programming</Link> and{' '}
        <Link href={socialsTs.hackernoon}>Hacker Noon</Link>.
      </p>
      <div className={styles.list}>
        {publication.map((article) => (
          <article key={article.title} className={styles.item}>
            <div className={styles.thumbnail}>
              {isSameSite(article.cover) && (
                <img src={article.cover} alt={article.title} loading="lazy" />
              )}
            </div>
            <div className={styles.itemDescription}>
              <Link href={article.url}>
                <h4>{article.title}</h4>
              </Link>
              {article.external && (
                <Link href={article.publisherUrl} className={styles.caption}>
                  {'Published on '}
                  <span>{article.publisher}</span>
                </Link>
              )}
              <p>{article.description}</p>
            </div>
          </article>
        ))}
      </div>
      <Link href="/articles" className={styles.link}>
        See more articles
      </Link>
    </Section>
  )
}
