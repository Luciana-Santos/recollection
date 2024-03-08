const App = () => {
  return (
    <main className="wrapper w-[min(100%-2rem_,60rem)] mx-auto grid items-center h-[100vh]">
      <h1 className="font-yeseva  text-[clamp(28px_,5vw_,40px)] text-center">
        Em construção...
      </h1>
      <div className="grid place-items-center ml-[-84px]">
        <div className="max-w-[100px] animate-[spin-right_5s_linear_0s_infinite]">
          <img
            src="/assets/gear.svg"
            alt="Pink gear rotating to the right side"
          />
        </div>

        <div className="max-w-[100px] animate-[spin-left_5s_linear_0s_infinite] mt-[-55px] mr-[-159px]">
          <img
            src="/assets/gear2.svg"
            alt="Orange gear rotating to the left side"
          />
        </div>
      </div>

      <p className="text-foreground text-center max-w-md place-self-center">
        Esta página está ainda em construção, mas você pode conferir{' '}
        <a
          href="https://luciana.dev/"
          className="text-secondary hover:underline italic"
        >
          aqui
        </a>{' '}
        outros projetos já concluídos.
      </p>
    </main>
  )
}

export default App
