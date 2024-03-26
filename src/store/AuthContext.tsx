import { auth, googleProvider } from '@/lib/firebase'
import { IAuth } from '@/types/types'
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext<IAuth>({
  user: auth.currentUser,
  loading: false,
  signIn: () => {},
  signOut: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      const response = await signInWithPopup(auth, googleProvider)
      setCurrentUser(response.user)
      console.log(response.user)
    } catch (error) {
      console.log(`signIn error, ${error}`)
    }
  }

  const handleSignOut = async () => {
    try {
      setIsLoading(true)
      await signOut(auth)
      console.log('sign out')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })

    return () => unsubscribe()
  }, [])

  const authValues: IAuth = {
    user: currentUser,
    loading: isLoading,
    signIn: handleSignIn,
    signOut: handleSignOut,
  }

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
