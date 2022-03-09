import React from 'react'
import styles from './Project.module.css'
import repos from '../../.generated/github/githubReposTs'
import pinnedRepos from '../../.generated/meta/pinnedGitHubReposTs'
import Repo from '../Repo'
import Link from '../Link'
import Section from '../Section'
import socialsTs from '../../.generated/meta/socialsTs'

const regex = pinnedRepos.join('|')

const filteredRepos = repos
  .filter((repo) => repo.name !== 'dawchihliou.github.io')
  .filter((repo) => repo.name.match(new RegExp(regex)))

export default function Project() {
  return (
    <Section heading="Open Source">
      <p>
        It sparks joy
        <span role="img" aria-label="sparkles">
          {'✨ '}
        </span>
        I enjoy contributing to open source communities in React, Next.js,
        static analysis, and tooling. I'm also a creator and maintainer of a few{' '}
        <Link href={socialsTs.npm}>npm packages</Link>.
      </p>
      <div className={styles.list}>
        {filteredRepos.map((repo) => (
          <Repo key={repo.id} repo={repo} paper />
        ))}
      </div>
      <Link href="/work" className={styles.link}>
        See more of my work
      </Link>
    </Section>
  )
}
