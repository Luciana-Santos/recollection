import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRoute {
  isAuth: boolean
}

const PrivateRoute = ({ isAuth }: PrivateRoute) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
