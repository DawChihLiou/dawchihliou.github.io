import React from 'react'
import languageColor from '../../.generated/meta/languageColorTs'
import styles from './styles.module.css'

type LanguageColorDotProps = {
  language?: string
}

export default function LanguageColorDot({ language }: LanguageColorDotProps) {
  return (
    <span
      className={styles.dot}
      style={{ background: languageColor[language] ?? 'initial' }}
    ></span>
  )
}
