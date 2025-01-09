import { getFile } from '@/services/apiFiles'
import { ICardData } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export function useFile() {
  const { fileId } = useParams()

  const {
    isLoading,
    data: file,
    error,
  } = useQuery<ICardData>({
    queryKey: ['file', fileId],
    queryFn: () => getFile(fileId ?? ''),
    retry: false,
  })

  return { isLoading, file, error }
}
