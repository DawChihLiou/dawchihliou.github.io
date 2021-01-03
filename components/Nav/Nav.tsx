import React, { useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Nav.module.css'
import socials from '../../utils/socials'
import { GrLinkedin, GrGithub, GrMedium, GrTwitter } from 'react-icons/gr'
import DarkmodeSwitch from '../DarkmodeSwitch'
import Link from 'next/link'

export default function Nav() {
  const [isMenuOpen, openMenu] = useState(false)
  const closeMenu = () => openMenu(false)
  const onMenuStateChange = ({ isOpen }) => openMenu(isOpen)

  return (
    <header className={styles.header}>
      <Menu
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        customBurgerIcon={<FiMenu />}
        customCrossIcon={<FiX />}
        disableAutoFocus
        isOpen={isMenuOpen}
        onStateChange={onMenuStateChange}
      >
        <Link href="/">
          <button
            className={styles.link}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Home
          </button>
        </Link>
        <Link href="/now">
          <button
            className={styles.link}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Now
          </button>
        </Link>
        <Link href="/articles">
          <button
            className={styles.link}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Articles
          </button>
        </Link>
        <span className={styles.pusher} />
        <span className={styles.divider} />
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
        <DarkmodeSwitch showLabel />
      </Menu>
    </header>
  )
}
