import { useContext, useState } from 'react'
import LoginTemplate from '../components/templates/LoginTemplate'
import RegisterForm from '../components/organisms/RegisterForm'
import { useRequest } from '../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../contexts/context'

const RegisterPage = () => {
  const { handleSubmit } = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const { stateAuth } = useContext(Auth)
  const navigate = useNavigate()

  // redirect if already logged in
  if (stateAuth.auth) {
    navigate('/')
  }

  const handleRegister = async (details) => {
    setIsLoading(true)
    const { isSuccess, isError } = await handleSubmit(`/v1/users/`, details)

    if (isSuccess) {
      navigate('/login')
    } else {
      alert(isError)
    }

    setIsLoading(false)
    navigate('/login')
  }

  return (
    <LoginTemplate>
      <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
    </LoginTemplate>
  )
}

export default RegisterPage
