import { useUser } from '@/features/auth/useUser'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from './Skeleton'
import { Children } from '@/types/types'

function ProtectedRoute({ children }: Children) {
  const navigate = useNavigate()
  const { isLoading, isAuthenticated } = useUser()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login')
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) return <Skeleton />

  if (!isAuthenticated) return null

  return children
}

export default ProtectedRoute
