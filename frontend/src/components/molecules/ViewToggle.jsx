import { Grid3x3 as Grid3X3, List } from 'lucide-react'

const ViewToggle = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-xl p-1 border border-light-grey shadow-sm">
      <button
        onClick={() => onViewModeChange('card')}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
          viewMode === 'card'
            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
            : 'text-grey hover:text-dark-grey hover:bg-light'
        }`}
        title="Card View">
        <Grid3X3 className="w-4 h-4" />
      </button>
      <button
        onClick={() => onViewModeChange('list')}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
          viewMode === 'list'
            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
            : 'text-grey hover:text-dark-grey hover:bg-light'
        }`}
        title="List View">
        <List className="w-4 h-4" />
      </button>
    </div>
  )
}

export default ViewToggle
