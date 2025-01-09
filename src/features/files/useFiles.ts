import { getFiles } from '@/services/apiFiles'
import { ICardData } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

export function useFiles(tag?: number) {
  // const queryClient = useQueryClient()

  const {
    data: files = [],
    isLoading,
    error,
  } = useQuery<ICardData[]>({
    queryKey: ['files'],
    queryFn: () => getFiles(tag),
  })

  return { isLoading, files, error }
}
