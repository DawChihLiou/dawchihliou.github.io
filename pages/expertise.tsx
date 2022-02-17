import React from 'react'
import styles from '../styles/Expertise.module.css'
import SeoContainer from '../components/SeoContainer'
import socials from '../.generated/meta/socialsTs'
import Section from '../components/Section'
import SkillSet from '../components/SkillSet'

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
      <main className={styles.main}>
        <h1>Build to win</h1>
        <Section heading="My Philosophy"></Section>
        <Section heading="My Process"></Section>
        <SkillSet />
      </main>
    </SeoContainer>
  )
}
