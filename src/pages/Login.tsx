import Logo from '@/components/Logo'
import { useAuth } from '@/store/AuthContext'
import { RiGoogleLine } from 'react-icons/ri'

const Login = () => {
  const { signIn } = useAuth()

  return (
    <main className="h-screen w-screen grid items-center justify-center">
      <div className="py-20 bg-gray-700 rounded-2xl px-10 sm:px-24 gap-12 grid justify-center text-center">
        <Logo showDescription className="flex-col items-center" />

        <button
          className="flex gap-2 border hover:border-gray-200 rounded-sm py-2 px-3 items-center justify-center text-secondary border-secondary hover:text-gray-100"
          onClick={signIn}
        >
          <RiGoogleLine size={20} />
          Sign in with Google
        </button>
      </div>
    </main>
  )
}

export default Login
