"use client"
import { useEffect, useRef } from "react"

export default function ScrollingText({ text }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollElement = scrollRef.current

    if (scrollElement) {
      // Clone the text to create a seamless loop
      scrollElement.innerHTML = text + " &nbsp;&nbsp;&nbsp;&nbsp; " + text

      const scrollAnimation = () => {
        if (scrollElement.scrollLeft >= scrollElement.firstChild.offsetWidth) {
          scrollElement.scrollLeft = 0
        } else {
          scrollElement.scrollLeft += 1
        }
      }

      const animationInterval = setInterval(scrollAnimation, 30)

      return () => clearInterval(animationInterval)
    }
  }, [text])

  return (
    <div ref={scrollRef} className="whitespace-nowrap overflow-hidden" style={{ direction: "rtl" }}>
      {text}
    </div>
  )
}
