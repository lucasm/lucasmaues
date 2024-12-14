import styles from './CardsWork.module.css'
import { IProjects, projects } from '../../data/projects'
import { ROUTES } from '../../routes/routes'
import Link from 'next/link'

const WorkCards = () => {
  const Projects = projects?.filter((project: IProjects) => project.active)

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        {Projects.filter((project) => project.active).map((item, index) => (
          <Link key={index} className={styles.icon} href={ROUTES.WORK.path}>
            {item?.icon}
          </Link>
        ))}
      </div>
      <div className={styles.textContainer}>teste</div>
    </div>
  )
}

export default WorkCards
