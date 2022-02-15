import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

type SectionProps = PropsWithChildren<{
  fluid?: boolean
  heading?: string
}>

export default function Section({ fluid, heading, children }: SectionProps) {
  return (
    <section className={clsx(styles.section, { [styles.fluid]: fluid })}>
      {heading && <h3>{heading}</h3>}
      {children}
    </section>
  )
}
