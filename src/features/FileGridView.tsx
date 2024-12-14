import { mockDataModal } from '../data/content'
import EmptyGridView from '../ui/EmptyGridView'
import FileItem from '../ui/FileItem'

function FileGridView() {
  if (mockDataModal.length < 1) return <EmptyGridView />

  if (mockDataModal.length === 1) {
    return (
      <div className="overflow-hidden min-h-screen  bg-gray-700 rounded-t-2xl">
        <main className="main-content items-center">
          {mockDataModal.map((item) => {
            return (
              <FileItem key={item.id} data={item} className="max-w-[200px]" />
            )
          })}
        </main>
      </div>
    )
  }

  return (
    <main className="overflow-hidden bg-gray-700 flex flex-col rounded-t-2xl">
      <div className="main-content">
        {mockDataModal.map((item) => {
          return <FileItem key={item.id} data={item} />
        })}
      </div>
    </main>
  )
}

export default FileGridView
