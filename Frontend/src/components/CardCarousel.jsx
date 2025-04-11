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

  // Helper to pick icon based on weather condition
  const getWeatherIcon = (main) => {
    const weather = main.toLowerCase()
    if (weather.includes("cloud")) return <Cloud className="h-10 w-10 text-gray-400" />
    if (weather.includes("rain")) return <CloudRain className="h-10 w-10 text-blue-400" />
    if (weather.includes("drizzle")) return <CloudDrizzle className="h-10 w-10 text-blue-300" />
    if (weather.includes("clear")) return <Sun className="h-10 w-10 text-yellow-500" />
    if (weather.includes("fog") || weather.includes("mist")) return <CloudFog className="h-10 w-10 text-gray-300" />
    if (weather.includes("thunderstorm")) return <CloudLightning className="h-10 w-10 text-purple-400" />
    if (weather.includes("snow")) return <CloudSnow className="h-10 w-10 text-green-200" />
    return <Cloud className="h-10 w-10 text-gray-400" />
  }

  const currentDayCard = current && current.main
    ? {
        day: new Date(current.dt * 1000).toLocaleDateString("en-US", { weekday: "short" }),
        date: new Date(current.dt * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        temp: `${Math.round(current.main.temp)}°C`,
        icon: getWeatherIcon(current.weather[0].main),
      }
    : {
        day: "Now",
        date: "",
        temp: "--°C",
        icon: <Cloud className="h-10 w-10 text-gray-400" />,
      }
      const uniqueDays = new Map()

      const forecastCards = (foreCastList || []).reduce((acc, item) => {
        if (!item || !item.main || !item.weather || item.weather.length === 0) return acc
      
        const date = new Date(item.dt * 1000)
        const dayKey = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
      
        if (!uniqueDays.has(dayKey)) {
          uniqueDays.set(dayKey, true)
          acc.push({
            day: date.toLocaleDateString("en-US", { weekday: "short" }),
            date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
            temp: `${Math.round(item.main.temp)}°C`,
            icon: getWeatherIcon(item.weather[0].main),
          })
        }
      
        return acc
      }, [])
      
      

  const weatherCards = [currentDayCard, ...forecastCards]

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(() => setScrollPosition(container.scrollLeft), 300)
    }
  }

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft)
  }

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md ${
          scrollPosition <= 10 ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
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
