import React, { useContext } from 'react'
import { FiMoon, FiSun, FiToggleLeft } from 'react-icons/fi'
import { SchemeContext } from '../SchemeProvider'
import styles from './DarkmodeSwitch.module.css'

type DarkmodeSwitchProps = {
  showLabel?: boolean
  tabIndex?: number
}

const DarkmodeSwitch: React.FC<DarkmodeSwitchProps> = ({
  showLabel,
  tabIndex = 0,
}) => {
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
      onKeyUp={keypress}
      tabIndex={tabIndex}
    >
      <div className={styles.wrap}>
        {scheme === 'auto' && <FiToggleLeft className={styles.button} />}
        {scheme === 'light' && <FiSun className={styles.button} />}
        {scheme === 'dark' && <FiMoon className={styles.button} />}
      </div>
      {showLabel && scheme === 'light' && <span>Light scheme</span>}
      {showLabel && scheme === 'dark' && <span>Dark scheme</span>}
      {showLabel && scheme === 'auto' && <span>Sync with OS scheme</span>}
    </div>
  )
}

export default DarkmodeSwitch
