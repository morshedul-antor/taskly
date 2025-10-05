import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Loader from '../components/atoms/Loader'
import { Suspense, lazy } from 'react'
import Private from './Private'
import AuthPage from '../pages/AuthPage'

const LoginPage = lazy(() => import('../pages/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage'))
const TasksPage = lazy(() => import('../pages/TasksPage'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="login"
        element={
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="register"
        element={
          <Suspense fallback={<Loader />}>
            <RegisterPage />
          </Suspense>
        }
      />
      <Route path="auth" element={<AuthPage />} />

      <Route path="/*" element={<Private />}>
        <Route
          path=""
          element={
            <Suspense fallback={<Loader />}>
              <TasksPage />
            </Suspense>
          }
        />
      </Route>
    </Route>
  )
)
