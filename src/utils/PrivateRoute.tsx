import { useAuth } from '@/store/AuthContext'
import { Navigate } from 'react-router-dom'

interface PrivateRoute {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: PrivateRoute) => {
  const { user } = useAuth()
  console.log(user)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
