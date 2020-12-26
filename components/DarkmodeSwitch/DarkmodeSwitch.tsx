import React, { useContext } from 'react'
import { FiMoon, FiSun, FiToggleLeft } from 'react-icons/fi'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './DarkmodeSwitch.module.css'
import { SchemeContext } from '../SchemeProvider'

const DarkmodeSwitch: React.FC = () => {
  const { scheme, setScheme } = useContext(SchemeContext)

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
              onClick={setScheme('light')}
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
            <FiSun onClick={setScheme('dark')} className={styles.button} />
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
            <FiMoon onClick={setScheme('auto')} className={styles.button} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default DarkmodeSwitch
