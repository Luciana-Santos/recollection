import { Link } from 'react-router-dom'
import Container from '../ui/Container'

function ErrorPage() {
  return (
    <Container className="grid justify-center items-center min-h-screen py-10">
      <main className="grid gap-14">
        <h1 className="text-[clamp(1.2rem,_4vw,_1.6rem)] text-center">
          Parece que essa página foi excluída... ou nunca existiu.
        </h1>

        <div className="min-w-60 max-w-96 mx-auto">
          <img
            src="/assets/img/404.svg"
            alt="Recollection cloud logo"
            className="w-full"
          />
        </div>

        <Link
          to="/recents"
          className="main-action px-5 w-24 justify-self-center"
        >
          Home
        </Link>
      </main>
    </Container>
  )
}

export default ErrorPage
