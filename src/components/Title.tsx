type Props = {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <h1 className="font-yeseva tracking-widest text-[clamp(1.5rem,_4vw,_2rem)] text-center text-gray-300 uppercase">
      {children}
    </h1>
  )
}

export default Title
