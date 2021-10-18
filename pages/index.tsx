import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Recommendation from '../components/Recommendation'
import Project from '../components/Project'
import SkillSet from '../components/SkillSet'
import socials from '../utils/socials'
import Publication from '../components/Publication'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* Open Graph */}
        <meta property="og:title" content="Daw-Chih Liou's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={socials.home} />
        <meta property="og:description" content={socials.description} />
        <meta property="og:image" content={socials.heroImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1411" />
        <meta property="og:image:height" content="682" />
        <meta property="og:image:alt" content={socials.description} />
        {/* Google Search Console */}
        <meta name="google-site-verification" content="XzmO5hA3kc7-91MB68LpYNOvXxLasSYbiecgmnWuFL8" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Intro />
        <Recommendation />
        <Project />
        <Publication />
        <SkillSet />
      </main>
    </div>
  )
}
