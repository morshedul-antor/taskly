const Input = ({ error, className = '', ...props }) => {
  const baseClasses =
    'block w-full px-4 py-3 rounded-xl border bg-white/90 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1'

  const normalClasses = 'border-light-grey focus:border-primary focus:ring-primary/20'

  const errorClasses = 'border-red focus:border-red focus:ring-red/20'

  return <input className={`${baseClasses} ${error ? errorClasses : normalClasses} ${className}`} {...props} />
}

export default Input
