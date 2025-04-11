import { Leaf } from "lucide-react"


const WelcomeSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center text-green-700 mb-2">
        <Leaf className="mr-2" />
        <h1 className="text-4xl font-bold">Welcome to Annadata</h1>
      </div>
      <p className="text-green-700 text-lg">
        Your intelligent farming companion for data-driven agriculture management and crop optimization
      </p>
    </div>
  )
}

export default WelcomeSection
