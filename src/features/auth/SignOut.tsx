import { Children } from '@/types/types'
import { useLogout } from './useLogout'

function SignOut({ children }: Children) {
  const { logout, isLoading } = useLogout()

  return (
    <button
      disabled={isLoading}
      onClick={() => logout()}
      className="flex text-gray-300 gap-2 hover:text-gray-100 transition-all duration-300 ease-in-out"
    >
      {children}
    </button>
  )
}

export default SignOut
