import { router } from './routers/router'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contexts/provider'

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}

export default App
