import FileGridView from '../features/files/FileGridView'
import Heading from '../ui/Heading'

function Links() {
  return (
    <div className="max-h-screen sm:min-h-screen grid grid-rows-[130px_1fr] bg-gray-700 overflow-hidden">
      <Heading>Links</Heading>

      <FileGridView tag="links" />
    </div>
  )
}

export default Links
