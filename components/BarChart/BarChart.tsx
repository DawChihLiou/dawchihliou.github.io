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
      <span className={styles.sm} data-testid="barchart-label">
        {title}
      </span>
      <span className={styles.lg}>
        <span
          className={styles.bar}
          style={{ width: `${score}%`, background: color }}
          role="math"
          aria-label={`${score}%`}
          data-testid="barchart-bar"
        />
      </span>
    </div>
  )
}
