const Badge = ({ children, color = 'grey', variant = 'solid', size = 'medium', className = '' }) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-200'

  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
  }

  const colorClasses = {
    solid: {
      grey: 'bg-light text-dark-grey',
      blue: 'bg-blue-light text-blue',
      yellow: 'bg-yellow-light text-yellow',
      green: 'bg-green-light text-green',
      red: 'bg-red-light text-red',
    },
    outline: {
      grey: 'border border-light-grey text-grey bg-white',
      blue: 'border border-blue text-blue bg-blue-light/50',
      yellow: 'border border-yellow text-yellow bg-yellow-light/50',
      green: 'border border-green text-green bg-green-light/50',
      red: 'border border-red text-red bg-red-light/50',
    },
  }

  return (
    <>
      <span className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[variant][color]} ${className}`}>
        {children}
      </span>
    </>
  )
}

export default Badge
