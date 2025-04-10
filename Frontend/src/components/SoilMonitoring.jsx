import { FlaskRoundIcon as Flask, Thermometer, Droplets, Leaf, AlertTriangle } from "lucide-react"

const SoilMetric = ({ icon, title, value, unit, range, percentage }) => {
  return (
    <div className="bg-white border rounded-lg p-4 cursor-pointer hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-medium">{title}</span>
        </div>
        <span className="text-xl font-bold">
          {value}
          {unit}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: percentage > 80 ? "#22c55e" : percentage > 30 ? "#22c55e" : "#ef4444",
          }}
        ></div>
      </div>

      <div className="text-xs text-gray-500">{range}</div>
    </div>
  )
}

const SoilMonitoring = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center">
        <Flask className="text-amber-700 mr-2" />
        <h2 className="font-bold text-lg">Soil Monitoring</h2>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SoilMetric
            icon={<Droplets className="text-blue-500 h-5 w-5" />}
            title="Moisture"
            value="68"
            unit="%"
            range="Optimal range: 60-75%"
            percentage={68}
          />

          <SoilMetric
            icon={<Thermometer className="text-red-500 h-5 w-5" />}
            title="Temperature"
            value="62"
            unit="°F"
            range="Optimal range: 60-80°F"
            percentage={40}
          />

          <SoilMetric
            icon={<Leaf className="text-green-500 h-5 w-5" />}
            title="Nitrogen"
            value="42"
            unit=" ppm"
            range="Optimal range: 40-60 ppm"
            percentage={60}
          />
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <AlertTriangle className="text-amber-600 mr-2 h-5 w-5" />
            <h3 className="font-bold">Recommendation</h3>
          </div>
          <p className="text-amber-800">
            Soil moisture is within optimal range. Consider testing pH levels in Field 2 next week.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SoilMonitoring
