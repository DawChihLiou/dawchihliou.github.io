import React from 'react'
import Section from '../Section'
import styles from './styles.module.css'
import Link from '../Link'

export default function Expertise() {
  return (
    <Section heading="Let's work together">
      <div className={styles.description}>
        <p>
          My background in Human Centered Computing has led me to work with
          startups and public companies across North America, Asia, and Europe.
          I'm passionate about meeting business trajectory with user journey and
          utilizing engineering architecture and performance monitoring to
          provide optimal user experience.
        </p>
      </div>
      <Link href="/work">See more about my approach</Link>
    </Section>
  )
}
