import { Ghost } from 'lucide-react'

function EmptyGridView() {
  return (
    <div className="overflow-hidden min-h-screen bg-gray-700 rounded-t-2xl">
      <main className="min-w-screen flex flex-col gap-4 items-center p-10 max-h-screen px-10 text-center">
        <h3 className="text-gray-300">Nothing here yet!</h3>
        <Ghost size={40} className="text-gray-300" />
      </main>
    </div>
  )
}

export default EmptyGridView
