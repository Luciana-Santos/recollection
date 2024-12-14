import AddFile from '../features/AddFile'
import Heading from '../ui/Heading'

function Upload() {
  return (
    <div className="max-h-screen sm:min-h-screen grid grid-rows-[130px_1fr] bg-gray-700 overflow-hidden">
      <Heading>Upload</Heading>

      <main className="overflow-hidden rounded-t-2xl bg-gray-700 flex flex-col">
        <AddFile />
      </main>
    </div>
  )
}

export default Upload
