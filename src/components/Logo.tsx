import { Link } from 'react-router-dom'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <Link to="/" className={`${className} flex gap-3`}>
      <img src="/logo.svg" alt="Recollection cloud logo" className="w-16" />

      <p className="grid font-yeseva uppercase text-[clamp(1.3rem,_4vw,_1.8rem)]">
        Recollection{' '}
        <span className="font-josefin capitalize text-base">
          File Management
        </span>
      </p>
    </Link>
  )
}

export default Logo
