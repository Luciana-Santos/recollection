import CardContextMenu from '@/ui/CardContextMenu'
import { ArrowDownToLine, Image } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useFile } from './useFile'
import { format } from 'date-fns'
import FileSkeleton from '@/ui/FileSkeleton'
import EmptyGridView from '@/ui/EmptyGridView'

function FileDetails() {
  const { file, isLoading } = useFile()

  if (isLoading) return <FileSkeleton />
  if (!file) return <EmptyGridView />

  const {
    created_at,
    id,
    image,
    link,
    notes,
    title,
    tag: { title: tagTitle },
  } = file

  return (
    <main className="overflow-hidden bg-gray-700 flex flex-col">
      <div className="grid gap-4 justify-center content-start main-content-scroll overflow-y-scroll pt-20 min-h-screen sm:max-h-screen px-10 grow grid-row-[130px,_1fr]">
        <h1 className="text-center text-[clamp(1.5rem,_4vw,_2rem)] mb-4">
          {title}
        </h1>

        <div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center mb-12">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-300 text-sm">Tag:</span>
              <Link
                to="/dashboard/photos"
                className="bg-gray-900 px-3 py-1 rounded-2xl hover:bg-primary"
              >
                {tagTitle}
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-300 text-sm">Date:</span>
              <p>{format(new Date(created_at), 'dd/MM/yyyy')}</p>
            </div>

            <CardContextMenu id={id} list={['Edit', 'Delete']} />
          </div>

          <div className="flex flex-col md:flex-row *:flex-1 gap-5">
            <div className="grid gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-gray-300 ">Notes:</span>
                <p>{notes}</p>
              </div>
              <div className="flex gap-2 h-max items-center">
                <span className="text-gray-300">Link:</span>
                <a
                  href={link}
                  className="py-4 text-secondary hover:text-gray-100 underline"
                >
                  Acessar
                </a>
              </div>
            </div>
            <div className="aspect-[1.6] overflow-hidden rounded-xl grid items-center justify-center bg-gray-900 relative group">
              {image ? (
                <img
                  src={image}
                  className="rounded-xl overflow-hidden object-cover  aspect-[1.6]"
                />
              ) : (
                <Image />
              )}

              <div className="absolute inset-0 text-lg bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                <button className="text-lg">
                  Donwload image <ArrowDownToLine className="mx-auto mt-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FileDetails
