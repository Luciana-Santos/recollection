import { Image } from 'lucide-react'
import { ICardData } from '../types/types'
import { Link } from 'react-router-dom'
import CardContextMenu from './CardContextMenu'

function Card({ data, className }: { data: ICardData; className?: string }) {
  return (
    <article
      className={`${className} grid gap-2 cursor-pointer transition-colors`}
    >
      <Link
        to={`/file/${data.id}`}
        className="aspect-[1.6] overflow-hidden rounded-xl grid items-center justify-center bg-gray-900 hover:text-secondary transition-colors"
      >
        {data.image ? <img src={data.image} /> : <Image className="" />}
      </Link>

      <div className="flex items-center grid-col-[2fr, 1fr] justify-between">
        <Link
          to={`/file/${data.id}`}
          className="text-xs grow hover:text-secondary transition-colors"
        >
          {data.title}
        </Link>
        <CardContextMenu list={['Details', 'Edit', 'Delete']} />
      </div>
    </article>
  )
}

export default Card
