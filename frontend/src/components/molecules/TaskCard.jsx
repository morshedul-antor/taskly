import Badge from '../atoms/Badge'
import Button from '../atoms/Button'
import { CreditCard as Edit2, Trash2, Clock, Calendar, AlertTriangle, User } from 'lucide-react'

const TaskCard = ({ task, onEdit, onDelete }) => {
  const statusColors = {
    PENDING: 'yellow',
    IN_PROGRESS: 'blue',
    COMPLETED: 'green',
  }
  const priorityColors = {
    LOW: 'grey',
    MEDIUM: 'blue',
    HIGH: 'red',
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-light-grey/20 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <button onClick={''} className="transition-all duration-200 hover:scale-110">
            <Badge
              color={statusColors[task.status]}
              className="cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-primary/20">
              {task.status === 'PENDING' && 'Pending'}
              {task.status === 'IN_PROGRESS' && 'In Progress'}
              {task.status === 'COMPELTED' && 'Completed'}
            </Badge>
          </button>
          <Badge color={priorityColors[task.priority]} variant="outline" size="small">
            {task.priority}
          </Badge>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            onClick={onEdit}
            variant="ghost"
            size="small"
            className="text-grey hover:text-blue p-2 hover:bg-blue-light">
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button
            onClick={onDelete}
            variant="ghost"
            size="small"
            className="text-grey hover:text-red p-2 hover:bg-red-light">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-dark mb-2 line-clamp-2">{task.title}</h3>

      {task.description && <p className="text-dark-grey text-sm mb-4 line-clamp-3">{task.description}</p>}

      <div className="border-t border-light-grey mt-4 pt-4">
        <div className="flex items-center justify-between text-xs text-grey">
          <div className="flex items-center space-x-1">
            <User className="w-3 h-3" />
            <span>{task?.user?.name}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>Created {formatDate(task.createdAt)}</span>
          </div>
          {task.updatedAt > task.createdAt && (
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>Updated {formatDate(task.updatedAt)}</span>
            </div>
          )}
        </div>
        {task.dueDate && (
          <div
            className={`flex items-center space-x-1 mt-2 ${
              new Date(task.dueDate) < new Date() && task.status !== 'COMPLETED' ? 'text-red' : 'text-grey'
            }`}>
            {new Date(task.dueDate) < new Date() && task.status !== 'COMPLETED' ? (
              <AlertTriangle className="w-3 h-3" />
            ) : (
              <Calendar className="w-3 h-3" />
            )}
            <span>Due {formatDate(task.dueDate)}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskCard
