import FileGridView from '../features/FileGridView'
import Heading from '../ui/Heading'

function Images() {
  return (
    <div className="max-h-screen sm:min-h-screen grid grid-rows-[130px_1fr] bg-gray-700 overflow-hidden">
      <Heading>Images</Heading>

      <FileGridView />
    </div>
  )
}

export default Images
