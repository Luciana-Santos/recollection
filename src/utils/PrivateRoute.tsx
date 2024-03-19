import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRoute {
  isAuth: boolean
  children: React.ReactNode
}

const PrivateRoute = ({ isAuth, children }: PrivateRoute) => {
  useEffect(
    function () {
      if (!isAuth) <Navigate to="/login" replace />
    },
    [isAuth],
  )

  if (isAuth) return children
}

export default PrivateRoute
