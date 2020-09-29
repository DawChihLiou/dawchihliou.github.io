import React from 'react'
import { push as Menu } from 'react-burger-menu'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Nav.module.css'

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
        <a href="/">Home</a>
        <a href="/now">Now</a>
        <a href="/articles">Articles</a>
      </Menu>
    </header>
  )
}
