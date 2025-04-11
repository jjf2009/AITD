import { ShoppingCart, TrendingUp, TrendingDown, ArrowUpDown } from "lucide-react"

const MarketOperations = () => {
  const transactions = [
    {
      type: "Sell",
      crop: "Corn",
      quantity: "5,000 kg",
      price: "$0.45/kg",
      total: "$2,250",
      status: "Pending",
      date: "Apr 15, 2025",
    },
    {
      type: "Buy",
      crop: "Fertilizer",
      quantity: "1,200 kg",
      price: "$0.85/kg",
      total: "$1,020",
      status: "Completed",
      date: "Apr 8, 2025",
    },
    {
      type: "Sell",
      crop: "Wheat",
      quantity: "3,500 kg",
      price: "$0.52/kg",
      total: "$1,820",
      status: "Completed",
      date: "Apr 2, 2025",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center bg-green-50">
        <ShoppingCart className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Market Operations</h2>
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-1">
              <TrendingUp className="text-green-600 h-5 w-5" />
            </div>
            <div className="text-xs text-gray-500">Selling</div>
            <div className="font-bold">$12,450</div>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-1">
              <ArrowUpDown className="text-amber-600 h-5 w-5" />
            </div>
            <div className="text-xs text-gray-500">Net</div>
            <div className="font-bold">$8,230</div>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-1">
              <TrendingDown className="text-red-600 h-5 w-5" />
            </div>
            <div className="text-xs text-gray-500">Buying</div>
            <div className="font-bold">$4,220</div>
          </div>
        </div>

        <h3 className="font-medium mb-2">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <div key={index} className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${
                      transaction.type === "Sell" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span className="font-medium">{transaction.crop}</span>
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded-full ${
                    transaction.status === "Completed" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {transaction.status}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-xs text-gray-500">Type</div>
                  <div className={`font-medium ${transaction.type === "Sell" ? "text-green-600" : "text-red-600"}`}>
                    {transaction.type}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Quantity</div>
                  <div>{transaction.quantity}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Total</div>
                  <div className="font-medium">{transaction.total}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 text-green-600 hover:text-green-800 font-medium text-sm border border-green-200 rounded-lg py-2 px-4">
          View all transactions
        </button>
      </div>
    </div>
  )
}

export default MarketOperations
