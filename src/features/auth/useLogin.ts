import { login as loginApi } from '@/services/apiAuth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: login, isPending: isLoging } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user)
      localStorage.setItem('user', JSON.stringify(user.email))

      navigate('/recents', { replace: true })
    },
    onError: (err) => {
      console.log('ERROR', err)
      toast.error(
        'Para acessar, use teste@demo.com / secret. Nada suspeito aqui.',
      )
    },
  })

  return { login, isLoging }
}
