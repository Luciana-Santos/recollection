import { updateFile as updateFileApi } from '@/services/apiFiles'
import { ICardData } from '@/types/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type UpdateFileArgs = {
  newFileData: ICardData
  id?: string
}

export function useUpdateFile() {
  const queryClient = useQueryClient()

  const { mutate: updateFile, isPending: isUpdating } = useMutation({
    mutationFn: ({ newFileData }: UpdateFileArgs) => updateFileApi(newFileData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['files'] }),
    onError: (err: any) => console.error(err),
  })

  return { updateFile, isUpdating }
}
