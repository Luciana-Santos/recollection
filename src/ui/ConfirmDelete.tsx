import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './AlertDialog'

function ConfirmDelete({ disabled, onConfirm }) {
  return (
    <>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            file!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-gray-700"
            disabled={disabled}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={disabled}
            onClick={onConfirm}
            className="bg-primary"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  )
}

export default ConfirmDelete
