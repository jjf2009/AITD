import { DollarSign, TrendingUp, TrendingDown, ArrowRight } from "lucide-react"

const FinancialOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center bg-green-50">
        <DollarSign className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Financial Overview</h2>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-sm text-gray-500 mb-1">Predicted Annual Profit</h3>
          <div className="flex items-center">
            <span className="text-2xl font-bold">$124,500</span>
            <div className="ml-2 flex items-center text-green-600 text-sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+12.3%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-3">
            <h3 className="text-sm text-gray-500 mb-1">Revenue</h3>
            <div className="flex items-center">
              <span className="text-xl font-bold">$245,800</span>
              <div className="ml-2 flex items-center text-green-600 text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+8.5%</span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-3">
            <h3 className="text-sm text-gray-500 mb-1">Expenses</h3>
            <div className="flex items-center">
              <span className="text-xl font-bold">$121,300</span>
              <div className="ml-2 flex items-center text-red-600 text-xs">
                <TrendingDown className="h-3 w-3 mr-1" />
                <span>-3.2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-3">Expense Breakdown</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Seeds & Fertilizers</span>
                <span>$42,500 (35%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-green-500" style={{ width: "35%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Equipment & Maintenance</span>
                <span>$36,400 (30%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-blue-500" style={{ width: "30%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Labor</span>
                <span>$24,200 (20%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-amber-500" style={{ width: "20%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Fuel & Utilities</span>
                <span>$18,200 (15%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-red-500" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center text-green-600 hover:text-green-800 font-medium text-sm border border-green-200 rounded-lg py-2 px-4">
          View financial details
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  )
}

export default FinancialOverview
