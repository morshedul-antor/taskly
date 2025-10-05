import { useEffect } from 'react'
import { X } from 'lucide-react'
import Button from '../atoms/Button'

const Modal = ({ children, onClose, title }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl border max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-appear">
        <div className="flex items-center justify-between p-6 border-b border-light-grey">
          <h2 className="text-xl font-semibold text-dark">{title}</h2>
          <Button onClick={onClose} variant="ghost" size="small" className="text-grey hover:text-dark-grey p-2">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal
