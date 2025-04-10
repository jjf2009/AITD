import { Cloud, Droplets, Wind, Sun, CloudRain } from "lucide-react"

const ForecastDay = ({ day, icon, high, low }) => {
  return (
    <div className="text-center">
      <p className="mb-1">{day}</p>
      <div className="flex justify-center mb-1">{icon}</div>
      <p className="text-sm">
        {high}° / {low}°
      </p>
    </div>
  )
}

const FarmWeather = () => {
  return (
    <div className="bg-white rounded-lg cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 border-b flex items-center">
        <Cloud className="text-blue-500 mr-2" />
        <h2 className="font-bold text-lg">Farm Weather</h2>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-5xl font-bold">72°F</div>
            <div className="text-gray-600">Your Farm</div>
          </div>
          <div>
            <Sun className="text-yellow-500 h-12 w-12" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-3 flex items-center">
            <Droplets className="text-blue-500 mr-2" />
            <div>
              <div className="text-sm text-gray-600">Humidity</div>
              <div className="font-bold">45%</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 flex items-center">
            <Wind className="text-blue-500 mr-2" />
            <div>
              <div className="text-sm text-gray-600">Wind</div>
              <div className="font-bold">8 mph</div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">3-Day Forecast</p>
          <div className="grid grid-cols-3 gap-2">
            <ForecastDay day="Today" icon={<Sun className="text-yellow-500 h-6 w-6" />} high="72" low="58" />
            <ForecastDay day="Tomorrow" icon={<Cloud className="text-gray-500 h-6 w-6" />} high="68" low="55" />
            <ForecastDay day="Wed" icon={<CloudRain className="text-blue-500 h-6 w-6" />} high="65" low="52" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmWeather
