import { Droplets, Wind, Thermometer, Sun, Clock, Umbrella } from "lucide-react"

export default function GridSection({ selectedCardIndex = 0 }) {
  // Weather details data for each card
  const allWeatherDetails = [
    // Monday (Apr 10)
    [
      { title: "Humidity", value: "45%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "12 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "30°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "High", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:15 AM / 7:45 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "0%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Tuesday (Apr 11)
    [
      { title: "Humidity", value: "50%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "15 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "28°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Moderate", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:14 AM / 7:46 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "10%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Wednesday (Apr 12)
    [
      { title: "Humidity", value: "60%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "18 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "25°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Low", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:13 AM / 7:47 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "20%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Thursday (Apr 13)
    [
      { title: "Humidity", value: "75%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "22 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "20°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Low", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:12 AM / 7:48 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "80%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Friday (Apr 14)
    [
      { title: "Humidity", value: "55%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "14 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "26°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Moderate", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:11 AM / 7:49 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "15%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Saturday (Apr 15)
    [
      { title: "Humidity", value: "40%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "10 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "29°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "High", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:10 AM / 7:50 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "0%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Sunday (Apr 16)
    [
      { title: "Humidity", value: "35%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "8 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "31°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Very High", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:09 AM / 7:51 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "0%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Monday (Apr 17)
    [
      { title: "Humidity", value: "65%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "16 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "22°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Low", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:08 AM / 7:52 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "40%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Tuesday (Apr 18)
    [
      { title: "Humidity", value: "80%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "25 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "18°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Low", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:07 AM / 7:53 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "90%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Wednesday (Apr 19)
    [
      { title: "Humidity", value: "85%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "30 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "16°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Very Low", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:06 AM / 7:54 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "95%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Thursday (Apr 20)
    [
      { title: "Humidity", value: "70%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "20 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "17°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Low", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:05 AM / 7:55 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "30%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
    // Friday (Apr 21)
    [
      { title: "Humidity", value: "75%", icon: <Droplets className="h-8 w-8 text-blue-500" /> },
      { title: "Wind Speed", value: "18 km/h", icon: <Wind className="h-8 w-8 text-blue-400" /> },
      { title: "Feels Like", value: "19°C", icon: <Thermometer className="h-8 w-8 text-red-500" /> },
      { title: "UV Index", value: "Low", icon: <Sun className="h-8 w-8 text-yellow-500" /> },
      { title: "Sunrise/Sunset", value: "6:04 AM / 7:56 PM", icon: <Clock className="h-8 w-8 text-orange-400" /> },
      { title: "Precipitation", value: "60%", icon: <Umbrella className="h-8 w-8 text-purple-500" /> },
    ],
  ]

  // Get the weather details for the selected card
  const weatherDetails = allWeatherDetails[selectedCardIndex] || allWeatherDetails[0]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {weatherDetails.map((detail, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4 border border-gray-100">
          <div className="bg-white p-3 rounded-full shadow-sm">{detail.icon}</div>
          <div>
            <h3 className="font-medium text-gray-700">{detail.title}</h3>
            <p className="text-xl font-bold">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
