import React from 'react'
import styles from '../styles/Work.module.css'
import SeoContainer from '../components/SeoContainer'
import socials from '../.generated/meta/socialsTs'
import repos from '../.generated/github/githubReposTs'
import Repo from '../components/Repo'
import Link from '../components/Link'

export default function Work() {
  return (
    <SeoContainer
      title="Daw-Chih's work"
      description="Daw-Chih enjoys building meaningful products and open source software that has an impact in the world."
      url={`${socials.home}/work`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>I Build Meaningful Products and Open Source Software</h1>
          <h2>A pinch of awesomeness</h2>
          <p>
            I enjoy building tooling around testing, documentation, and CI/CD to
            improve developer experience. On top of solid coding and automation,
            nothing makes me happier than creating a meaningful product with
            thoughtful user experience and great performance.
          </p>
          <p>
            I've spent over {new Date().getFullYear() - 2013} years working on
            web engineering in startups, public tech companies, and Fortune 500
            enterprises. I've built features, architectures, and infrastructure
            for customer-facing products and enterprise software.
          </p>
          <div className={styles.project}>
            <div className={styles.projectDescription}>
              <h3>
                <Link
                  href="https://www.spes.me"
                  className={styles.link}
                  aria-label="Go to https://spes.me"
                >
                  Spes
                </Link>
              </h3>
              <p>
                Reading turned my life around, and I believe it can turn yours
                too. There're so many books full of wisdom but it's hard to find
                yourself a book among the overwhelming options. So I'm giving
                away a book every month to a subscriber and help you find your
                next book to read. Sign up! Hopefully you'll be inspired too:)
              </p>
              <Link
                href="https://www.spes.me"
                className={styles.cfa}
                aria-label="Go to https://spes.me"
              >
                Visit Spes
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <img src="/optimized/raw/spes.webp" alt="Spes" loading="lazy" />
                <div className={styles.imageShadow}></div>
              </div>
            </div>
          </div>
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
        </main>
      </div>
    </SeoContainer>
  )
}
