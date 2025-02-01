import SignIn from '@/features/auth/SignIn'
import Logo from '../ui/Logo'

function Login() {
  return (
    <main className="h-screen w-screen grid items-center justify-center">
      <div className="py-20 bg-gray-700 rounded-2xl px-10 sm:px-24 gap-12 grid justify-center text-center">
        <Logo showDescription className="flex-col items-center" />

        <SignIn />
      </div>
    </main>
  )
}

export default Login
