import { CloudRain, FlaskRoundIcon as Flask, Sprout } from "lucide-react"

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white border rounded-lg p-6 text-center cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-2">{icon}</div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

const FeatureCards = () => {
  const features = [
    {
      icon: <CloudRain className="text-blue-500 h-10 w-10" />,
      title: "Weather Monitoring",
      description: "Real-time weather data and forecasts",
    },
    {
      icon: <Flask className="text-red-500 h-10 w-10" />,
      title: "Soil Analysis",
      description: "Moisture, nutrients, and pH tracking",
    },
    {
      icon: <Sprout className="text-green-500 h-10 w-10" />,
      title: "Crop Management",
      description: "Growth tracking and yield predictions",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
      ))}
    </div>
  )
}

export default FeatureCards
