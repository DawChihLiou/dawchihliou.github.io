import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'
import socials from '../../utils/socials'
import resources from '../../utils/resources'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.resources}>
          <p>
            <span
              role="img"
              aria-label="build with love"
              className={styles.emoji}
            >
              💚
            </span>
            This site is built with
          </p>
          <p>
            <a href={resources.nextjs} target="_blank" rel="noreferrer">
              Next.js
            </a>
          </p>
          <p>
            <a href={resources.cssModule} target="_blank" rel="noreferrer">
              CSS Modules
            </a>
          </p>
          <p>
            <a href={resources.reactIcons} target="_blank" rel="noreferrer">
              React Icons
            </a>
          </p>
          <p>
            <a href={resources.reactMarkdown} target="_blank" rel="noreferrer">
              react-markdown
            </a>
          </p>
        </div>
        <div className={styles.contact}>
          <p>
            <span
              role="img"
              aria-label="build with love"
              className={styles.emoji}
            >
              🦄
            </span>
            Where to find me
          </p>
          <p>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </p>
          <p>
            <a href={socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
          <p>
            <a href={socials.medium} target="_blank" rel="noreferrer">
              Medium
            </a>
          </p>
          <p>
            <a href={socials.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
          </p>
        </div>
        <div className={styles.sitemap}>
          <p>
            <span
              role="img"
              aria-label="build with love"
              className={styles.emoji}
            >
              🗺
            </span>
            Sitemap
          </p>
          <Link href="/">Home</Link>
          <Link href="/now">Now</Link>
          <Link href="/publications">Publications</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()}{' '}
        <a href={socials.github} target="_blank" rel="noreferrer">
          Daw-Chih Liou
        </a>
      </div>
    </footer>
  )
}
