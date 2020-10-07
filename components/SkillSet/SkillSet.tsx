import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './SkillSet.module.css'
import content from './content.md'

export default function SkillSet() {
  return (
    <section className={styles.wrap}>
      <h1>My tech stack</h1>
      <ReactMarkdown source={content} />
    </section>
  )
}
