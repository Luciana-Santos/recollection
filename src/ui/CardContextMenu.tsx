import { EllipsisVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './DropdownMenu'

type List = {
  list: string[]
}

function CardContextMenu({ list }: List) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring focus:ring-secondary">
        <EllipsisVertical className=" hover:text-secondary transition-colors" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {list.map((item) => (
          <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CardContextMenu
