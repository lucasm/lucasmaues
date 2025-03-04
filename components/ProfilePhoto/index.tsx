import { useState } from 'react'
import styles from './ProfilePhoto.module.css'

const ProfilePhoto = () => {
  const [isHovered, setIsHovered] = useState(false)

  const SvgBackground1 = () => (
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          alt="Profile picture of Lucas Menezes"
          src="https://avatars.githubusercontent.com/lucasm"
        />

        <SvgBackground1 />
      </figure>
    </div>
  )
}

export default ProfilePhoto
