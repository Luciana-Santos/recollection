import Logo from '@/components/Logo'
import { RiGoogleLine } from 'react-icons/ri'

const Register = () => {
  return (
    <main className="h-screen w-screen grid items-center justify-center">
      <div className="py-20 bg-gray-700 rounded-2xl px-10 sm:px-24 gap-12 grid justify-center text-center">
        <Logo showDescription className="flex-col items-center" />

        <div className="grid gap-5">
          <h1 className="text-xl text-gray-300">Register</h1>
          <button className="flex gap-2 border hover:border-gray-200 rounded-sm py-2 px-3 justify-center items-center text-secondary border-secondary hover:text-gray-100">
            <RiGoogleLine size={20} />
            Sign up with Google
          </button>
        </div>

        <div className="grid gap-5">
          <h2 className="text-gray-300 text-xs uppercase">or</h2>
          <button className="flex gap-2 border text-gray-300 border-gray-300 rounded-sm justify-center py-2 px-3 items-center hover:text-secondary hover:border-secondary">
            <RiGoogleLine size={20} />
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  )
}

export default Register
