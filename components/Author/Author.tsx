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
        <a href={socials.home} className={styles.author}>
          <span>Daw-Chih Liou</span>
        </a>
        <p>{socials.description}</p>
      </div>
    </article>
  )
}
