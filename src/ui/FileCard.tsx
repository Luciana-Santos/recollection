import { Link } from 'react-router-dom'
import { ICardData } from '../types/types'
import { AlertDialog } from './AlertDialog'
import FileContextMenu from './FileContextMenu'

function FileCard({
  data,
  className,
}: {
  data: ICardData
  className?: string
}) {
  return (
    <article
      className={`${className} grid gap-2 cursor-pointer transition-colors`}
    >
      <Link
        to={`/file/${data.id}`}
        className="aspect-[1.6] overflow-hidden rounded-xl grid bg-gray-900 hover:text-secondary transition-colors"
      >
        {data.image.endsWith('undefined') ? (
          <img
            src="/assets/img/image-placeholder.svg"
            alt="Image icon placeholdedr"
            className="justify-self-center self-center max-w-16 bg-cover bg-center overflow-hidden"
          />
        ) : (
          <img
            src={data.image}
            className="aspect-[1.6] object-cover object-center"
          />
        )}
      </Link>

      <div className="flex items-center grid-col-[2fr, 1fr] justify-between">
        <Link
          to={`/file/${data.id}`}
          className="text-[clamp(0.75rem,_4vw,_1rem)] grow hover:text-secondary transition-colors"
        >
          {data.title}
        </Link>
        <AlertDialog>
          <FileContextMenu id={data.id} action={'Details'} data={data} />
        </AlertDialog>
      </div>
    </article>
  )
}

export default FileCard
