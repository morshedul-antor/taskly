import { useContext, useState } from 'react'
import LoginTemplate from '../components/templates/LoginTemplate'
import LoginForm from '../components/organisms/LoginForm'
import { useRequest } from '../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../contexts/context'

const LoginPage = () => {
  const { handleSubmit } = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const { stateAuth, dispatchAuth } = useContext(Auth)
  const navigate = useNavigate()

  // redirect if already logged in
  if (stateAuth.auth) {
    navigate('/')
  }

  const handleLogin = async (details) => {
    setIsLoading(true)

    const { log, isSuccess, isError } = await handleSubmit(`/v1/auth/login`, details)

    if (isSuccess) {
      console.log(log)
      dispatchAuth({ type: 'token', payload: log.token })
      navigate('/auth')
    } else {
      console.log(isError)
      alert(isError)
    }

    setIsLoading(false)
    navigate('/auth')
  }

  return (
    <LoginTemplate>
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </LoginTemplate>
  )
}

export default LoginPage
