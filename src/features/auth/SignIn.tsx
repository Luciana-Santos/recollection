import GoogleIcon from '@/ui/GoogleIcon'
import { useLogin } from './useLogin'

function SignIn() {
  const { login, isLoging } = useLogin()

  return (
    <button
      onClick={() => login}
      disabled={isLoging}
      className="flex gap-2 border hover:border-secondary rounded-sm py-2 px-3 items-center justify-center text-gray-300 border-gray-300 hover:text-secondary"
    >
      <GoogleIcon />
      Sign in with Google
    </button>
  )
}

export default SignIn
