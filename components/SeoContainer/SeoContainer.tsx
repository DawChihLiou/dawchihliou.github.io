import React, { PropsWithChildren } from 'react'
import Head from 'next/head'

type SeoContainerProps = PropsWithChildren<{
  title: string
  description: string
  url: string
  image: string
  imageWidth: string
  imageHeight: string
}>

export default function SeoContainer({
  children,
  title,
  description,
  url,
  image,
  imageWidth,
  imageHeight,
}: SeoContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/*  Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
        <meta property="og:image:alt" content={description} />
      </Head>
      {children}
    </>
  )
}
