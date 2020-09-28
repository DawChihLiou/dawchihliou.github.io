import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div
      className={styles.hero}
      title="Daw-Chih is a software engineer, ux designer, and mentor."
    >
      <h1 className={styles.title}>software engineer</h1>
      <h1 className={styles.title}>ux designer</h1>
      <h1 className={styles.title}>mentor</h1>
    </div>
  )
}
