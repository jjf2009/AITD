import { Clock, AlertTriangle } from "lucide-react"

const ProductItem = ({ name, harvestDate, daysLeft, quantity, percentage }) => {
  const getStatusColor = (days) => {
    if (days <= 7) return "text-red-600"
    if (days <= 14) return "text-amber-600"
    return "text-green-600"
  }

  return (
    <div className="border-b border-gray-100 pb-3 mb-3 last:mb-0 last:pb-0 last:border-0 cursor-pointer hover:bg-gray-50 transition-colors rounded p-2 -mx-2">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium">{name}</span>
        <div className={`flex items-center ${getStatusColor(daysLeft)}`}>
          <Clock className="h-3 w-3 mr-1" />
          <span className="text-xs">{daysLeft} days left</span>
        </div>
      </div>

      <div className="text-xs text-gray-500 mb-2">
        Harvested: {harvestDate} • Quantity: {quantity}
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
        <div
          className={`h-2 rounded-full ${
            daysLeft <= 7 ? "bg-red-500" : daysLeft <= 14 ? "bg-amber-500" : "bg-green-500"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const ProductShelfLife = () => {
  const products = [
    {
      name: "Sweet Corn",
      harvestDate: "Apr 2, 2025",
      daysLeft: 5,
      quantity: "1,200 kg",
      percentage: 25,
    },
    {
      name: "Tomatoes",
      harvestDate: "Apr 5, 2025",
      daysLeft: 8,
      quantity: "850 kg",
      percentage: 40,
    },
    {
      name: "Potatoes",
      harvestDate: "Mar 25, 2025",
      daysLeft: 22,
      quantity: "3,500 kg",
      percentage: 75,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center bg-green-50">
        <Clock className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Product Shelf Life</h2>
      </div>

      <div className="p-4">
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}

        <div className="mt-3 p-3 bg-amber-50 rounded-lg flex items-start">
          <AlertTriangle className="text-amber-600 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-amber-800 mb-1">Action Required</h3>
            <p className="text-sm text-amber-700">
              Sweet Corn inventory is approaching end of shelf life. Consider selling at a discount or processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShelfLife
