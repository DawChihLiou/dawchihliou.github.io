import React from 'react'
import styles from '../styles/Projects.module.css'
import SeoContainer from '../components/SeoContainer'
import socials from '../.generated/meta/socialsTs'
import repos from '../.generated/github/githubReposTs'
import Repo from '../components/Repo'
import { format } from '../utils/date'

export default function Projects() {
  return (
    <SeoContainer
      title="Daw-Chih's projects"
      description=""
      url={`${socials.home}/projects`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.repos}>
            {repos.map((repo) => (
              <section className={styles.grid} key={repo.id}>
                <div className={styles.date}>
                  <p>{format(repo.createdAt)}</p>
                </div>
                <div className={styles.description}>
                  <Repo repo={repo} />
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </SeoContainer>
  )
}
