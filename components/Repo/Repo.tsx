import React from 'react'
import styles from './Repo.module.css'
import Link from '../Link'
import { GoMarkGithub, GoStar, GoRepoForked } from 'react-icons/go'
import { FiFolder, FiExternalLink } from 'react-icons/fi'
import { RiNpmjsFill } from 'react-icons/ri'
import LanguageColorDot from '../LanguageColorDot'

function isNpm(url: string) {
  return url.includes('npmjs.com')
}

type RepoProps = {
  repo: {
    id: number
    name: string
    description: string
    htmlUrl: string
    homepage: string | null
    language: string
    forksCount: number
    stargazersCount: number
    topics: string[]
  }
}

export default function Repo({ repo }: RepoProps) {
  return (
    <article className={styles.repo}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <FiFolder />
        </div>
        <div className={styles.headerRight}>
          <Link href={repo.htmlUrl} className={styles.link}>
            <GoMarkGithub />
          </Link>
          {repo.homepage && (
            <Link href={repo.homepage} className={styles.link}>
              {isNpm(repo.homepage) ? <RiNpmjsFill /> : <FiExternalLink />}
            </Link>
          )}
        </div>
      </div>
      <div className={styles.body}>
        <Link href={repo.htmlUrl} className={styles.link}>
          <h3>{repo.name}</h3>
        </Link>
        <p>{repo.description}</p>
      </div>
      <div className={styles.footer}>
        {repo.language && (
          <div className={styles.label}>
            <LanguageColorDot language={repo.language} />
            <span>{repo.language}</span>
          </div>
        )}
        {repo.stargazersCount > 0 && (
          <Link href={repo.htmlUrl} className={styles.labelLink}>
            <div className={styles.label}>
              <GoStar />
              <span>{repo.stargazersCount}</span>
            </div>
          </Link>
        )}
        {repo.forksCount > 0 && (
          <Link href={repo.htmlUrl} className={styles.labelLink}>
            <div className={styles.label}>
              <GoRepoForked />
              <span>{repo.forksCount}</span>
            </div>
          </Link>
        )}
      </div>
    </article>
  )
}
