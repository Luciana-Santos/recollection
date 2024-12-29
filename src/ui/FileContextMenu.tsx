import { useDeleteFile } from '@/features/files/useDeleteFile'
import { EllipsisVertical } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import ConfirmDelete from './ConfirmDelete'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './DropdownMenu'
import { AlertDialogTrigger } from './AlertDialog'

type Actions = {
  action?: string
  id: string
  goBack?: boolean
}

function FileContextMenu({ action, id, goBack = false }: Actions) {
  const navigate = useNavigate()
  const { isDeleting, deleteFile } = useDeleteFile()

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="focus:outline-none focus:ring focus:ring-secondary">
          <EllipsisVertical className=" hover:text-secondary transition-colors" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {action && (
            <Link to={`/file/${id}`}>
              <DropdownMenuItem>{action}</DropdownMenuItem>
            </Link>
          )}

          <Link to={`/file/${id}`}>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </Link>

          <DropdownMenuItem>
            <AlertDialogTrigger className="w-full text-left">
              Delete
            </AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ConfirmDelete
        disabled={isDeleting}
        onConfirm={() =>
          deleteFile(id, {
            onSettled: () => {
              if (goBack) navigate(-1)
            },
          })
        }
      />
    </>
  )
}

export default FileContextMenu
