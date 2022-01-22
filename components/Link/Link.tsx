import React, { DetailedHTMLProps, AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'

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
        <a {...props}>{props.children}</a>
      </NextLink>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  )
}
