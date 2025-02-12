import { createEditFile } from '@/services/apiFiles'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

type UpdateFileArgs = {
  newFileData: any
  id?: string
}

export function useUpdateFile() {
  const queryClient = useQueryClient()
  const { mutate: updateFile, isPending: isUpdating } = useMutation({
    mutationFn: ({ newFileData, id }: UpdateFileArgs) =>
      createEditFile(newFileData, id),
    onSuccess: () => {
      toast.success('File successfully updated')
      queryClient.invalidateQueries({ queryKey: ['files'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { updateFile, isUpdating }
}
