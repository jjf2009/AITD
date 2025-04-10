import { AlertTriangle, Wheat, CropIcon as Corn } from "lucide-react"

const AlertCard = ({ icon, title, status, recommendation }) => {
  return (
    <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-3 cursor-pointer hover:shadow-sm transition-shadow">
      <div className="flex items-center mb-1">
        {icon}
        <h3 className="font-bold ml-2">{title}</h3>
      </div>
      <p className="text-sm text-amber-800">{status}</p>
      {recommendation && <p className="text-sm text-amber-800">Recommended: {recommendation}</p>}
    </div>
  )
}

const CropAlerts = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-amber-50 p-4 border-b flex items-center">
        <AlertTriangle className="text-amber-500 mr-2" />
        <h2 className="font-bold text-lg">Crop Alerts</h2>
      </div>

      <div className="p-4">
        <AlertCard
          icon={<Wheat className="text-amber-600 h-5 w-5" />}
          title="Wheat Field 3"
          status="Moisture levels below optimal range"
          recommendation="Increase irrigation by 15%"
        />

        <AlertCard
          icon={<Corn className="text-green-600 h-5 w-5" />}
          title="Corn Field 1"
          status="All parameters within optimal range"
          recommendation="Next scheduled check: Tomorrow"
        />
      </div>
    </div>
  )
}

export default CropAlerts
