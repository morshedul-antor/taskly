import Badge from '../atoms/Badge'

const FilterButton = ({ children, active, onClick, color, count }) => {
  const colorClasses = {
    grey: active ? 'bg-light text-dark ring-light-grey' : 'bg-white text-grey hover:bg-light-low ring-light-grey',
    blue: active ? 'bg-blue-light text-blue ring-blue' : 'bg-white text-grey hover:bg-blue-light/50 ring-light-grey',
    yellow: active
      ? 'bg-yellow-light text-yellow ring-yellow'
      : 'bg-white text-grey hover:bg-yellow-light/50 ring-light-grey',
    green: active
      ? 'bg-green-light text-green ring-green'
      : 'bg-white text-grey hover:bg-green-light/50 ring-light-grey',
  }

  const badgeColors = {
    grey: 'grey',
    blue: 'blue',
    yellow: 'yellow',
    green: 'green',
  }

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium ring-1 transition-all duration-200 hover:shadow-md ${colorClasses[color]}`}>
      <span>{children}</span>
      <Badge color={badgeColors[color]} size="small" variant={active ? 'solid' : 'outline'}>
        {count}
      </Badge>
    </button>
  )
}

export default FilterButton
