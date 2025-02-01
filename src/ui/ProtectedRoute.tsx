import { useUser } from '@/features/auth/useUser'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from './Skeleton'
import { Children } from '@/types/types'

function ProtectedRoute({ children }: Children) {
  const navigate = useNavigate()

  // 1. pega o usuário logado
  const { isLoading, isAuthenticated } = useUser()

  // 2. se NÃO tiver um usuário logado, redireciona para o login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login')
    },
    [isAuthenticated, isLoading, navigate],
  )

  if (isLoading) return <Skeleton />

  if (isAuthenticated) return children
}

export default ProtectedRoute
