import styles from './ProfilePhoto.module.css'
import { SvgBackground1 } from '../Svgs'

const ProfilePhoto = () => {
  return (
    <div className={styles.container}>
      <figure id={styles.profile}>
        <img
          alt="Profile picture of Lucas Menezes"
          src="https://avatars.githubusercontent.com/lucasm"
        />
        <SvgBackground1 />
      </figure>
    </div>
  )
}

export default ProfilePhoto
