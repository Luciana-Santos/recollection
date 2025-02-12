import { getFiles } from '@/services/apiFiles'
import { ICardData } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

export function useFiles(tag?: number) {
  const [searchParams] = useSearchParams()

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'created_at-desc'
  const [field, direction] = sortByRaw.split('-')
  const sortBy = { field, direction }

  const {
    data: files = [],
    isLoading,
    error,
  } = useQuery<ICardData[]>({
    queryKey: ['files', sortBy],
    queryFn: () => getFiles({ tag, sortBy }),
  })

  return { isLoading, files, error }
}
