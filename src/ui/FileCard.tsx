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
  let imageSrc: string | undefined

  if (data.image) {
    if (typeof data.image === 'string') {
      imageSrc = data.image
    } else if (Array.isArray(data.image) && data.image[0] instanceof File) {
      imageSrc = URL.createObjectURL(data.image[0])
    } else if (data.image instanceof File) {
      imageSrc = URL.createObjectURL(data.image)
    }
  }

  const hasValidImage =
    imageSrc && !imageSrc.endsWith('undefined') && imageSrc.trim() !== ''

  return (
    <article
      className={`${
        className || ''
      } grid gap-2 cursor-pointer transition-colors`}
    >
      <Link
        to={`/file/${data.id}`}
        className="aspect-[1.6] overflow-hidden rounded-xl grid bg-gray-900 hover:text-secondary transition-colors"
      >
        {!hasValidImage ? (
          <img
            src="/assets/img/image-placeholder.svg"
            alt="Image placeholder"
            className="justify-self-center self-center max-w-16 bg-cover bg-center overflow-hidden"
          />
        ) : (
          <img
            src={imageSrc}
            alt={data.title || 'File image'}
            className="aspect-[1.6] object-cover object-center"
          />
        )}
      </Link>

      <div className="flex items-center justify-between">
        <Link
          to={`/file/${data.id}`}
          className="text-[clamp(0.75rem,_4vw,_1rem)] grow hover:text-secondary transition-colors w-[min(150px,_550px)] whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {data.title}
        </Link>
        <AlertDialog>
          <FileContextMenu id={data.id} action="Details" data={data} />
        </AlertDialog>
      </div>
    </article>
  )
}

export default FileCard
