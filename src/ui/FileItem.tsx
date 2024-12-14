import { IFileItemData } from '../types/types'

function FileItem({
  data,
  className,
}: {
  data: IFileItemData
  className?: string
}) {
  return (
    <div className={`${className}  cursor-pointer`}>
      <div className="aspect-[1.6] overflow-hidden rounded-xl grid items-center justify-center bg-gray-900">
        <img src={data.image} alt={data.title} />
      </div>

      <h3 className="text-xs mt-3">{data.title}</h3>
    </div>
  )
}

export default FileItem
