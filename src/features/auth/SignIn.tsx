import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useLogin } from './useLogin'

const formSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type FormSchemaType = z.infer<typeof formSchema>

function SignIn() {
  const { login, isLoging } = useLogin()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: 'teste@demo.com', password: 'secret' },
  })

  const handleLogin = (data: FormSchemaType) => {
    login({ email: data.email, password: data.password })
    reset()
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(handleLogin)}>
      <fieldset className="relative">
        <input
          disabled={isLoging}
          type="email"
          placeholder="teste@demo.com"
          defaultValue="teste@demo.com"
          className="bg-[transparent] border-2 border-gray-300 w-full  placeholder:text-gray-300 p-2 text-[clamp(1.2rem,_4vw,_1.5rem)] rounded-md focus:boder-none focus:outline-none focus:ring focus:ring-secondary"
          {...register('email')}
        />
        {errors.email?.message && (
          <span className="text-red-500 text-xs absolute -bottom-7 right-0">
            {errors.email?.message}
          </span>
        )}
      </fieldset>

      <fieldset className="relative">
        <input
          disabled={isLoging}
          type="password"
          placeholder="secret"
          defaultValue="secret"
          className="bg-[transparent] border-2 border-gray-300 w-full  placeholder:text-gray-300 p-2 text-[clamp(1.2rem,_4vw,_1.5rem)] rounded-md focus:boder-none focus:outline-none focus:ring focus:ring-secondary"
          {...register('password')}
        />
        {errors.password?.message && (
          <span className="text-red-500 text-xs absolute -bottom-7 right-0">
            {errors.password?.message}
          </span>
        )}
      </fieldset>

      <button
        disabled={isLoging}
        className="flex gap-2 border hover:border-secondary rounded-sm py-2 px-3 items-center justify-center text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus:ring focus:ring-secondary"
      >
        Login
      </button>
    </form>
  )
}

export default SignIn
