"use client"

import { useState, useRef } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Cloud,
  CloudRain,
  Sun,
  CloudSun,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudSnow,
} from "lucide-react"

export default function CardCarousel({ selectedIndex, onSelectCard, current, foreCastList }) {
  const scrollRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Expanded weather data for the cards (12 total)
  const weatherCards = [
    { day: new Date(current.dt * 1000).toDateString().slice(0,3) , date: new Date(current.dt * 1000).toDateString().slice(4,11), temp: current.main.temp, icon: <Sun className="h-10 w-10 text-yellow-500" /> },

    { day: "Tuesday", date: "Apr 11", temp: "26°C", icon: <CloudSun className="h-10 w-10 text-yellow-400" /> },
    { day: "Wednesday", date: "Apr 12", temp: "24°C", icon: <Cloud className="h-10 w-10 text-gray-400" /> },
    { day: "Thursday", date: "Apr 13", temp: "22°C", icon: <CloudRain className="h-10 w-10 text-green-400" /> },
    { day: "Friday", date: "Apr 14", temp: "25°C", icon: <CloudSun className="h-10 w-10 text-yellow-400" /> },
    { day: "Saturday", date: "Apr 15", temp: "27°C", icon: <Sun className="h-10 w-10 text-yellow-500" /> },
    { day: "Sunday", date: "Apr 16", temp: "29°C", icon: <Sun className="h-10 w-10 text-yellow-500" /> },
    { day: "Monday", date: "Apr 17", temp: "23°C", icon: <CloudDrizzle className="h-10 w-10 text-green-300" /> },
    { day: "Tuesday", date: "Apr 18", temp: "20°C", icon: <CloudRain className="h-10 w-10 text-green-400" /> },
    { day: "Wednesday", date: "Apr 19", temp: "18°C", icon: <CloudLightning className="h-10 w-10 text-purple-400" /> },
    { day: "Thursday", date: "Apr 20", temp: "19°C", icon: <CloudFog className="h-10 w-10 text-gray-400" /> },
    { day: "Friday", date: "Apr 21", temp: "21°C", icon: <CloudSnow className="h-10 w-10 text-green-200" /> },
  ]

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = 300
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }

      // Update scroll position after scrolling
      setTimeout(() => {
        setScrollPosition(container.scrollLeft)
      }, 300)
    }
  }

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft)
  }

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md ${scrollPosition <= 10 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
        onClick={() => scroll("left")}
        disabled={scrollPosition <= 10}
      >
        <ChevronLeft className="h-6 w-6 text-green-500" />
      </button>

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 py-4 px-10 w-full"
        onScroll={handleScroll}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {weatherCards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[200px] bg-white border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer transition-all duration-200 ${
              selectedIndex === index
                ? "border-green-500 ring-2 ring-green-300 transform scale-105"
                : "border-gray-200 hover:border-green-300"
            }`}
            onClick={() => onSelectCard(index)}
          >
            <p className="font-bold text-lg">{card.day}</p>
            <p className="text-sm text-gray-500">{card.date}</p>
            {card.icon}
            <p className="text-2xl font-bold mt-2">{card.temp}</p>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-6 w-6 text-green-500" />
      </button>
    </div>
  )
}
