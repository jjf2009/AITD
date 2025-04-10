import Navbar from "../components/Navbar"
import WelcomeSection from "../components/WelcomeSection"
import TechnologySection from "../components/TechnologySection"
import CropAlerts from "../components/CropAlerts"
import FarmWeather from "../components/FarmWeather"
import SoilMonitoring from "../components/SoilMonitoring"
import PestMonitor from "../components/PestMonitor"
import CommodityPrices from "../components/CommodityPrices"
import AgricultureNews from "../components/AgricultureNews"
import FarmManagement from "../components/FarmManagement"

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <WelcomeSection />
            <TechnologySection />
            <SoilMonitoring />
            <CommodityPrices />
            <FarmManagement />
          </div>

          {/* Sidebar - 1/3 width on large screens */}
          <div className="space-y-6">
            <CropAlerts />
            <FarmWeather />
            <PestMonitor />
            <AgricultureNews />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
