import { useContext } from 'react'
import Button from '../atoms/Button'
import { Plus, LogOut, User as UserIcon } from 'lucide-react'
import { Auth, User } from '../../contexts/context'

const Header = ({ onCreateTask }) => {
  const { stateUser, dispatchUser } = useContext(User)
  const { dispatchAuth } = useContext(Auth)
  const user = stateUser.info
  const userName = user?.name?.split(' ')[0]

  const logout = () => {
    dispatchAuth({ type: 'remove' })
    dispatchUser({ type: 'remove' })
  }

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-light-grey/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-dark">Taskly</h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button onClick={onCreateTask} variant="primary" size="medium" className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Task</span>
            </Button>

            <div className="flex items-center space-x-3 text-sm text-grey">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <UserIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium hidden sm:inline">{userName}</span>
              </div>
            </div>

            <Button
              onClick={logout}
              variant="ghost"
              size="medium"
              className="flex items-center space-x-2 text-grey hover:text-dark">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
