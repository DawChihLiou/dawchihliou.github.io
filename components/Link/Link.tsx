import React, { DetailedHTMLProps, AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'
import styles from './styles.module.css'

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export default function Link(props: LinkProps) {
  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a className={styles.anchor} {...props}>
          {props.children}
        </a>
      </NextLink>
    )
  }

  return (
    <a
      className={styles.anchor}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </a>
  )
}
