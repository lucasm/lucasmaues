import { useEffect, useRef, useState } from 'react'

export default function CircleMouse() {
  const circle = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // circle
      const circle = document.getElementById('circle')

      let X = 0
      let Y = 0
      const onMouseMove = (e) => {
        X = e.clientX
        Y = e.clientY
      }

      setInterval(() => {
        circle.style.transform = `translateX(${X}px) translateY(${Y}px)`
      }, 50)

      document.addEventListener('mousemove', onMouseMove)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile ? null : <div id="circle" ref={circle}></div>
}
