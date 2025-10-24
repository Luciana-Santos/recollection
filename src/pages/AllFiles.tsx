import FileGridView from '../features/files/FileGridView'
import Heading from '../ui/Heading'

function AllFiles() {
  return (
    <div className="custom-h grid grid-rows-[130px_1fr] bg-gray-700 overflow-hidden">
      <Heading>All Files</Heading>
      <FileGridView />
    </div>
  )
}

export default AllFiles
