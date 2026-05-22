'use client'

import { useEffect, useRef, useState } from 'react'
import Styles from './CircleMouse.module.css'

export default function CircleMouse() {
  const circle = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  useEffect(() => {
    setIsMobile(window.innerWidth <= 600)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const circleRef = circle.current

    const updateCirclePosition = () => {
      if (circleRef) {
        circleRef.style.transform = `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`
      }
      animationRef.current = requestAnimationFrame(updateCirclePosition)
    }

    if (!isMobile) {
      animationRef.current = requestAnimationFrame(updateCirclePosition)
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMobile, mousePosition])

  return !isMobile ? <div className={Styles.circle} ref={circle}></div> : null
}
