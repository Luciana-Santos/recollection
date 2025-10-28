import { deleteFile as deleteFileApi } from '@/services/apiFiles'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useDeleteFile() {
  const queryCliente = useQueryClient()

  const { isPending: isDeleting, mutate: deleteFile } = useMutation({
    mutationFn: (id: string) => deleteFileApi(id),
    onSuccess: () => {
      toast.success('File deleted successfully!')
      queryCliente.invalidateQueries({
        queryKey: ['files'],
      })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isDeleting, deleteFile }
}
