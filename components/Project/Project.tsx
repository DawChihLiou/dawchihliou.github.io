import React from 'react'
import content from './content'
import styles from './Project.module.css'
import socials from '../../utils/socials'

export default function Project() {
  return (
    <div
      className={styles.wrap}
      title="my open source and none-profit projects"
    >
      <div className={styles.description}>
        <h1>Some of my Open Source Projects</h1>
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
          nothing makes me happier than creating a thoughtful product with great
          user experience and performance.
        </p>
      </div>
      <div className={styles.list}>
        {content.map((project) => (
          <div key={project.title} className={styles.item}>
            <div className={styles.itemImage}>
              <img src={project.image} alt={project.description} />
            </div>
            <div className={styles.itemDescription}>
              <h2>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href={socials.github}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        See more on GitHub
      </a>
    </div>
  )
}
