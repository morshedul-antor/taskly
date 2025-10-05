import { useState, useEffect, useContext } from 'react'
import MainLayout from '../components/templates/MainLayout'
import TaskList from '../components/organisms/TaskList'
import TaskFilters from '../components/organisms/TaskFilters'
import CreateTaskModal from '../components/organisms/CreateTaskModal'
import EditTaskModal from '../components/organisms/EditTaskModal'
import DeleteTaskModal from '../components/organisms/DeleteTaskModal'
import { Auth } from '../contexts/context'
import { useRequest } from '../hooks/useRequest'

const TasksPage = () => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [deletingTask, setDeletingTask] = useState(null)
  const [viewMode, setViewMode] = useState('card')
  const [refetch, setRefetch] = useState(false)

  const { handleFetch, handleSubmit, handleDelete } = useRequest()
  const { stateAuth } = useContext(Auth)
  const token = stateAuth.token

  useEffect(() => {
    const fetch = async () => {
      const { data, isSuccess } = await handleFetch(`/v1/tasks/`, token)

      if (isSuccess) {
        setRefetch(false)
        setTasks(data)
      }
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch])

  const handleCreateTask = async (taskData) => {
    const { isSuccess, isError } = await handleSubmit(`/v1/tasks/`, taskData, token)

    if (isSuccess) {
      setRefetch(true)
      setIsCreateModalOpen(false)
    } else {
      console.log(isError)
    }
  }

  const handleUpdateTask = async (id, updateData) => {
    const { isSuccess, isError } = await handleSubmit(`/v1/tasks/${id}`, updateData, token, 'PATCH')

    if (isSuccess) {
      setRefetch(true)
      setEditingTask(null)
    } else {
      console.log(isError)
    }
  }

  const handleDeleteTask = async (id) => {
    const { isSuccess, isError } = await handleDelete(`/v1/tasks/${id}`, token)

    if (isSuccess) {
      setRefetch(true)
      setDeletingTask(null)
    } else {
      console.log(isError)
    }
  }

  return (
    <MainLayout onCreateTask={() => setIsCreateModalOpen(true)}>
      <TaskFilters
        filter={filter}
        onFilterChange={setFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <TaskList tasks={tasks} viewMode={viewMode} onEditTask={setEditingTask} onDeleteTask={setDeletingTask} />

      {isCreateModalOpen && <CreateTaskModal onClose={() => setIsCreateModalOpen(false)} onSubmit={handleCreateTask} />}

      {editingTask && (
        <EditTaskModal task={editingTask} onClose={() => setEditingTask(null)} onSubmit={handleUpdateTask} />
      )}

      {deletingTask && (
        <DeleteTaskModal task={deletingTask} onClose={() => setDeletingTask(null)} onSubmit={handleDeleteTask} />
      )}
    </MainLayout>
  )
}

export default TasksPage
