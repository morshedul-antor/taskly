import TaskCard from '../molecules/TaskCard'
import TaskListItem from '../molecules/TaskListItem'

const TaskList = ({ tasks, viewMode, onEditTask, onDeleteTask, onStatusChange }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-light to-light-grey rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-dark-grey mb-2">No tasks found</h3>
        <p className="text-grey">Create your first task to get started!</p>
      </div>
    )
  }

  if (viewMode === 'list') {
    return (
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-light-grey/20 overflow-hidden">
        <div className="divide-y divide-light-grey">
          {tasks.map((task, id) => (
            <div
              key={task.id}
              className="animate-fade-in"
              style={{
                animationDelay: `${id * 50}ms`,
                animationFillMode: 'both',
              }}>
              <TaskListItem
                task={task}
                onEdit={() => onEditTask(task)}
                onDelete={() => onDeleteTask(task)}
                // onStatusChange={(status) => onStatusChange(task.id, status)}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'both',
          }}>
          <TaskCard
            task={task}
            onEdit={() => onEditTask(task)}
            onDelete={() => onDeleteTask(task)}
            // onStatusChange={(status) => onStatusChange(task.id, status)}
          />
        </div>
      ))}
    </div>
  )
}

export default TaskList
