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
      console.log('useLogin:', user)

      queryClient.setQueryData(['user'], user.url)
      navigate('/recents', { replace: true })
    },
    onError: (err) => {
      console.log('ERROR', err)
      toast.error('Credencials does not exist.')
    },
  })

  return { login, isLoging }
}
