import FileGridView from '../features/FileGridView'
import Heading from '../ui/Heading'

function AllFiles() {
  return (
    <div className="max-h-screen sm:min-h-screen grid grid-rows-[130px_1fr] bg-gray-700 overflow-hidden">
      <Heading>All Files</Heading>
      <FileGridView />
    </div>
  )
}

export default AllFiles
