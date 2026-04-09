'use client'

import { JSX, useState } from 'react'
import styles from './ProfilePhoto.module.css'

export default function ProfilePhoto(): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const SvgBackground = (): JSX.Element => (
    <svg
      width="500"
      height="544"
      viewBox="0 0 500 544"
      xmlns="http://www.w3.org/2000/svg"
      className={isHovered ? styles.animate : ''}>
      <path
        d="M341.442 0L0 87.1866L10.9903 403.104L370.826 544L500 381.441L341.442 0Z"
        className="svg-color-y"></path>
    </svg>
  )

  return (
    <div className={styles.container}>
      <figure id={styles.profile}>
        <img
          onMouseEnter={(): void => setIsHovered(true)}
          onMouseLeave={(): void => setIsHovered(false)}
          alt="Profile of Lucas Maués de Menezes"
          src="https://pbs.twimg.com/profile_images/2039485890373074944/7RPPRzlP_400x400.jpg"
        />

        <SvgBackground />
      </figure>
    </div>
  )
}
