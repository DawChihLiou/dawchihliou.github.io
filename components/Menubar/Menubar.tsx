import React from 'react'
import styles from './Menubar.module.css'
import socials from '../../.generated/meta/socialsTs'
import { GrGithub } from 'react-icons/gr'
import DarkmodeSwitch from '../DarkmodeSwitch'

const Menubar: React.FC = () => {
  return (
    <div className={styles.menubar}>
      <DarkmodeSwitch />
      <a href={socials.github} target="_blank" rel="noreferrer">
        <GrGithub size="1.5em" />
      </a>
    </div>
  )
}

export default Menubar
