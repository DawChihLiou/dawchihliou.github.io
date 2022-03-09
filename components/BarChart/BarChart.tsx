import React from 'react'
import styles from './styles.module.css'

type BarChartProps = {
  title: string
  score: number
  color: string
}
export default function BarChart({ title, score, color }: BarChartProps) {
  return (
    <div className={styles.grid}>
      <span className={styles.sm}>{title}</span>
      <span className={styles.lg}>
        <span
          className={styles.bar}
          style={{ width: `${score}%`, background: color }}
        />
      </span>
    </div>
  )
}
