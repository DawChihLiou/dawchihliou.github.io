import React from 'react'

import styles from './Footer.module.css'
import socials from '../../.generated/meta/socialsTs'
import resources from '../../.generated/meta/resourcesTs'
import { FiRss } from 'react-icons/fi'
import Link from '../Link'

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
          <Link href={resources.nextjs}>Next.js</Link>
          <Link href={resources.reactIcons}>React Icons</Link>
          <Link href={resources.mdx}>MDX</Link>
          <Link href={resources.unified}>unified</Link>
          <Link href={resources.contentlayer}>Contentlayer</Link>
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
          <Link href={socials.linkedin}>Linkedin</Link>
          <Link href={socials.github}>GitHub</Link>
          <Link href={socials.twitter}>Twitter</Link>
          <Link href={socials.medium}>Medium</Link>
          <Link href={socials.hackernoon}>Hacker Noon</Link>
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
          <Link href="/expertise">Expertise</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/work">Work</Link>
          <Link href="/now">Now</Link>
          <Link href="/rss.xml">
            RSS Feed to The Articles <FiRss />
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()}{' '}
        <Link href={socials.linkedin}>Daw-Chih Liou</Link>
      </div>
    </footer>
  )
}
