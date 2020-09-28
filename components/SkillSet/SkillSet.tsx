import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './SkillSet.module.css'
import content from './content.md'

export default function SkillSet() {
  return (
    <div className={styles.wrap}>
      <h1>Tech that I love</h1>
      <ReactMarkdown source={content} />
    </div>
  )
}
