'use client'

import styles from './CardsWorkFeatured.module.css'
import { IProjects, projects } from '../../data/projects'
import { ROUTES } from '../../routes/routes'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const CardsWorkFeatured = () => {
  const Projects = projects?.filter((project: IProjects) => project.active)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const breakpoints = [600, 900]
    let currentBreakpoint = breakpoints.findIndex(
      (bp) => window.innerWidth < bp
    )
    if (currentBreakpoint === -1) currentBreakpoint = breakpoints.length

    const handleResize = () => {
      const newBreakpoint = breakpoints.findIndex(
        (bp) => window.innerWidth < bp
      )
      const finalBreakpoint =
        newBreakpoint === -1 ? breakpoints.length : newBreakpoint

      if (finalBreakpoint !== currentBreakpoint) {
        currentBreakpoint = finalBreakpoint
        // Restart animations by toggling style
        if (containerRef.current) {
          const icons = containerRef.current.querySelectorAll('a')
          icons.forEach((icon) => {
            const svg = icon.querySelector('svg')
            icon.style.animation = 'none'
            if (svg) svg.style.animation = 'none'
            icon.offsetHeight // Force reflow
            icon.style.animation = ''
            if (svg) svg.style.animation = ''
          })
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer} ref={containerRef}>
        {Projects.filter((project) => project.active).map((item, index) => (
          <Link
            key={index}
            className={styles.icon}
            href={ROUTES.WORK.path}
            aria-label={'My work on ' + item?.name}>
            {item?.icon}
            {/* <span>{item?.name}</span> */}
          </Link>
        ))}
      </div>
      <div className={styles.textContainer}>teste</div>
    </div>
  )
}

export default CardsWorkFeatured
