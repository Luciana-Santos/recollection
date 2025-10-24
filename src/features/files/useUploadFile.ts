import { createEditFile } from '@/services/apiFiles'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUploadFile() {
  const queryClient = useQueryClient()

  const { mutate: uploadFile, isPending: isUploading } = useMutation({
    mutationFn: createEditFile,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['files'] }),
    onError: (err: any) => console.error(err),
  })

  return { isUploading, uploadFile }
}
