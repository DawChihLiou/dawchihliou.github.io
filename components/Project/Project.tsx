import React from 'react'
import content from './content'
import styles from './Project.module.css'
import socials from '../../utils/socials'

export default function Project() {
  return (
    <section
      className={styles.wrap}
      title="my open source and none-profit projects"
    >
      <article className={styles.description}>
        <h1>Some of my Open Source projects</h1>
        <p>
          I've spent over 8 years woking on Web engineering, mostly building
          features and taking care of architectures for client facing products
          and enterprise software for public tech companies and Fortune 500
          enterprises.
        </p>
        <p>
          I've been working on open source and non-profit projects too! It
          brings me so much joy contributing back to the community.
        </p>
        <p>
          I enjoy building tooling around testing, documentation, and CI/CD to
          improve developer experience. On top of solid coding and automation,
          nothing makes me happier than creating a meaningful product with
          thoughtful user experience and great performance.
        </p>
      </article>
      <article className={styles.list}>
        {content.map((project) => (
          <article key={project.title} className={styles.item}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className={styles.grid}>
                <div className={styles.itemImage}>
                  <picture>
                    <source
                      srcSet={project.darkmodeImage}
                      media="(prefers-color-scheme: dark)"
                    />
                    <source
                      srcSet={project.image}
                      media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className={styles.itemDescription}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          </article>
        ))}
      </article>
      <a
        href={socials.github}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        See more on GitHub
      </a>
    </section>
  )
}
