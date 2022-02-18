import React from 'react'
import Section from '../Section'
import styles from './styles.module.css'
import Link from '../Link'

export default function DevProcess() {
  return (
    <Section heading="My Human-Centered Approach">
      <p>
        "Ship. Learn. Share. Repeat." is at the core of my human-centered
        approach to software development. With the principle, I'm able to help
        you scale fast and give you a 360 overview over your entire product
        cycle.
      </p>
      <p>
        I care deeply about the users of my work so I pay detailed attention to
        the simplicity and usability in my system design, code structure,
        release pipeline automation, and documentation. Because of my design
        background, my engineering iteration process aligns tightly with{' '}
        <Link href="https://mitsloan.mit.edu/ideas-made-to-matter/design-thinking-explained">
          Design Thinking
        </Link>
        .
      </p>

      <div className={styles.wrapper}>
        <article>
          <div className={styles.left}>
            <span className={styles.symbol}>
              <span role="img" aria-label="Ear">
                👂
              </span>
            </span>
          </div>
          <div className={styles.right}>
            <h4>Empathize</h4>
            <p>
              Observe and research to gather insights about the users and
              business goals.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.fitContent}>
            <span className={styles.symbol}>
              <span role="img" aria-label="Writing Hand">
                ✍️
              </span>
            </span>
          </div>
          <div className={styles.right}>
            <h4>Define</h4>
            <p>
              Summarize the research and pinpoint the users' needs and
              innovation opportunities.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.fitContent}>
            <span className={styles.symbol}>
              <span role="img" aria-label="Light Bulb">
                💡
              </span>
            </span>
          </div>
          <div className={styles.right}>
            <h4>Ideate</h4>
            <p>
              Brainstorm creative ideas to address users' needs and the business
              goals.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.fitContent}>
            <span className={styles.symbol}>
              <span role="img" aria-label="Sparkles">
                ✨
              </span>
            </span>
          </div>
          <div className={styles.right}>
            <h4>Prototype</h4>
            <p>
              Build lean solutions from a subset of the ideas to understand the
              feasibility and impact.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.fitContent}>
            <span className={styles.symbol}>
              <span role="img" aria-label="Scientist">
                🧑‍🔬
              </span>
            </span>
          </div>
          <div className={styles.right}>
            <h4>Test</h4>
            <p>
              Collect feedback from the users to make sure the solutions meet
              the users' needs.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.fitContent}>
            <span className={styles.symbol}>
              <span role="img" aria-label="Rocket">
                🚀
              </span>
            </span>
          </div>
          <div className={styles.right}>
            <h4>Implement</h4>
            <p>
              Deliver the live product incrementally based on the best suited
              solution prototype.
            </p>
          </div>
        </article>
      </div>
    </Section>
  )
}
