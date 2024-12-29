import { getFiles } from '@/services/apiFiles'
import { ICardData } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

export function useFiles() {
  // const queryClient = useQueryClient()

  const {
    data: files = [],
    isLoading,
    error,
  } = useQuery<ICardData[]>({
    queryKey: ['files'],
    queryFn: () => getFiles(),
  })

  return { isLoading, files, error }
}
