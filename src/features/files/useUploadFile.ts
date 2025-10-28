import { createFile } from '@/services/apiFiles'
import { ICardData } from '@/types/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUploadFile() {
  const queryClient = useQueryClient()

  const { mutate: uploadFile, isPending: isUploading } = useMutation({
    mutationFn: (newFile: ICardData) => createFile(newFile),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['files'] }),
    onError: (err: any) => console.error(err),
  })

  return { isUploading, uploadFile }
}
