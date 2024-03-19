import { Link } from 'react-router-dom'
import CardContextMenu from './CardContextMenu'

interface Props {
  data: {
    id: string
    title: string
    image: string
    date: string
    tag: string
    notes: string
    link: string
  }
}

const Card = ({ data }: Props) => {
  const { id, image, title } = data

  return (
    <article>
      <div>
        <Link
          to={`../file/${id}`}
          className="max-w-[200px] rounded-xl overflow-hidden block"
        >
          <img src={image} alt={title} />
        </Link>
        <div className="flex items-center justify-between py-2">
          <Link to={`../file/${id}`}>{title}</Link>

          <CardContextMenu />
        </div>
      </div>
    </article>
  )
}

export default Card
