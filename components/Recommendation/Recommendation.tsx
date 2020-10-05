import React from 'react'
import { FiAward, FiSmile, FiAnchor } from 'react-icons/fi'
import content from './content'
import clsx from 'clsx'
import socials from '../../utils/socials'

import styles from './Recommendation.module.css'

export default function Recommendation() {
  return (
    <section className={styles.wrap} title="recommendation from others">
      <div className={styles.smallerWrap}>
        <h1>See what people say about me</h1>
      </div>
      <div className={styles.grid} title="what people say about me">
        {content.map((recommendation, key) => (
          <article className={styles.card} key={recommendation.title}>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              <p>" {recommendation.quote} "</p>
              <div className={styles.cardAction}>
                <span
                  className={clsx(styles.avatar, {
                    [styles.avatarColorBlue]: key === 0,
                    [styles.avatarColorRed]: key === 1,
                    [styles.avatarColorYellow]: key === 2,
                  })}
                >
                  {key === 0 && <FiAward />}
                  {key === 1 && <FiSmile />}
                  {key === 2 && <FiAnchor />}
                </span>
                <span className={styles.description}>
                  {recommendation.title}
                </span>
              </div>
              <div className={styles.footer}>
                <span>See more on Linkedin</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
