import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { Auth } from '../contexts/context'

const Private = () => {
  const { stateAuth } = useContext(Auth)

  return stateAuth.token ? <Outlet /> : <Navigate to="/login" />
}

export default Private
