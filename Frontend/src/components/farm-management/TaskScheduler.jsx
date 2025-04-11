import { Calendar, CheckSquare, Clock, Plus } from "lucide-react"

const TaskItem = ({ title, date, time, priority, completed }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-amber-100 text-amber-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="border-b border-gray-100 pb-3 mb-3 last:mb-0 last:pb-0 last:border-0">
      <div className="flex items-start">
        <div className="mt-0.5">
          <input
            type="checkbox"
            checked={completed}
            className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
            readOnly
          />
        </div>
        <div className="ml-3 flex-1">
          <div className="flex justify-between">
            <span className={`font-medium ${completed ? "line-through text-gray-400" : ""}`}>{title}</span>
            <div className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(priority)}`}>{priority}</div>
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <Calendar className="h-3 w-3 mr-1" />
            <span className="mr-3">{date}</span>
            <Clock className="h-3 w-3 mr-1" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const TaskScheduler = () => {
  const tasks = [
    {
      title: "Apply fertilizer to Corn Field 1",
      date: "Apr 12, 2025",
      time: "8:00 AM",
      priority: "High",
      completed: false,
    },
    {
      title: "Maintenance check on irrigation system",
      date: "Apr 14, 2025",
      time: "10:30 AM",
      priority: "Medium",
      completed: false,
    },
    {
      title: "Order new seeds for next season",
      date: "Apr 18, 2025",
      time: "2:00 PM",
      priority: "Low",
      completed: false,
    },
    {
      title: "Repair fence in north field",
      date: "Apr 10, 2025",
      time: "9:00 AM",
      priority: "Medium",
      completed: true,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between bg-green-50">
        <div className="flex items-center">
          <CheckSquare className="text-green-700 mr-2" />
          <h2 className="font-bold text-lg">Task Scheduler</h2>
        </div>
        <button className="p-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <button className="text-sm font-medium text-green-600 border-b-2 border-green-600 pb-1">Upcoming</button>
          <button className="text-sm font-medium text-gray-500 pb-1">Completed</button>
          <button className="text-sm font-medium text-gray-500 pb-1">All Tasks</button>
        </div>

        <div>
          {tasks
            .filter((task) => !task.completed)
            .map((task, index) => (
              <TaskItem key={index} {...task} />
            ))}
        </div>

        <h3 className="font-medium text-gray-500 text-sm mt-4 mb-2">Completed</h3>
        <div>
          {tasks
            .filter((task) => task.completed)
            .map((task, index) => (
              <TaskItem key={index} {...task} />
            ))}
        </div>

        <button className="w-full mt-3 text-green-600 hover:text-green-800 font-medium text-sm border border-green-200 rounded-lg py-2 px-4">
          View all tasks
        </button>
      </div>
    </div>
  )
}

export default TaskScheduler
