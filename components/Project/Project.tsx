import React, { useMemo } from 'react'
import styles from './Project.module.css'
import socials from '../../.generated/meta/socialsTs'
import repos from '../../.generated/github/githubReposTs'
import Repo from '../Repo'
import Link from '../Link'

export default function Project() {
  const filteredRepos = useMemo(
    () =>
      repos
        .filter((repo) => repo.name !== 'dawchihliou.github.io')
        .filter((_, i) => i < 6),
    []
  )

  return (
    <section className={styles.wrap}>
      <div className={styles.description}>
        <h1>Some of my Open Source projects</h1>
        <p>
          I've been working on open source and non-profit projects! It brings me
          so much joy contributing back to the community.
        </p>
        <p>
          I enjoy building tooling around testing, documentation, and CI/CD to
          improve developer experience. On top of solid coding and automation,
          nothing makes me happier than creating a meaningful product with
          thoughtful user experience and great performance.
        </p>
        <p>
          Besides that, I've spent over {new Date().getFullYear() - 2013} years
          working on Web engineering in startups, public tech companies, and
          Fortune 500 enterprises. I've built features, architectures, and
          infrastructure for client facing products and enterprise software.
        </p>
      </div>
      <div className={styles.list}>
        {filteredRepos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </div>
      <Link href={socials.github} className={styles.link}>
        See more on GitHub
      </Link>
    </section>
  )
}
