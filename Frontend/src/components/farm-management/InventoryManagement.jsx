import { Package, PenToolIcon as Tool, Droplets, SproutIcon as Seedling, Search, Plus } from "lucide-react"

const InventoryCategory = ({ icon, name, items, total, unit, alert }) => {
  return (
    <div className="border rounded-lg p-4 cursor-pointer hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          {icon}
          <h3 className="font-medium ml-2">{name}</h3>
        </div>
        {alert && <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">{alert}</div>}
      </div>

      <div className="text-sm text-gray-600 mb-2">{items} items</div>
      <div className="text-lg font-bold">
        {total} <span className="text-sm font-normal text-gray-500">{unit}</span>
      </div>
    </div>
  )
}

const InventoryManagement = () => {
  const categories = [
    {
      icon: <Seedling className="text-green-600 h-5 w-5" />,
      name: "Seeds",
      items: 12,
      total: 2450,
      unit: "kg",
      alert: null,
    },
    {
      icon: <Droplets className="text-blue-600 h-5 w-5" />,
      name: "Fertilizers",
      items: 8,
      total: 3200,
      unit: "liters",
      alert: "Low stock",
    },
    {
      icon: <Tool className="text-gray-600 h-5 w-5" />,
      name: "Equipment",
      items: 24,
      total: 45,
      unit: "items",
      alert: null,
    },
    {
      icon: <Package className="text-amber-600 h-5 w-5" />,
      name: "Harvested Crops",
      items: 5,
      total: 12500,
      unit: "kg",
      alert: null,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between bg-green-50">
        <div className="flex items-center">
          <Package className="text-green-700 mr-2" />
          <h2 className="font-bold text-lg">Inventory Management</h2>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 bg-white rounded-lg border hover:bg-gray-50">
            <Search className="h-4 w-4 text-gray-500" />
          </button>
          <button className="p-2 bg-white rounded-lg border hover:bg-gray-50">
            <Plus className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <InventoryCategory key={index} {...category} />
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-medium mb-3">Recent Transactions</h3>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-4 py-3 text-sm text-gray-900">NPK Fertilizer</td>
                  <td className="px-4 py-3 text-sm text-red-600">Out</td>
                  <td className="px-4 py-3 text-sm text-gray-900">250 kg</td>
                  <td className="px-4 py-3 text-sm text-gray-500">Apr 10, 2025</td>
                </tr>
                <tr className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-4 py-3 text-sm text-gray-900">Corn Seeds</td>
                  <td className="px-4 py-3 text-sm text-green-600">In</td>
                  <td className="px-4 py-3 text-sm text-gray-900">500 kg</td>
                  <td className="px-4 py-3 text-sm text-gray-500">Apr 8, 2025</td>
                </tr>
                <tr className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-4 py-3 text-sm text-gray-900">Tractor Parts</td>
                  <td className="px-4 py-3 text-sm text-green-600">In</td>
                  <td className="px-4 py-3 text-sm text-gray-900">3 items</td>
                  <td className="px-4 py-3 text-sm text-gray-500">Apr 5, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventoryManagement
