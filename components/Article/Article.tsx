import React from 'react'
import Image from 'next/image'
import styles from './Article.module.css'
import socials from '../../utils/socials'
import Author from '../Author'
import SeoContainer from '../SeoContainer'

type ArticleProps = {
  children: React.ReactChild
  title: string
  description: string
  publishedAt: string
  slug: string
  cover: string
  coverWidth: string
  coverHeight: string
  category?: string
  readingTime?: Record<string, string>
  hideAuthor?: boolean
}

export default function Article({
  children,
  title,
  description,
  publishedAt,
  slug = '',
  cover = '',
  coverWidth,
  coverHeight,
  readingTime,
  hideAuthor,
}: ArticleProps) {
  return (
    <SeoContainer
      title={title}
      description={description}
      url={`https://dawchihliou.github.io/articles/${slug}`}
      image={`${socials.home}${cover}`}
      imageWidth={coverWidth}
      imageHeight={coverHeight}
    >
      <article>
        <div className={styles.container}>
          <div className={styles.wrap}>
            <h1>{title}</h1>
            <div className={styles.info}>
              <div className={styles.author}>
                <Image
                  alt="Daw-Chih Liou"
                  src="/optimized/portrait-sm.webp"
                  width="24"
                  height="24"
                />
                <p>Daw-Chih Liou</p>
              </div>
              <p>
                {publishedAt}
                {readingTime ? ` · ${readingTime.text}` : ''}
              </p>
            </div>
            <Image alt={title} width={1400} height={coverHeight} src={cover} />
            <div className="article-content">{children}</div>
            {!hideAuthor && <Author />}
          </div>
        </div>
      </article>
    </SeoContainer>
  )
}
