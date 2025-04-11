import { TreesIcon as Plant, Calendar, Leaf, AlertTriangle } from "lucide-react"

const CropItem = ({ crop, variety, plantingDate, stage, progress, alert }) => {
  return (
    <div className="border-b border-gray-100 pb-3 mb-3 last:mb-0 last:pb-0 last:border-0 cursor-pointer hover:bg-gray-50 transition-colors rounded p-2 -mx-2">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Plant className="text-green-600 h-5 w-5 mr-2" />
          <div>
            <h4 className="font-medium">{crop}</h4>
            <p className="text-xs text-gray-500">Variety: {variety}</p>
          </div>
        </div>
        {alert && (
          <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" />
            {alert}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center">
          <Calendar className="text-gray-400 h-4 w-4 mr-1" />
          <span className="text-gray-600">{plantingDate}</span>
        </div>
        <div className="flex items-center">
          <Leaf className="text-gray-400 h-4 w-4 mr-1" />
          <span className="text-gray-600">{stage}</span>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex justify-between text-xs mb-1">
          <span>Growth Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="h-2 rounded-full bg-green-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}

const CropManagement = () => {
  const crops = [
    {
      crop: "Corn",
      variety: "Sweet Corn XH-5",
      plantingDate: "Mar 15, 2025",
      stage: "Vegetative",
      progress: 45,
      alert: null,
    },
    {
      crop: "Wheat",
      variety: "Winter Wheat R2",
      plantingDate: "Oct 10, 2024",
      stage: "Flowering",
      progress: 75,
      alert: "Pest risk",
    },
    {
      crop: "Soybeans",
      variety: "RoundUp Ready",
      plantingDate: "Apr 5, 2025",
      stage: "Germination",
      progress: 15,
      alert: null,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center bg-green-50">
        <Plant className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Crop Management</h2>
      </div>

      <div className="p-4">
        {crops.map((crop, index) => (
          <CropItem key={index} {...crop} />
        ))}

        <button className="w-full mt-3 text-green-600 hover:text-green-800 font-medium text-sm border border-green-200 rounded-lg py-2 px-4">
          View all crops
        </button>
      </div>
    </div>
  )
}

export default CropManagement
