import { Sprout, CircleDot } from "lucide-react"

const NewsItem = ({ title, daysAgo }) => {
  return (
    <div className="mb-4 cursor-pointer hover:bg-gray-50 transition-colors p-2 -mx-2 rounded">
      <div className="flex">
        <CircleDot className="text-green-600 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{daysAgo}</p>
        </div>
      </div>
    </div>
  )
}

const AgricultureNews = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center">
        <Sprout className="text-green-700 mr-2" />
        <h2 className="font-bold text-lg">Newest in Agriculture</h2>
      </div>

      <div className="p-4">
        <NewsItem title="New drought-resistant wheat variety released" daysAgo="2 days ago" />

        <NewsItem title="Sustainable farming subsidies increased by 15%" daysAgo="5 days ago" />

        <NewsItem title="New organic certification guidelines published" daysAgo="1 week ago" />

        <div className="mt-4 text-center">
          <button className="text-green-600 hover:text-green-800 font-medium text-sm border border-green-200 rounded-lg py-2 px-4 w-full">
            View all updates
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgricultureNews
