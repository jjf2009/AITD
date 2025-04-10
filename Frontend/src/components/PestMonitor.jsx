import { Bug, AlertCircle, Scan } from "lucide-react"

const RiskIndicator = ({ level, title }) => {
  const bgColor = level === "Low" ? "bg-green-100" : level === "Moderate" ? "bg-amber-100" : "bg-red-100"
  const textColor = level === "Low" ? "text-green-700" : level === "Moderate" ? "text-amber-700" : "text-red-700"

  return (
    <div className="border rounded-lg p-3 cursor-pointer hover:shadow-sm transition-shadow">
      <p className="text-gray-600 mb-1">{title}</p>
      <div className={`${bgColor} ${textColor} text-sm font-medium px-2 py-1 rounded inline-block`}>{level}</div>
    </div>
  )
}

const PestMonitor = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-green-100 p-4 border-b flex items-center">
        <Bug className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Agricultural Pest Monitor</h2>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-medium">Last field scan</p>
            <p className="text-sm text-gray-500">Today, 10:30 AM</p>
          </div>
          <div className="text-amber-500 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            <span>Low Risk</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <RiskIndicator level="Moderate" title="Aphid Activity" />
          <RiskIndicator level="Low" title="Corn Borer Risk" />
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Recommended Action</p>
          <p className="font-medium">Monitor aphid populations in wheat fields</p>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center">
          <Scan className="mr-2 h-5 w-5" />
          Run field scan
        </button>
      </div>
    </div>
  )
}

export default PestMonitor
