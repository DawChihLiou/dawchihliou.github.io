import React from 'react'
import socials from '../.generated/meta/socialsTs'
import SeoContainer from '../components/SeoContainer'
import ContactSection from '../components/Contact'
import styles from '../styles/Contact.module.css'
import Section from '../components/Section'

export default function Contact() {
  return (
    <SeoContainer
      title="Daw-Chih's contact"
      description="If you are looking for help to build something to make an impact and you care about sustainability and inclusivity, Let's talk."
      url={`${socials.home}/contact`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <main className={styles.main}>
        <h1>Get in Touch</h1>
        <h2>Let's build something together</h2>
        <ContactSection />
        <Section heading="Transparency">
          <p>
            From 2022 on, I'm donating a portion of your payment to NGOs and
            open source software. The distribution is approximately:
          </p>
          <ul>
            <li>4% - NGOs in poverty</li>
            <li>4% - NGOs in sustainability</li>
            <li>2% - Open Source Software Sponsorship</li>
          </ul>
          <p>
            I believe in giving back. I was very lucky that my parents bought me
            a desktop so I could go to college to study science and engineering.
            I believe now it's my time to contribute for the next generation.
          </p>
        </Section>
      </main>
    </SeoContainer>
  )
}
