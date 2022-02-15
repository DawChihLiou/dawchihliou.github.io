import React from 'react'
import styles from '../styles/Work.module.css'
import SeoContainer from '../components/SeoContainer'
import socials from '../.generated/meta/socialsTs'
import Section from '../components/Section'

export default function Expertise() {
  return (
    <SeoContainer
      title="Daw-Chih's expertise"
      description=""
      url={`${socials.home}/work`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Build to win</h1>
          <Section heading=""></Section>
        </main>
      </div>
    </SeoContainer>
  )
}
