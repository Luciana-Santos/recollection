import { getStoredFiles } from '@/lib/utils'
import { ICardData } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

type SortBy = {
  field: keyof ICardData
  direction: 'asc' | 'desc'
}

export function useFiles(tag?: string) {
  const [searchParams] = useSearchParams()

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'created_at-desc'
  const [field, direction] = sortByRaw.split('-')
  const sortBy: SortBy = {
    field: field as keyof ICardData,
    direction: direction as 'asc' | 'desc',
  }

  const {
    data: files = [],
    isLoading,
    error,
  } = useQuery<ICardData[]>({
    queryKey: ['files', sortBy, tag],
    queryFn: async () => {
      let filteredFiles = getStoredFiles()

      // filtra por tag, se houver
      if (tag) {
        filteredFiles = filteredFiles.filter((f) => f.tag === String(tag))
      }

      // ordena pelo campo
      filteredFiles.sort((a, b) => {
        const aField = a[sortBy.field]
        const bField = b[sortBy.field]

        if (typeof aField === 'string' && typeof bField === 'string') {
          return sortBy.direction === 'asc'
            ? aField.localeCompare(bField)
            : bField.localeCompare(aField)
        }
        return sortBy.direction === 'asc'
          ? Number(aField) - Number(bField)
          : Number(bField) - Number(aField)
      })

      return filteredFiles
    },
  })

  return { isLoading, files, error }
}
