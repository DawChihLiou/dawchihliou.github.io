import React from 'react'
import Head from 'next/head'
import styles from '../styles/Now.module.css'

export default function Now() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Now</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Coming up soon</h1>
      </main>
    </div>
  )
}
