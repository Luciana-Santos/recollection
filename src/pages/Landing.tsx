import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'

const Landing = () => {
  return (
    <div className="w-[min(100%-2rem,_80rem)] mx-auto py-20 relative mesh-gradient">
      <header className="mb-32">
        <Logo showDescription />
      </header>

      <main className="grid gap-10 max-w-[620px] ">
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
            to="#"
            className="btn-link bg-primary hover:bg-primary/90 outline outline-1 outline-primary"
          >
            Login
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Landing
