import { useEffect, useRef } from 'react'

export default function CircleMouse() {
  const circle = useRef(null)

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

  return <div ref={circle} id="circle"></div>
}
