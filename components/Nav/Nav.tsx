import React from 'react'
import { push as Menu } from 'react-burger-menu'
import Link from 'next/link'
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
      >
        <Link href="/">Home</Link>
        <Link href="/now">Now</Link>
        <Link href="/publications">Publications</Link>
      </Menu>
    </header>
  )
}
