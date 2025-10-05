const Button = ({ variant = 'primary', size = 'medium', children, className = '', disabled, ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 focus:ring-primary shadow-lg hover:shadow-xl',
    secondary: 'bg-light text-dark hover:bg-light-grey focus:ring-grey',
    ghost: 'text-grey hover:bg-light focus:ring-grey',
    danger: 'bg-red text-white hover:opacity-90 focus:ring-red shadow-lg hover:shadow-xl',
  }

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  )
}

export default Button
