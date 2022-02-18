import React from 'react'
import styles from '../styles/Expertise.module.css'
import SeoContainer from '../components/SeoContainer'
import socials from '../.generated/meta/socialsTs'
import SkillSet from '../components/SkillSet'
import DevProcess from '../components/DevProcess'
import Contact from '../components/Contact'

export default function Expertise() {
  return (
    <SeoContainer
      title="Daw-Chih's expertise"
      description='"Ship. Learn. Share. Repeat." is at the core of my human-centered approach to help you scale fast and give you a 360 overview over your entire product cycle.'
      url={`${socials.home}/work`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <main className={styles.main}>
        <h1>Build to win</h1>
        <h2>How I can help you stand out</h2>
        <DevProcess />
        <SkillSet />
        <Contact heading="Let's build something together" />
      </main>
    </SeoContainer>
  )
}
