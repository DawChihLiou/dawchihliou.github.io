import React from 'react'
import 'normalize.css'
import '../styles/menu.css'
import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import 'prism-themes/themes/prism-material-oceanic.css'

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
          content="Daw-Chih Liou's portfolio. Daw-Chih is a software engineer, UX advocate, and mentor
        who is dedicated to Web engineering. His background in Human Centered
        Computing has led him to work with startups and public companies across
        North America, Asia, and Europe. He is passionate about meeting business
        trajectory with user journey and utilizing engineering architecture and
        performance monitoring to provide optimal user experience."
        ></meta>
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
