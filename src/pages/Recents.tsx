import FileGridView from '../features/files/FileGridView'
import Heading from '../ui/Heading'

function Recents() {
  return (
    <div className="max-h-screen sm:min-h-screen grid grid-rows-[130px_1fr] bg-gray-700 overflow-hidden">
      <Heading>Recents</Heading>

      <FileGridView showSortBy={false} />
    </div>
  )
}

export default Recents
