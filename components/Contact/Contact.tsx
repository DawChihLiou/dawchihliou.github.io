import React from 'react'
import Section from '../Section'
import styles from './styles.module.css'
import Link from '../Link'
import socialsTs from '../../.generated/meta/socialsTs'

type ContactProps = {
  heading?: string
}

export default function Contact({ heading }: ContactProps) {
  return (
    <Section heading={heading}>
      <p>
        If you are looking for help to build something to make an impact and you
        care about sustainability and inclusivity, Let's talk{' '}
        <span role="img" aria-label="Raising Hands">
          🙌
        </span>
      </p>
      <p>Send me an email at:</p>
      <p className={styles.email}>dawochih.liou@gmail.com</p>
      <p>
        I'm always learning and exploring. With my experience as a Principal
        Software Engineer and Tech Lead in startups and public tech companies
        across North America, Europe, and Asia, I'm able to help you materialize
        your innovative ideas with well-rounded tech insight, analysis, and
        monitoring.
      </p>
      <p>
        In general, my work is centered around consultation, innovation, and
        education:
      </p>
      <ul>
        <li>Web Tech Consultation</li>
        <li>SEO Audit</li>
        <li>Rapid Prototyping</li>
        <li>Public Speaking</li>
        <li>NGO/NPO Tech Education</li>
      </ul>

      <p>
        Just want to say hi? Ping me over on{' '}
        <Link href={socialsTs.twitter}>Twitter</Link>!
      </p>
    </Section>
  )
}
