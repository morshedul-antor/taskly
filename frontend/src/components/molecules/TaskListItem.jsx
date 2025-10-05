import Badge from '../atoms/Badge'
import Button from '../atoms/Button'
import { CreditCard as Edit2, Trash2, Clock, Calendar, AlertTriangle, User } from 'lucide-react'

const TaskListItem = ({ task, onEdit, onDelete }) => {
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
    <>
      <div className="p-4 sm:p-6 hover:bg-light-low/50 transition-all duration-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-4 flex-1 min-w-0">
            <div className="w-[6em] self-center">
              <button onClick={''} className="transition-all duration-200 hover:scale-110 flex-shrink-0 mt-1">
                <Badge
                  color={statusColors[task.status]}
                  className="cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-primary/20">
                  {task.status === 'PENDING' && 'Pending'}
                  {task.status === 'IN_PROGRESS' && 'In Progress'}
                  {task.status === 'COMPLETED' && 'Completed'}
                </Badge>
              </button>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-1">
                <h3 className="text-lg font-semibold text-dark truncate">{task.title}</h3>
                <Badge color={priorityColors[task.priority]} variant="outline" size="small">
                  {task.priority}
                </Badge>
              </div>

              {task.description && <p className="text-dark-grey text-sm line-clamp-2 mb-2">{task.description}</p>}

              <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-xs text-grey">
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
                {task.dueDate && (
                  <div
                    className={`flex items-center space-x-1 ${
                      new Date(task.dueDate) < new Date() && task.status !== 'COMPLETED' ? 'text-red' : ''
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
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0 self-end sm:self-center">
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
      </div>
    </>
  )
}

export default TaskListItem
