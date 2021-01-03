import React, { useContext } from 'react'
import { FiMoon, FiSun, FiToggleLeft } from 'react-icons/fi'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './DarkmodeSwitch.module.css'
import { SchemeContext } from '../SchemeProvider'

type DarkmodeSwitchProps = {
  showLabel?: boolean
}

const DarkmodeSwitch: React.FC<DarkmodeSwitchProps> = ({ showLabel }) => {
  const { scheme, setScheme } = useContext(SchemeContext)
  const switchScheme = () => {
    let preference
    if (scheme === 'light') {
      preference = 'dark'
    } else if (scheme === 'dark') {
      preference = 'auto'
    } else {
      preference = 'light'
    }
    const updateScheme = setScheme(preference)
    updateScheme()
  }
  const keypress: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter') {
      switchScheme()
    }
  }

  return (
    <div
      className={styles.container}
      onClick={switchScheme}
      onKeyPress={keypress}
      tabIndex={0}
    >
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
              <FiToggleLeft className={styles.button} />
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
              <FiSun className={styles.button} />
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
              <FiMoon className={styles.button} />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      {showLabel && scheme === 'light' && <span>Light scheme</span>}
      {showLabel && scheme === 'dark' && <span>Dark scheme</span>}
      {showLabel && scheme === 'auto' && <span>Sync with OS scheme</span>}
    </div>
  )
}

export default DarkmodeSwitch
