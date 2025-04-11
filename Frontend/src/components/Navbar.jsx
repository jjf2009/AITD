import { Leaf } from "lucide-react"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="bg-white text-green-600 rounded-lg py-2 px-4 flex items-center">
          <Leaf className="mr-2" />
          <span className="font-bold text-xl">AnnaData</span>
        </div>

        <div className="flex space-x-6">
          <Link to="/weather">
          <button className="font-medium cursor-pointer">Weather Dashboard</button>
          </Link>
          <Link to="/resources">
          <button className="font-medium cursor-pointer">Manage</button>
          </Link>
          <Link to="/">
          <button className="font-medium cursor-pointer">Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
