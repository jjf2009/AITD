import { BarChart, TrendingUp, ArrowUpRight } from "lucide-react"

const YieldPredictions = () => {
  const crops = [
    { name: "Corn", current: 185, predicted: 195, unit: "bu/acre", change: "+5.4%" },
    { name: "Wheat", current: 65, predicted: 72, unit: "bu/acre", change: "+10.8%" },
    { name: "Soybeans", current: 52, predicted: 58, unit: "bu/acre", change: "+11.5%" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center bg-green-50">
        <BarChart className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Expected Yield</h2>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 rounded-full bg-green-200 mr-2"></div>
          <span className="text-xs text-gray-500 mr-4">Current</span>
          <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
          <span className="text-xs text-gray-500">AI Prediction</span>
        </div>

        {crops.map((crop, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{crop.name}</span>
              <div className="flex items-center text-green-600 text-sm">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>{crop.change}</span>
              </div>
            </div>

            <div className="flex items-center h-8 mb-1">
              <div
                className="bg-green-200 h-6 rounded-l-full"
                style={{ width: `${(crop.current / 200) * 100}%` }}
              ></div>
              <div
                className="bg-green-600 h-6 rounded-r-full"
                style={{ width: `${((crop.predicted - crop.current) / 200) * 100}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-gray-500">
              <span>
                Current: {crop.current} {crop.unit}
              </span>
              <span>
                Predicted: {crop.predicted} {crop.unit}
              </span>
            </div>
          </div>
        ))}

        <button className="w-full mt-3 flex items-center justify-center text-green-600 hover:text-green-800 font-medium text-sm border border-green-200 rounded-lg py-2 px-4">
          <ArrowUpRight className="h-4 w-4 mr-1" />
          View detailed analysis
        </button>
      </div>
    </div>
  )
}

export default YieldPredictions
