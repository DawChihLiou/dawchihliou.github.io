import React from 'react'
import Section from '../Section'
import styles from './styles.module.css'
import Link from '../Link'

export default function Expertise() {
  return (
    <Section heading="Let's work together">
      <div className={styles.description}>
        <p>
          From web fundamentals to modern technology, I'm passionate about team
          work and building meaningful products that encompass SEO,
          accessibility, website performance, and optimal user experience.
          They're the nuances for your digital business to stand out from the
          competitive space.
        </p>
      </div>
      <Link href="/expertise">See more about my approach</Link>
    </Section>
  )
}
