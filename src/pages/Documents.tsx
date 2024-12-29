import FileGridView from '../features/files/FileGridView'
import Heading from '../ui/Heading'

function Documents() {
  return (
    <div className="max-h-screen sm:min-h-screen grid grid-rows-[130px_1fr] bg-gray-700 overflow-hidden">
      <Heading>Recents</Heading>

      <FileGridView />
    </div>
  )
}

export default Documents
