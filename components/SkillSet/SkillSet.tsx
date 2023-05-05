import React from 'react'
import Section from '../Section'
import BarChart from '../BarChart'
import styles from './styles.module.css'

export default function SkillSet() {
  return (
    <Section heading="My Expertise">
      <div className={styles.grid}>
        <article>
          <h4>Frontend</h4>
          <BarChart
            title="React"
            score={100}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
          <BarChart
            title="Performance"
            score={100}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
          <BarChart
            title="SEO"
            score={80}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
          <BarChart
            title="Jamstack"
            score={80}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
          <BarChart
            title="Accessibility"
            score={60}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
        </article>
        <article>
          <h4>Backend</h4>
          <BarChart
            title="GraphQL"
            score={80}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
          <BarChart
            title="Microservice"
            score={80}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
          <BarChart
            title="PostgreSQL"
            score={60}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
          <BarChart
            title="OAuth"
            score={60}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
          <BarChart
            title="gRPC"
            score={20}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
        </article>
        <article>
          <h4>Site Reliability</h4>
          <BarChart
            title="CI/CD"
            score={80}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
          <BarChart
            title="CDN"
            score={80}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
          <BarChart
            title="Serverless"
            score={60}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
          <BarChart
            title="Google Cloud"
            score={60}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
          <BarChart
            title="Docker"
            score={60}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
        </article>
        <article>
          <h4>Programming Language</h4>
          <BarChart
            title="TypeScript"
            score={100}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
          <BarChart
            title="HTML"
            score={100}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
          <BarChart
            title="CSS"
            score={80}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
          <BarChart
            title="Rust"
            score={60}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
          <BarChart
            title="Wasm"
            score={60}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
        </article>
      </div>
    </Section>
  )
}
