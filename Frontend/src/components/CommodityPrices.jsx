import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"

const CommodityItem = ({ name, price, change }) => {
  const isPositive = change > 0

  return (
    <div className="py-3 cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">Price per bushel</p>
        </div>
        <div className="text-right">
          <p className="font-bold">${price}</p>
          <div className={`flex items-center ${isPositive ? "text-green-600" : "text-red-600"}`}>
            {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            <span className="text-sm">
              {isPositive ? "+" : ""}
              {change}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const CommodityPrices = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center">
        <DollarSign className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Commodity Market Prices</h2>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <CommodityItem name="Wheat" price="7.24" change="0.12" />
          </div>
          <div>
            <CommodityItem name="Corn" price="4.86" change="-0.08" />
          </div>
          <div>
            <CommodityItem name="Soybeans" price="13.45" change="0.32" />
          </div>
          <div>
            <CommodityItem name="Cotton" price="0.86" change="-0.02" />
          </div>
        </div>

        <div className="mt-4 text-center">
          <button className="text-green-600 hover:text-green-800 font-medium text-sm border border-green-200 rounded-lg py-2 px-4">
            View all commodities
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommodityPrices
