import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ring = useRef(null)
  const dot  = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left  = `${e.clientX}px`
        dot.current.style.top   = `${e.clientY}px`
      }
      if (ring.current) {
        ring.current.style.left = `${e.clientX}px`
        ring.current.style.top  = `${e.clientY}px`
      }
    }

    const grow = () => {
      if (ring.current) {
        ring.current.style.width  = '56px'
        ring.current.style.height = '56px'
        ring.current.style.opacity = '0.5'
      }
    }
    const shrink = () => {
      if (ring.current) {
        ring.current.style.width  = '36px'
        ring.current.style.height = '36px'
        ring.current.style.opacity = '1'
      }
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('button, a, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot}  className="cursor-dot"  />
    </>
  )
}
