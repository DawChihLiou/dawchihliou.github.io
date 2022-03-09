import React from 'react'
import styles from './Intro.module.css'
import { GrTwitter, GrLinkedin, GrGithub, GrMedium } from 'react-icons/gr'
import { SiHackernoon } from 'react-icons/si'
import socials from '../../.generated/meta/socialsTs'
import Link from '../Link'
import Section from '../Section'

export default function Intro() {
  return (
    <Section>
      <div className={styles.wrap}>
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
          <h2>Principal Software Engineer</h2>
          <p>
            Helping developers and organizations around the world build an
            outstanding web. With human-centered design principle at the core,
            I'm here to help you and your team achieve more engineering
            confidence, architectural clarity, scaling velocity, future profit,
            and tons of joy building what you love.
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
      </div>
    </Section>
  )
}
