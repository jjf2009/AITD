import FeatureCards from "./FeatureCards"

const TechnologySection = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Cultivating Success Through Technology</h2>

      <p className="mb-4 text-gray-700">
        AnnaData provides comprehensive agricultural monitoring solutions designed specifically for modern farmers. Our
        platform combines real-time data analytics with practical insights to help you maximize yields and minimize
        risks.
      </p>

      <p className="mb-6 text-gray-700">
        With our intuitive interface and powerful features, you can easily track soil conditions, monitor weather
        patterns, detect pest threats early, and receive timely recommendations tailored to your specific crops and
        growing conditions.
      </p>

      <FeatureCards />
    </div>
  )
}

export default TechnologySection
