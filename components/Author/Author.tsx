import React from 'react'
import styles from './Author.module.css'
import socials from '../../utils/socials'

export default function Author() {
  return (
    <article className={styles.wrap}>
      <img
        src="/optimized/portrait-sm.png"
        alt="Daw-Chih Liou"
        className={styles.avatar}
        loading="lazy"
      />
      <div>
        <a href={socials.twitter} className={styles.author}>
          <span>Daw-Chih Liou</span>
        </a>
        <p>
          Daw-Chih is a software engineer, UX advocate, and mentor who is
          dedicated to Web engineering. He is passionate about meeting business
          trajectory with user journey and utilizing engineering architecture
          and performance monitoring to provide optimal user experience.
        </p>
      </div>
    </article>
  )
}
