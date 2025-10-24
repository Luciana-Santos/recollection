import { mockDataModal } from '@/data/content'
import { ICardData } from '@/types/types'
import toast from 'react-hot-toast'

type GetFiles = {
  tag?: string
  sortBy?: {
    field: keyof ICardData
    direction: 'asc' | 'desc'
  }
}

export async function getFiles({
  tag,
  sortBy = { field: 'created_at', direction: 'asc' },
}: GetFiles) {
  let files = [...mockDataModal]

  if (tag) files = files.filter((f) => f.tag === tag)

  files.sort((a, b) => {
    if (a[sortBy.field] < b[sortBy.field])
      return sortBy.direction === 'asc' ? -1 : 1
    if (a[sortBy.field] > b[sortBy.field])
      return sortBy.direction === 'desc' ? 1 : -1
    return 0
  })

  return files
}

export async function getFile(id: string) {
  await new Promise((r) => setTimeout(r, 200))
  return mockDataModal.find((f) => f.id === id) || null
}

export async function createEditFile(newFile?: ICardData) {
  await new Promise((r) => setTimeout(r, 200))

  toast(
    'Tentando salvar um arquivo? Boa tentativa. Modo demo apenas, nada será alterado.',
  )

  return newFile || null
}

export async function deleteFile() {
  await new Promise((r) => setTimeout(r, 200))

  toast(
    'Tentando deletar um arquivo? Fica tranquilo, modo demo proíbe exclusão.',
  )

  return null
}
