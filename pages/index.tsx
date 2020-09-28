import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Recommendation from '../components/Recommendation'
import Project from '../components/Project'
import SkillSet from '../components/SkillSet'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daw-Chih liou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Intro />
        <Recommendation />
        <Project />
        <SkillSet />
      </main>
    </div>
  )
}
