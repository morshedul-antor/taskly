import SearchBar from '../molecules/SearchBar'
import FilterButton from '../molecules/FilterButton'
import ViewToggle from '../molecules/ViewToggle'
import DateFilter from '../molecules/DateFilter'

const TaskFilters = ({
  filter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  date,
  onDateChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-4 bg-white/50 backdrop-blur-lg rounded-2xl shadow-md border border-light-grey/20 mb-6 sticky top-20 z-10">
      <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
        <FilterButton active={filter === 'all'} onClick={() => onFilterChange('all')} color="grey">
          All
        </FilterButton>
        <FilterButton active={filter === 'pending'} onClick={() => onFilterChange('pending')} color="yellow">
          Pending
        </FilterButton>
        <FilterButton active={filter === 'in_progress'} onClick={() => onFilterChange('in_progress')} color="blue">
          In Progress
        </FilterButton>
        <FilterButton active={filter === 'completed'} onClick={() => onFilterChange('completed')} color="green">
          Completed
        </FilterButton>
      </div>

      <div className="flex flex-wrap items-center gap-4 flex-1 justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0">
        <DateFilter date={date} onDateChange={onDateChange} />
        <div className="flex-1 min-w-[200px]">
          <SearchBar value={searchQuery} onChange={onSearchChange} placeholder="Search tasks..." />
        </div>
        <ViewToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
      </div>
    </div>
  )
}

export default TaskFilters
