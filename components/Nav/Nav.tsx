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
        <section>
          <div className={styles.links}>
            <Link href="/">
              <span onClick={closeMenu}>Home</span>
            </Link>
            <Link href="/now">
              <span onClick={closeMenu}>Now</span>
            </Link>
            <Link href="/articles">
              <span onClick={closeMenu}>Articles</span>
            </Link>
          </div>
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
        <section>
          <div className={styles.darkmode}>
            <DarkmodeSwitch showLabel />
          </div>
        </section>
      </Menu>
    </header>
  )
}
