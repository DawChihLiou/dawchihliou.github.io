import React from 'react'
import 'normalize.css'
import '../styles/menu.css'
import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import 'prism-themes/themes/prism-material-oceanic.css'
import socials from '../utils/socials'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#ffffff"></link>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#007cf0" />
        <meta name="theme-color" content="#ffff" />
        <meta
          name="description"
          content={`Daw-Chih Liou's portfolio. ${socials.description}`}
        />
        {/*  Open Graph */}
        <meta property="og:title" content="Daw-Chih Liou's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={socials.home} />
        <meta property="og:description" content={socials.description} />
        <meta property="og:image" content={socials.heroImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1411" />
        <meta property="og:image:height" content="682" />
        <meta property="og:image:alt" content={socials.description} />
      </Head>

      <div id="outer-container">
        <Nav />
        <div id="page-wrap">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MyApp
