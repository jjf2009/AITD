import { Settings, FileText, BarChart2, Cog } from "lucide-react"

const ManagementLink = ({ icon, title }) => {
  return (
    <div className="flex items-center p-3 cursor-pointer hover:bg-gray-50 transition-colors rounded-lg">
      {icon}
      <span className="ml-3 font-medium">{title}</span>
    </div>
  )
}

const FarmManagement = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center">
        <Settings className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Farm Management</h2>
      </div>

      <div className="p-4">
        <ManagementLink icon={<FileText className="text-green-600 h-5 w-5" />} title="Crop Reports" />

        <ManagementLink icon={<BarChart2 className="text-green-600 h-5 w-5" />} title="Yield Analytics" />

        <ManagementLink icon={<Cog className="text-green-600 h-5 w-5" />} title="Farm Settings" />
      </div>
    </div>
  )
}

export default FarmManagement
