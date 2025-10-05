import Modal from '../molecules/Modal'
import Button from '../atoms/Button'

const DeleteTaskModal = ({ task, onSubmit, onClose }) => {
  const handleClick = () => {
    onSubmit(task.id)
  }

  return (
    <Modal onClose={onClose} title="Delete Task">
      <div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete &quot;{task.title}&quot;? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-3">
          <Button onClick={onClose} variant="ghost" size="medium">
            Cancel
          </Button>
          <Button onClick={handleClick} variant="danger" size="medium">
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteTaskModal
