import React from 'react'
import 'normalize.css'
import '../styles/menu.css'
import '../styles/globals.css'
import '../styles/prism-vsc-dark-plus.css'
import '../styles/prism-vs.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import socials from '../utils/socials'
import Menubar from '../components/Menubar'
import SchemeProvider from '../components/SchemeProvider'

function MyApp({ Component, pageProps }) {
  return (
    <SchemeProvider>
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
        <title>Daw-Chih liou</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#007cf0" />
        <meta name="theme-color" content="#ffff" />
        <meta
          name="description"
          content={`Daw-Chih Liou's portfolio. ${socials.description}`}
        />
      </Head>

      <div id="outer-container">
        <Nav />
        <Menubar />
        <div id="page-wrap">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </SchemeProvider>
  )
}

export default MyApp
