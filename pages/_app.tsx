import React from 'react'
import 'normalize.css'
import '../styles/menu.css'
import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { MDXProvider } from '@mdx-js/react'
import 'prism-themes/themes/prism-material-oceanic.css'

const components = {
  wrapper: (props: any) => (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '4rem 1rem 3rem',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        {props.children}
      </div>
    </div>
  ),
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#007cf0" />
        <meta name="msapplication-TileColor" content="#007cf0" />
        <meta name="theme-color" content="#ffff" />
      </Head>

      <div id="outer-container">
        <Nav />
        <div id="page-wrap">
          <MDXProvider components={components as any}>
            <Component {...pageProps} />
          </MDXProvider>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MyApp
