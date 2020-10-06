import React from 'react'
import Head from 'next/head'
import styles from './Article.module.css'
import socials from '../../utils/socials'
import Author from '../Author'

type ArticleProps = {
  children: React.ReactChild
  title: string
  description: string
  url?: string
  cover?: string
  coverWidth?: string
  coverHeight?: string
  hideAuthor?: boolean
}

export default function Article({
  children,
  title,
  description,
  url = '',
  cover = '',
  coverWidth = '',
  coverHeight = '',
  hideAuthor,
}: ArticleProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/*  Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${socials.home}${cover}`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={coverWidth} />
        <meta property="og:image:height" content={coverHeight} />
        <meta property="og:image:alt" content={description} />
      </Head>
      <article>
        <div className={styles.container}>
          <div className={styles.wrap}>
            {children}
            {!hideAuthor && <Author />}
          </div>
        </div>
      </article>
    </>
  )
}
