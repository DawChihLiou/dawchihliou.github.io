import React, { DetailedHTMLProps, AnchorHTMLAttributes, Ref } from 'react'
import NextLink from 'next/link'
import styles from './styles.module.css'

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  // TODO: remove the override of outdated ClassAttributes in @types/react
  ref?: Ref<HTMLAnchorElement>
}

export default function Link({
  href,
  className,
  children,
  ...rest
}: LinkProps) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        className={`${styles.anchor} ${className}`}
        {...rest}
      >
        {children}
      </NextLink>
    )
  }

  return (
    <a
      className={`${styles.anchor} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
    </a>
  )
}
