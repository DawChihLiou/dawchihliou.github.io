import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Recommendation from '../components/Recommendation'
import Project from '../components/Project'
import SkillSet from '../components/SkillSet'
import socials from '../.generated/meta/socialsTs'
import Publication from '../components/Publication'
import SeoContainer from '../components/SeoContainer'
import Expertise from '../components/Expertise'

export default function Home() {
  return (
    <SeoContainer
      title="Daw-Chih Liou - Software Engineer, creator, writer"
      description={socials.description}
      url={socials.home}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <div className={styles.container}>
        <Head>
          {/* Google Search Console */}
          <meta
            name="google-site-verification"
            content="XzmO5hA3kc7-91MB68LpYNOvXxLasSYbiecgmnWuFL8"
          />
          {/* plausible analytics */}
          <script
            defer
            data-domain="dawchihliou.github.io"
            src="https://plausible.io/js/plausible.outbound-links.js"
          ></script>
        </Head>

        <main className={styles.main}>
          <Hero />
          <Intro />
          <Recommendation />
          <Expertise />
          <Project />
          <Publication />
          <SkillSet />
        </main>
      </div>
    </SeoContainer>
  )
}
