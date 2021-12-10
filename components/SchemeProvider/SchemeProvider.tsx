import React, { createContext, useEffect, useState } from 'react'

export type ColorScheme = 'auto' | 'light' | 'dark'

type SchemeContextType = {
  scheme: ColorScheme
  setScheme: (preference: ColorScheme) => () => void
}

export const SchemeContext = createContext<SchemeContextType>(null)

const SchemeProvider: React.FC = ({ children }) => {
  /**
   * Register event handler. Update body's class name based on media query
   * only when local storage is empty (user select "darkmode: auto").
   */
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = () => {
      const body = document.querySelector('body')
      const schemeInStorage = window.localStorage.getItem('__color-scheme__')
      const prefersDarkmode = media.matches

      if (schemeInStorage === null) {
        if (prefersDarkmode) {
          body.classList.add('dark')
        } else {
          body.classList.remove('dark')
        }
      }
    }

    if (media.addEventListener === undefined) {
      media.addListener(handler)
    } else {
      media.addEventListener('change', handler)
    }

    return () => {
      if (media.removeEventListener === undefined) {
        media.removeListener(handler)
      } else {
        media.removeEventListener('change', handler)
      }
    }
  }, [])

  /**
   * Control local storage and body's class name based on "scheme" state.
   */
  const [scheme, setSchemeState] = useState<ColorScheme>(null)
  const setScheme = (preference: ColorScheme) => () => {
    setSchemeState(preference)
  }

  useEffect(() => {
    if (scheme === null) {
      const schemeInStorage = window.localStorage.getItem(
        '__color-scheme__'
      ) as ColorScheme

      if (schemeInStorage === null) {
        setSchemeState('auto')
      } else {
        setSchemeState(schemeInStorage)
      }
    } else if (scheme === 'auto') {
      window.localStorage.removeItem('__color-scheme__')
    } else {
      window.localStorage.setItem('__color-scheme__', scheme)
    }

    const body = document.querySelector('body')

    if (scheme === 'auto') {
      const media = window.matchMedia('(prefers-color-scheme: dark)')

      if (media.matches) {
        body.classList.add('dark')
      } else {
        body.classList.remove('dark')
      }
    } else if (scheme === 'light') {
      body.classList.remove('dark')
    } else {
      body.classList.add('dark')
    }
  }, [scheme])

  return (
    <SchemeContext.Provider value={{ scheme, setScheme }}>
      {children}
    </SchemeContext.Provider>
  )
}

export default SchemeProvider
