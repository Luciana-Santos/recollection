import FileGridViewSkeleton from '@/ui/FileGridViewSkeleton'
import Card from '../../ui/FileCard'
import EmptyGridView from '../../ui/EmptyGridView'
import { useFiles } from './useFiles'
import FilesSortOperations from './FilesSortOperations'

type TagType = {
  tag?: number
  showSortBy?: boolean
}

function FileGridView({ tag, showSortBy = true }: TagType) {
  const { files, isLoading } = useFiles(tag)

  if (isLoading) return <FileGridViewSkeleton />

  if (!files.length) return <EmptyGridView />

  if (files.length === 1) {
    return (
      <div className="overflow-hidden flex flex-col min-h-screen bg-gray-700 rounded-t-2xl">
        {showSortBy && <FilesSortOperations />}
        <main className="main-content items-center">
          {files.map((file) => {
            return <Card key={file.id} data={file} className="max-w-[200px]" />
          })}
        </main>
      </div>
    )
  }

  return (
    <main className="overflow-hidden bg-gray-700 flex flex-col rounded-t-2xl">
      {showSortBy && <FilesSortOperations />}

      <div className="main-content">
        {files.map((file) => {
          return <Card key={file.id} data={file} />
        })}
      </div>
    </main>
  )
}

export default FileGridView
