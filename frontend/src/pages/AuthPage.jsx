import { useContext, useEffect } from 'react'
import { useRequest } from '../hooks/useRequest'
import { Auth, User } from '../contexts/context'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/atoms/Loader'

const AuthPage = () => {
  const { handleFetch } = useRequest()
  const { stateAuth } = useContext(Auth)
  const navigate = useNavigate()

  // redirect if already logged in
  if (stateAuth.auth) {
    console.log('Redirecting....')
    navigate('/')
  }
  const { dispatchUser } = useContext(User)

  useEffect(() => {
    const fetch = async () => {
      const { data, isSuccess } = await handleFetch(`/v1/auth/me`, stateAuth.token)

      if (isSuccess) {
        console.log(data)
        dispatchUser({ type: 'set', payload: data })
        navigate('/')
      }
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Loader />
}

export default AuthPage
