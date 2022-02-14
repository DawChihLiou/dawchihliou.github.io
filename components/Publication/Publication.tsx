import React from 'react'
import styles from './Publication.module.css'
import articles from '../../data/articles'
import Link from '../Link'

const publication = articles.filter((_, i) => i < 3)
const isSameSite = (url: string) => url.startsWith('/')

export default function Publication() {
  return (
    <section className={styles.wrap}>
      <article className={styles.description}>
        <h2>I love writing</h2>
        <p>
          I enjoy writing about software development. Especially the things that
          can unblock our daily work and gives people inspirations to strive for
          engineering excellence.
        </p>
      </article>
      <article className={styles.list}>
        {publication.map((article) => (
          <article key={article.title} className={styles.item}>
            <div className={styles.thumbnail}>
              {isSameSite(article.cover) && (
                <img src={article.cover} alt={article.title} loading="lazy" />
              )}
            </div>
            <div className={styles.itemDescription}>
              <Link href={article.url}>
                <h3>{article.title}</h3>
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
      </article>
      <Link href="/articles" className={styles.link}>
        See more articles
      </Link>
    </section>
  )
}
