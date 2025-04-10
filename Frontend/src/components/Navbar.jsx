import { Leaf } from "lucide-react"

const Navbar = () => {
  return (
    <div className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="bg-white text-green-600 rounded-lg py-2 px-4 flex items-center">
          <Leaf className="mr-2" />
          <span className="font-bold text-xl">AnnaData</span>
        </div>

        <div className="flex space-x-6">
          <button className="font-medium">Dashboard</button>
          <button className="font-medium">Reports</button>
          <button className="font-medium">Settings</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
