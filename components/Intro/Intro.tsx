import React from 'react'
import styles from './Intro.module.css'
import { GrTwitter, GrLinkedin, GrGithub, GrMedium } from 'react-icons/gr'
import socials from '../../utils/socials'

export default function Intro() {
  return (
    <div className={styles.wrap} title="about me">
      <img src="portrait.png" alt="Portait" className={styles.portrait} />

      <p>
        Hi there
        <span role="img" aria-label="waving emoji">
          👋
        </span>
        <br />
        My name is Daw-Chih and I'm a software engineer, UX advocate, and mentor
        who is dedicated to Web engineering. My background in Human Centered
        Computing has led me to work with startups and public companies across
        North America, Asia, and Europe. I'm passionate about meeting business
        trajectory with user journey and utilizing engineering architecture and
        performance monitoring to provide optimal user experience.
      </p>

      <div className={styles.socials}>
        <a href={socials.linkedin} target="_blank" rel="noreferrer">
          <GrLinkedin size="1.25rem" />
        </a>
        <a href={socials.github} target="_blank" rel="noreferrer">
          <GrGithub size="1.25rem" />
        </a>
        <a href={socials.medium} target="_blank" rel="noreferrer">
          <GrMedium size="1.25rem" />
        </a>
        <a href={socials.twitter} target="_blank" rel="noreferrer">
          <GrTwitter size="1.25rem" />
        </a>
      </div>
    </div>
  )
}
