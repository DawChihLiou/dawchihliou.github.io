import React from 'react'
import Head from 'next/head'
import articles from '../../data/articles'
import styles from '../../styles/Articles.module.css'
import Link from 'next/link'

export default function Articles() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {articles.map((article) => (
          <div className={styles.grid} key={article.url}>
            <div className={styles.date}>
              <p>{article.date}</p>
            </div>
            <div className={styles.description}>
              <p className={styles.category}>{article.category}</p>
              <Link href={article.url}>{article.title}</Link>
              <p>{article.description}</p>
              <div>
                <img
                  src={article.avatar}
                  alt={article.author}
                  className={styles.avatar}
                />
                <a href={article.social} className={styles.author}>
                  <span>{article.author}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
