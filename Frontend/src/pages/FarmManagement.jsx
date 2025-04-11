import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import CropManagement from "../components/farm-management/CropManagement"
import YieldPredictions from "../components/farm-management/YieldPredictions"
import InventoryManagement from "../components/farm-management/InventoryManagement"
import FinancialOverview from "../components/farm-management/FinancialOverview"
import ResourceConsumption from "../components/farm-management/ResourceConsumption"
import MarketOperations from "../components/farm-management/MarketOperations"
import ProductShelfLife from "../components/farm-management/ProductShelfLife"
import TaskScheduler from "../components/farm-management/TaskScheduler"

const FarmManagement = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <PageHeader title="Farm Management" description="Comprehensive tools to manage your farm operations" />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main content - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <CropManagement />
              <YieldPredictions />
            </div>
            <InventoryManagement />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ResourceConsumption />
              <ProductShelfLife />
            </div>
          </div>

          {/* Sidebar - 1/3 width on large screens */}
          <div className="space-y-5">
            <FinancialOverview />
            <MarketOperations />
            <TaskScheduler />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmManagement
