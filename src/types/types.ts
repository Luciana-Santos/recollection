export interface ICardData {
  id: string
  title: string
  image: string
  created_at: string
  tag: { id: number; title: string }
  notes: string
  link: string
}

export type Children = {
  children: React.ReactNode
}
