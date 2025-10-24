import { User } from '@/types/types'

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  await new Promise((r) => setTimeout(r, 300))

  if (email !== 'teste@demo.com' && password !== 'secret') {
    throw new Error('Invalid credentials')
  }

  const user = {
    email,
  }

  localStorage.setItem('user', JSON.stringify(user))
  return user
}

export async function getCurrentUser(): Promise<User | null> {
  await new Promise((r) => setTimeout(r, 200))

  const stored = localStorage.getItem('user')
  if (!stored) return null

  return JSON.parse(stored) as User
}

export async function logout() {
  await new Promise((r) => setTimeout(r, 100))
  localStorage.removeItem('user')
}
