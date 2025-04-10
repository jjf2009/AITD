"use client"
import { useState } from "react"
import ScrollingText from "../components/ScrollingText"
import CardCarousel from "../components/CardCarousel"
import GridSection from "../components/GridSection"
import Separator from "../components/Separator"
import TextSection from "../components/TextSection"

export default function Weather() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)

  const [current, setCurrent] = useState({})
  const [foreCastList, setforeCastList] = useState([])

  fetch('http://localhost:3000/api/weather')
  .then(res => res.json())
  .then(data => {
     //current = data.current;
    setCurrent(data.current)
    setforeCastList(data.forecast.list)
     //foreCastList = data.forcast.list;
  })


  return (
    <div className="min-h-screen bg-white w-full">
      {/* Top bar with scrolling text */}
      <div className="bg-green-500 text-white py-2 overflow-hidden w-full">
        <ScrollingText text="CRITICAL UPDATE" />
      </div>

      {/* Main content */}
      <div className="w-full px-4 py-8">
        {/* Horizontal scrolling cards */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-bold mb-4">Weekly Forecast</h2>
          <CardCarousel selectedIndex={selectedCardIndex} onSelectCard={setSelectedCardIndex} current={current} foreCastList={foreCastList} />
        </section>

        <Separator />

        {/* Grid section */}
        <section className="my-8 w-full">
          <h2 className="text-2xl font-bold mb-4">Weather Details</h2>
          <GridSection selectedCardIndex={selectedCardIndex} />
        </section>

        <Separator />

        {/* Bottom text section */}
        <section className="my-8 w-full">
          <TextSection
            heading="Weather Information"
            text="Our weather forecasts are based on advanced meteorological data collected from multiple sources including satellite imagery, weather stations, and predictive models. We strive to provide the most accurate and up-to-date information to help you plan your activities. Remember that weather conditions can change rapidly, so check back regularly for updates."
          />
        </section>
      </div>
    </div>
  )
}

