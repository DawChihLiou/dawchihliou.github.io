import React from 'react'
import { push as Menu } from 'react-burger-menu'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Nav.module.css'
import socials from '../../utils/socials'
import { GrLinkedin, GrGithub, GrMedium, GrTwitter } from 'react-icons/gr'

export default function Nav() {
  return (
    <header className={styles.header}>
      <Menu
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        customBurgerIcon={<FiMenu />}
        customCrossIcon={<FiX />}
        disableAutoFocus
      >
        <section>
          <a href="/">Home</a>
          <a href="/now">Now</a>
          <a href="/articles">Articles</a>
        </section>
        <section>
          <div className={styles.profile}>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Daw-Chih's Linkedin profile"
              className={styles.iconLink}
            >
              <GrLinkedin />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Daw-Chih's GitHub profile"
              className={styles.iconLink}
            >
              <GrGithub />
            </a>
            <a
              href={socials.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Daw-Chih's Medium profile"
              className={styles.iconLink}
            >
              <GrMedium />
            </a>
            <a
              href={socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Daw-Chih's Twitter"
              className={styles.iconLink}
            >
              <GrTwitter />
            </a>
          </div>
        </section>
      </Menu>
    </header>
  )
}
