import React from 'react'
import { FiAward, FiSmile, FiAnchor } from 'react-icons/fi'
import content from './content'
import clsx from 'clsx'
import socials from '../../.generated/meta/socialsTs'
import styles from './Recommendation.module.css'
import Link from '../Link'

export default function Recommendation() {
  return (
    <section className={styles.wrap}>
      <h1>See what people say about me</h1>
      <div className={styles.horizontal}>
        <div className={styles.grid}>
          {content.map((recommendation) => (
            <article className={styles.card} key={recommendation.id}>
              <div className={styles.body}>
                <p>" {recommendation.quote} "</p>
                <div className={styles.cardAction}>
                  <span
                    className={clsx(styles.avatar, {
                      [styles.avatarColorBlue]: recommendation.type === 1,
                      [styles.avatarColorRed]: recommendation.type === 2,
                      [styles.avatarColorYellow]: recommendation.type === 3,
                    })}
                  >
                    {recommendation.type === 1 && <FiAward />}
                    {recommendation.type === 2 && <FiSmile />}
                    {recommendation.type === 3 && <FiAnchor />}
                  </span>
                  <span>{recommendation.title}</span>
                </div>
              </div>
              <div className={styles.footer}>
                <Link href={socials.linkedin} target="_blank" rel="noreferrer">
                  See more on Linkedin
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
