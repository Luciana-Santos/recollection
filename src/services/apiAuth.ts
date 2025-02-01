import supabase from './supabase'

export async function login() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })

  if (error) throw new Error(error.message)

  return data
}
