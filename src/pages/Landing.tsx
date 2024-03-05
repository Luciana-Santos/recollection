import Container from '@/components/Container'
import Logo from '@/components/Logo'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Container className="py-20">
      <header className="mb-32">
        <Logo />
      </header>

      <main className="grid gap-10 max-w-[620px] mesh-gradient">
        <h1 className="font-yeseva text-[clamp(1.5rem,_4vw,_2rem)]">
          File Management App
        </h1>

        <p className="text-[clamp(1rem,_4vw,_1.2rem)]">
          Simplify your digital life with our easy-to-use file management app.
          Effortlessly organize, access, and share your files with just a few
          taps. Say goodbye to clutter and hello to simplicity!
        </p>

        <div className="flex gap-5">
          <Link
            to="/login"
            className="btn-link bg-primary hover:bg-primary/90 outline outline-1 outline-primary"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn-link hover:bg-primary outline outline-1 outline-primary text-primary hover:text-inherit"
          >
            Register
          </Link>
        </div>
      </main>
    </Container>
  )
}

export default Landing
