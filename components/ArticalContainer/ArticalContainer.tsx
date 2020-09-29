import React from 'react'
import styles from './ArticalContainer.module.css'

export default function ArticalContainer({ children }) {
  return <div className={styles.wrap}>{children}</div>
}
