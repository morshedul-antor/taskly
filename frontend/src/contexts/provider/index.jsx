import { StateProvider } from './state'
import { AuthProvider } from './auth'
import { UserProvider } from './user'

export const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <StateProvider>{children}</StateProvider>
      </UserProvider>
    </AuthProvider>
  )
}
