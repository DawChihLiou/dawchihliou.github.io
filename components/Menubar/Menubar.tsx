import React from 'react'
import styles from './Menubar.module.css'
import socials from '../../.generated/meta/socialsTs'
import { GrGithub } from 'react-icons/gr'
import DarkmodeSwitch from '../DarkmodeSwitch'
import Link from '../Link'

const Menubar: React.FC = () => {
  return (
    <div className={styles.menubar}>
      <DarkmodeSwitch />
      <Link
        href={socials.github}
        aria-label="See more Daw-Chih's work on GitHub"
      >
        <GrGithub size="1.5em" />
      </Link>
    </div>
  )
}

export default Menubar
