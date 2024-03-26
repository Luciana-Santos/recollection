import { User } from 'firebase/auth'

export interface IAuth {
  user: User | null
  loading: boolean
  signIn: () => void
  signOut: () => void
}
