export interface ICardData {
  id: string
  title: string
  image: string | File | File[] | FileList | null
  created_at: string
  tag: string
  notes: string
  link: string
}

export type Children = {
  children: React.ReactNode
}

export type User = {
  email: string
  role: 'authenticated'
}
