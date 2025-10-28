import { getStoredFiles, saveStoredFiles } from '@/lib/utils'
import { ICardData } from '@/types/types'

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
}: GetFiles): Promise<ICardData[]> {
  await new Promise((r) => setTimeout(r, 200))

  let files = getStoredFiles()

  if (tag) {
    files = files.filter((f) => f.tag === tag)
  }

  if (sortBy) {
    files.sort((a, b) => {
      const aValue = a[sortBy.field] ?? ''
      const bValue = b[sortBy.field] ?? ''

      if (aValue < bValue) return sortBy.direction === 'asc' ? -1 : 1
      if (aValue > bValue) return sortBy.direction === 'asc' ? 1 : -1
      return 0
    })
  }

  return files
}

export async function getFile(id: string) {
  await new Promise((r) => setTimeout(r, 200))

  return getStoredFiles().find((f) => f.id === id) || null
}

export async function createFile(newFile: ICardData) {
  await new Promise((r) => setTimeout(r, 200))

  const files = getStoredFiles()
  files.push(newFile)
  saveStoredFiles(files)

  return newFile
}

export async function updateFile(file: ICardData) {
  await new Promise((r) => setTimeout(r, 200))

  const files = getStoredFiles()
  const fileIdx = files.findIndex((f) => f.id === file.id)
  if (fileIdx !== -1) {
    files[fileIdx] = file
    saveStoredFiles(files)
  }

  return file
}

export async function deleteFile(id: string): Promise<void> {
  await new Promise((r) => setTimeout(r, 200))

  const files = getStoredFiles().filter((f) => f.id !== id)
  saveStoredFiles(files)
}
