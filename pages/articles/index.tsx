import React from 'react'
import Head from 'next/head'
import articles from '../../data/articles'
import styles from '../../styles/Articles.module.css'
import Link from 'next/link'
import { FiRss } from 'react-icons/fi'
import SeoContainer from '../../components/SeoContainer'
import socials from '../../utils/socials'

export default function Articles() {
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
              If you enjoy the articles, please do{' '}
              <a href="/rss.xml">
                subscribe to the RSS feed <FiRss />
              </a>
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
                    <a href={article.url} target="_blank" rel="noreferrer">
                      {article.title}
                    </a>
                  )}
                  {!article.external && (
                    <Link href={article.url}>{article.title}</Link>
                  )}
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
                  <div>
                    <img
                      src={article.avatar}
                      alt={article.author}
                      className={styles.avatar}
                      loading="lazy"
                    />
                    <a href={article.social} className={styles.author}>
                      <span>{article.author}</span>
                    </a>
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
