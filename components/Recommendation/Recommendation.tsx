import React from 'react'
import { FiAward, FiSmile, FiAnchor } from 'react-icons/fi'
import clsx from 'clsx'
import recommendations from '../../.generated/meta/linkedinRecommendationsTs'
import socials from '../../.generated/meta/socialsTs'
import styles from './Recommendation.module.css'
import Link from '../Link'

export default function Recommendation() {
  return (
    <section className={styles.wrap}>
      <h1>See what people say about me</h1>
      <div className={styles.horizontal}>
        <div className={styles.grid}>
          {recommendations.map((recom) => (
            <article className={styles.card} key={recom.id}>
              <div className={styles.body}>
                <p>" {recom.quote} "</p>
                <div className={styles.cardAction}>
                  <span
                    className={clsx(styles.avatar, {
                      [styles.avatarColorBlue]: recom.type === 'entrepreneur',
                      [styles.avatarColorRed]: recom.type === 'engineer',
                      [styles.avatarColorYellow]: recom.type === 'manager',
                    })}
                  >
                    {recom.type === 'entrepreneur' && <FiAward />}
                    {recom.type === 'engineer' && <FiSmile />}
                    {recom.type === 'manager' && <FiAnchor />}
                  </span>
                  <span>{recom.title}</span>
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
