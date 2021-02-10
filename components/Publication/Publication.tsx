import React from 'react'
import styles from './Publication.module.css'
import articles from '../../data/articles'
import Link from 'next/link'

const publication = articles.filter((a) => a.url !== '/articles/helloworld')

export default function Publication() {
  return (
    <section
      className={styles.wrap}
      title="my open source and none-profit projects"
    >
      <article className={styles.description}>
        <h1>I love writing</h1>
        <p>
          I enjoy writing about software development. Especially the things that
          can unblock our daily work and gives people inspirations to strive for
          engineering excellence.
        </p>
      </article>
      <article className={styles.list}>
        {publication.map((article) => (
          <article key={article.title} className={styles.item}>
            <a href={article.url} target="_blank" rel="noreferrer">
              <div className={styles.itemDescription}>
                <h2>{article.title}</h2>
                {article.external && (
                  <a
                    href={article.publisherUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.caption}
                  >
                    {'Published on '}
                    <span>{article.publisher}</span>
                  </a>
                )}
                <p>{article.description}</p>
              </div>
            </a>
          </article>
        ))}
      </article>
      <a href="/articles" className={styles.link}>
        See more articles
      </a>
    </section>
  )
}
