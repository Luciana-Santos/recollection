import { uploadFile as uploadFileApi } from '@/services/apiFiles'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useUploadFile() {
  const queryClient = useQueryClient()

  const { mutate: uploadFile, isPending: isUploading } = useMutation({
    mutationFn: uploadFileApi,
    onSuccess: () => {
      toast.success('File successfully upload')
      queryClient.invalidateQueries({ queryKey: ['files'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isUploading, uploadFile }
}
