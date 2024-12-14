import Logo from '../Logo'

const LandingLoading = () => {
  return (
    <main className="py-20 grid justify-center content-center min-h-screen w-[min(100%-2rem,_60rem)] mx-auto relative">
      <div className="relative grid">
        <Logo
          showDescription
          className="flex-col items-center absolute self-center text-center justify-self-center cursor-progress"
        />
        <div className="mesh-1 animate-pulse animate-infinite animate-duration-[4000ms] animate-ease-linear" />
        <div className="mesh-2 animate-pulse animate-infinite animate-duration-[4000ms] animate-ease-linear" />
      </div>
    </main>
  )
}

export default LandingLoading
