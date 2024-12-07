type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`w-[min(100%-2rem,_60rem)] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
