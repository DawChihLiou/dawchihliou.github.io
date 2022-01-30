import React from 'react'
import styles from './Hero.module.css'
import clsx from 'clsx'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>
        <span
          className={clsx(styles.title, styles.heroTitle, styles.heroTitle_1)}
        >
          <span className={clsx(styles.title, styles.animatedTitle_1)}>
            software engineer
          </span>
        </span>
        <span
          className={clsx(styles.title, styles.heroTitle, styles.heroTitle_2)}
        >
          <span className={clsx(styles.title, styles.animatedTitle_2)}>
            ux designer
          </span>
        </span>
        <span
          className={clsx(styles.title, styles.heroTitle, styles.heroTitle_3)}
        >
          <span className={clsx(styles.title, styles.animatedTitle_3)}>
            creator
          </span>
        </span>
      </h1>
    </section>
  )
}
