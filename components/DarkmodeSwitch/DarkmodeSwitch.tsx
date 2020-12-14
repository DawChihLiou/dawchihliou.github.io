import React, { useEffect, useState, useCallback } from 'react'
import { FiMoon, FiSun, FiToggleLeft } from 'react-icons/fi'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './DarkmodeSwitch.module.css'

type ColorScheme = 'auto' | 'light' | 'dark' | null

const DarkmodeSwitch: React.FC = () => {
  const [scheme, setScheme] = useState<ColorScheme>(null)

  const setColorScheme = useCallback(
    (preference: ColorScheme) => () => {
      setScheme(preference)
    },
    []
  )

  /**
   * Control local storage and body's class name based on "scheme" state.
   */
  useEffect(() => {
    if (scheme === null) {
      const schemeInStorage = window.localStorage.getItem(
        '__color-scheme__'
      ) as ColorScheme

      if (schemeInStorage === null) {
        setScheme('auto')
      } else {
        setScheme(schemeInStorage)
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

  /**
   * Register event hander. Update body's class name based on media query
   * only when local storage is empty (user select "darkmode: auto").
   */
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = () => {
      const body = document.querySelector('body')
      const schemeInStorage = window.localStorage.getItem('__color-scheme__')
      const prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)')
        .matches

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

  return (
    <div className={styles.wrap}>
      <TransitionGroup component={null}>
        {scheme === 'auto' && (
          <CSSTransition
            timeout={250}
            classNames={{
              enter: styles['button-enter'],
              enterActive: styles['button-enter-active'],
              exit: styles['button-exit'],
              exitActive: styles['button-exit-active'],
            }}
          >
            <FiToggleLeft
              onClick={setColorScheme('light')}
              className={styles.button}
            />
          </CSSTransition>
        )}
        {scheme === 'light' && (
          <CSSTransition
            timeout={250}
            classNames={{
              enter: styles['button-enter'],
              enterActive: styles['button-enter-active'],
              exit: styles['button-exit'],
              exitActive: styles['button-exit-active'],
            }}
          >
            <FiSun onClick={setColorScheme('dark')} className={styles.button} />
          </CSSTransition>
        )}
        {scheme === 'dark' && (
          <CSSTransition
            timeout={250}
            classNames={{
              enter: styles['button-enter'],
              enterActive: styles['button-enter-active'],
              exit: styles['button-exit'],
              exitActive: styles['button-exit-active'],
            }}
          >
            <FiMoon
              onClick={setColorScheme('auto')}
              className={styles.button}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default DarkmodeSwitch
