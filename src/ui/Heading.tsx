import { Children } from '../types/types'

function Heading({ children }: Children) {
  return (
    <h1 className="text-center text-2xl tracking-wider uppercase py-10 font-yeseva border-b border-gray-900">
      {children}
    </h1>
  )
}

export default Heading
