import React from 'react'
import styles from '../styles/Projects.module.css'
import SeoContainer from '../components/SeoContainer'
import socials from '../.generated/meta/socialsTs'
import repos from '../.generated/github/githubReposTs'
import Repo from '../components/Repo'
import Link from '../components/Link'
import socialsTs from '../.generated/meta/socialsTs'

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
                <div className={styles.support}>
                  <div className={styles.tags}>
                    {repo.topics.map((topic) => (
                      <span key={`${repo.id}-${topic}`} className={styles.tag}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.focal}>
                  <Repo repo={repo} />
                </div>
              </section>
            ))}
          </div>
          <div className={styles.link}>
            <Link href={socialsTs.github}>See more on GitHub</Link>
          </div>
        </main>
      </div>
    </SeoContainer>
  )
}
