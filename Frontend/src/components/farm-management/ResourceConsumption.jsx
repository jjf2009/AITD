import { Fuel, Droplet, Zap } from "lucide-react"

const ResourceItem = ({ icon, name, current, total, unit, percentage }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-medium">{name}</span>
        </div>
        <span className="text-sm">
          {current}/{total} {unit}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: percentage > 75 ? "#ef4444" : percentage > 50 ? "#f59e0b" : "#22c55e",
          }}
        ></div>
      </div>

      <div className="text-right text-xs text-gray-500">{percentage}% used</div>
    </div>
  )
}

const ResourceConsumption = () => {
  const resources = [
    {
      icon: <Fuel className="text-amber-600 h-4 w-4" />,
      name: "Diesel Fuel",
      current: 850,
      total: 1200,
      unit: "liters",
      percentage: 71,
    },
    {
      icon: <Droplet className="text-blue-600 h-4 w-4" />,
      name: "Water Usage",
      current: 12500,
      total: 30000,
      unit: "gallons",
      percentage: 42,
    },
    {
      icon: <Zap className="text-yellow-600 h-4 w-4" />,
      name: "Electricity",
      current: 4200,
      total: 6000,
      unit: "kWh",
      percentage: 70,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center bg-green-50">
        <Fuel className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Resource Consumption</h2>
      </div>

      <div className="p-4">
        {resources.map((resource, index) => (
          <ResourceItem key={index} {...resource} />
        ))}

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-1">Resource Optimization</h3>
          <p className="text-sm text-blue-700">
            AI suggests reducing diesel consumption by optimizing tractor routes. Potential savings: 15%
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResourceConsumption
