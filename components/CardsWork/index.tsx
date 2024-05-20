import React, { useRef, useEffect } from 'react'
import styles from './CardsWork.module.css'
import { IProjects, projects } from '../../data/projects'

const WorkCards: React.FC = () => {
  const Projects = projects.filter((project: IProjects) => project.active)
  const iconContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (iconContainerRef.current) {
        iconContainerRef.current.scrollBy({
          top: event.deltaY * 0.5, // Ajuste a velocidade do scroll aqui
          behavior: 'smooth',
        })
      }
    }

    if (iconContainerRef.current) {
      iconContainerRef.current.addEventListener('wheel', handleScroll)
    }

    return () => {
      if (iconContainerRef.current) {
        iconContainerRef.current.removeEventListener('wheel', handleScroll)
      }
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer} ref={iconContainerRef}>
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
