import { EllipsisVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './DropdownMenu'
import { Link } from 'react-router-dom'

type List = {
  list: string[]
  id: string
}

function CardContextMenu({ list, id }: List) {
  const [action1, action2, action3] = list

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring focus:ring-secondary">
        <EllipsisVertical className=" hover:text-secondary transition-colors" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to={`/file/${id}`}>
          <DropdownMenuItem>{action1}</DropdownMenuItem>
        </Link>

        <Link to={`/file/${id}`}>
          <DropdownMenuItem>{action2}</DropdownMenuItem>
        </Link>

        <DropdownMenuItem>{action3}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CardContextMenu
