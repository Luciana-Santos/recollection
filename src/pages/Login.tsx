import GoogleIcon from '../ui/GoogleIcon'
import Logo from '../ui/Logo'

function Login() {
  return (
    <main className="h-screen w-screen grid items-center justify-center">
      <div className="py-20 bg-gray-700 rounded-2xl px-10 sm:px-24 gap-12 grid justify-center text-center">
        <Logo showDescription className="flex-col items-center" />

        <button className="flex gap-2 border hover:border-secondary rounded-sm py-2 px-3 items-center justify-center text-gray-300 border-gray-300 hover:text-secondary">
          <GoogleIcon />
          Sign in with Google
        </button>
      </div>
    </main>
  )
}

export default Login
