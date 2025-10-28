import { zodResolver } from '@hookform/resolvers/zod'
import { ImagePlus, LoaderCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { formSchema, FormSchemaType } from './formSchema'
import { useUpdateFile } from './useUpdateFile'
import { useUploadFile } from './useUploadFile'
import { ICardData } from '@/types/types'

function AddFile() {
  const { state } = useLocation()
  const isEditSession = Boolean(state)
  const { uploadFile, isUploading } = useUploadFile()
  const { updateFile, isUpdating } = useUpdateFile()
  const navigate = useNavigate()

  const defaultValues = isEditSession
    ? {
        tag: state?.tag || '',
        link: state?.link || '',
        image: state?.image || '',
        title: state?.title || '',
        notes: state?.notes || '',
      }
    : { tag: '', link: '', image: '', title: '', notes: '' }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const isWorking = isUpdating || isUploading
  const imageFile = watch('image')

  let previewSrc: string | null = null
  if (isEditSession && state?.image) {
    previewSrc = state.image
  } else if (imageFile instanceof FileList && imageFile.length > 0) {
    previewSrc = URL.createObjectURL(imageFile[0])
  } else if (typeof imageFile === 'string' && imageFile.trim() !== '') {
    previewSrc = imageFile
  }

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })

  const handleOnSubmit = async (data: FormSchemaType) => {
    let image: string | undefined

    if (data.image instanceof FileList && data.image.length > 0) {
      image = await fileToBase64(data.image[0])
    } else if (typeof data.image === 'string') {
      image = data.image
    }

    const fileData: ICardData = {
      id: state?.id || Math.random().toString(),
      title: data.title,
      tag: data.tag,
      image: image || '',
      created_at: new Date().toISOString(),
      notes: data.notes || '',
      link: data.link || '',
    }

    if (isEditSession) {
      updateFile({ newFileData: fileData })
    } else {
      uploadFile(fileData)
    }

    reset()
    navigate('/recents')
  }

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="w-full flex flex-col gap-10 main-content-scroll overflow-y-scroll min-h-0 py-8 px-5"
    >
      <fieldset className="relative">
        <input
          disabled={isWorking}
          type="text"
          placeholder="Title"
          className="bg-[transparent] border-b-2 border-gray-300 w-full placeholder:text-gray-300 py-2 px-1 text-[clamp(1.2rem,_4vw,_1.5rem)] focus:rounded-md focus:outline-none focus:ring focus:ring-secondary"
          {...register('title')}
        />
        {errors.title?.message && (
          <span className="text-red-500 text-xs absolute -bottom-7 right-0">
            {errors.title?.message}
          </span>
        )}
      </fieldset>

      <div className="flex flex-wrap gap-3 items-center">
        <p className="text-gray-300">Tags:</p>
        <fieldset className="relative">
          <ul className="flex gap-3 flex-wrap">
            {['images', 'documents', 'links', 'videos'].map((t) => (
              <li key={t} className="check">
                <input
                  disabled={isWorking}
                  type="radio"
                  id={t}
                  value={t}
                  className="fixed w-0 opacity-0"
                  {...register('tag')}
                />
                <label
                  htmlFor={t}
                  className="text-white cursor-pointer rounded-2xl px-3 py-2 bg-gray-900"
                >
                  {t}
                </label>
              </li>
            ))}
          </ul>
          {errors.tag?.message && (
            <span className="text-red-500 text-xs absolute -bottom-7 right-0">
              {errors.tag?.message}
            </span>
          )}
        </fieldset>
      </div>

      <section className="grid gap-10 md:gap-y-10 content-start flex-1 lg:grid-cols-2">
        <div className="grid gap-10 content-start">
          <fieldset className="flex flex-col gap-1 relative">
            <label htmlFor="url" className="text-gray-300 md:row-start-2">
              Url:
            </label>
            <input
              disabled={isWorking}
              type="text"
              placeholder="https://url.com"
              id="url"
              className="px-2 py-2 text-gray rounded-md bg-gray-900 w-full focus:outline-none focus:ring focus:ring-secondary"
              {...register('link')}
            />
          </fieldset>

          <fieldset className="flex flex-col gap-1 content-start">
            <label htmlFor="notes" className="text-gray-300 md:row-start-2">
              Notes:
            </label>
            <textarea
              disabled={isWorking}
              id="notes"
              rows={4}
              className="px-2 py-2 text-gray rounded-md bg-gray-900 w-full aspect-[3/1] focus:outline-none focus:ring focus:ring-secondary resize-y"
              {...register('notes')}
            />
          </fieldset>
        </div>

        <div className="grid gap-1 content-start relative">
          <h2 className="text-gray-300">Upload an image:</h2>
          <label
            htmlFor="fileUpload"
            className="grid cursor-pointer aspect-[1.6] object-center object-cover rounded-md overflow-hidden bg-gray-900 place-items-center"
          >
            {previewSrc === null ? (
              <ImagePlus className="text-gray-300" />
            ) : (
              <img
                src={previewSrc}
                alt="Preview"
                className="object-cover object-center aspect-[1.6]"
              />
            )}
            <input
              disabled={isWorking}
              type="file"
              id="fileUpload"
              className="hidden"
              {...register('image')}
            />
          </label>
        </div>
      </section>

      <div className="flex gap-5 justify-end">
        <button
          disabled={isWorking}
          type="reset"
          className="text-gray-300 hover:underline"
        >
          Cancel
        </button>
        <button
          disabled={isWorking}
          type="submit"
          className="w-[120px] main-action flex gap-2 items-center justify-center"
        >
          {!isWorking && (isEditSession ? 'Update' : 'Upload')}
          {isWorking && <LoaderCircle className="animate-spin" />}
        </button>
      </div>
    </form>
  )
}

export default AddFile
