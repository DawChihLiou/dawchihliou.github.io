import React from 'react'
import styles from './Intro.module.css'
import { GrTwitter, GrLinkedin, GrGithub, GrMedium } from 'react-icons/gr'
import { SiHackernoon } from 'react-icons/si'
import socials from '../../.generated/meta/socialsTs'
import Link from '../Link'

export default function Intro() {
  return (
    <section className={styles.wrap}>
      <img
        src="optimized/raw/portrait.webp"
        alt="Daw-Chih's portrait"
        className={styles.portrait}
        loading="lazy"
        width="8rem"
        height="8rem"
      />
      <div className={styles.greeting}>
        <h1>Daw-Chih Liou</h1>
        <p>
          Hi there
          <span role="img" aria-label="waving emoji">
            👋
          </span>{' '}
          My name is Daw-Chih and I'm a software engineer, UX advocate, and
          creator who is dedicated to Web engineering. My background in Human
          Centered Computing has led me to work with startups and public
          companies across North America, Asia, and Europe. I'm passionate about
          meeting business trajectory with user journey and utilizing
          engineering architecture and performance monitoring to provide optimal
          user experience.
        </p>
        <div className={styles.socials}>
          <Link
            href={socials.linkedin}
            aria-label="Link to Daw-Chih's Linkedin profile"
          >
            <GrLinkedin size="1.5em" />
            <span hidden>Link to Daw-Chih's Linkedin profile</span>
          </Link>
          <Link
            href={socials.github}
            aria-label="Link to Daw-Chih's GitHub profile"
          >
            <GrGithub size="1.5em" />
            <span hidden>Link to Daw-Chih's GitHub profile</span>
          </Link>
          <Link
            href={socials.medium}
            aria-label="Link to Daw-Chih's Medium profile"
          >
            <GrMedium size="1.5em" />
            <span hidden>Link to Daw-Chih's Medium profile</span>
          </Link>
          <Link
            href={socials.hackernoon}
            aria-label="Link to Daw-Chih's Hackernoon profile"
          >
            <SiHackernoon size="1.5em" />
            <span hidden>Link to Daw-Chih's Hacker Noon profile</span>
          </Link>
          <Link
            href={socials.twitter}
            aria-label="Link to Daw-Chih's Twitter profile"
          >
            <GrTwitter size="1.5em" />
            <span hidden>Link to Daw-Chih's Twitter</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
