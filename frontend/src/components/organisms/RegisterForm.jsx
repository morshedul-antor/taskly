import { useState } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { Link } from 'react-router-dom'

const RegisterForm = ({ onSubmit, isLoading }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && password) {
      onSubmit({ name, email, password })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full"
        />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />

        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        className="w-full"
        disabled={isLoading || !name || !email || !password}>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
            Signing Up...
          </div>
        ) : (
          'Sign Up'
        )}
      </Button>

      <p className="text-center text-white/60 text-sm mt-4">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  )
}

export default RegisterForm
