import styles from './CardsWork.module.css'
import { IProjects, projects } from '../../data/projects'

const WorkCards: React.FC = () => {
  const Projects = projects.filter((project: IProjects) => project.active)

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        {Projects.filter((project) => project.active).map((item, index) => (
          <div key={index} className={styles.icon}>
            {item.icon}
          </div>
        ))}
      </div>
      <div className={styles.textContainer}></div>
    </div>
  )
}

export default WorkCards
