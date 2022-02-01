import React, { useMemo } from 'react'
import styles from './Project.module.css'
import socials from '../../.generated/meta/socialsTs'
import repos from '../../.generated/github/githubReposTs'
import pinnedRepos from '../../.generated/meta/pinnedGitHubReposTs'
import Repo from '../Repo'
import Link from '../Link'

const regex = pinnedRepos.join('|')

export default function Project() {
  const filteredRepos = useMemo(
    () =>
      repos
        .filter((repo) => repo.name !== 'dawchihliou.github.io')
        .filter((repo) => repo.name.match(new RegExp(regex))),
    []
  )

  return (
    <section className={styles.wrap}>
      <div className={styles.description}>
        <h1>Some of my experiences & projects</h1>
        <p>
          I enjoy building tooling around testing, documentation, and CI/CD to
          improve developer experience. On top of solid coding and automation,
          nothing makes me happier than creating a meaningful product with
          thoughtful user experience and great performance.
        </p>
        <p>
          Besides that, I've spent over {new Date().getFullYear() - 2013} years
          working on web engineering in startups, public tech companies, and
          Fortune 500 enterprises. I've built features, architectures, and
          infrastructure for customer-facing products and enterprise software.
        </p>
      </div>
      <div className={styles.project}>
        <div className={styles.projectDescription}>
          <h2>
            <Link
              href="https://www.spes.me"
              className={styles.link}
              aria-label="Go to https://spes.me"
            >
              Spes
            </Link>
          </h2>
          <p>
            Reading turned my life around, and I believe it can turn yours too.
            There're so many books full of wisdom but it's hard to find yourself
            a book among the overwhelming options. So I'm giving away a book
            every month to a subscriber and help you find your next book to
            read. Sign up! Hopefully you'll be inspired too:)
          </p>
          <Link
            href="https://www.spes.me"
            className={styles.cfa}
            aria-label="Go to https://spes.me"
          >
            Learn more
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src="/optimized/raw/spes.webp" alt="Spes" />
            <div className={styles.imageShadow}></div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h1>My Open Source projects</h1>
        <p>
          I've been working on open source and non-profit projects! Making
          helpful libraries is my happy place. It brings me so much joy
          contributing back to the community.
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
