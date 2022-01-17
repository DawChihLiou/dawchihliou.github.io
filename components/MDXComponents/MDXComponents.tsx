import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  )
}

function RoundedImage(props) {
  return <Image alt={props.alt} {...props} />
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
}

export default MDXComponents
