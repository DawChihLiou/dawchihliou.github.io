import React from 'react'
import Head from 'next/head'
import styles from '../styles/Publications.module.css'

export default function Publications() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Publications</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Coming up soon</h1>
      </main>
    </div>
  )
}