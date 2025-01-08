import { zodResolver } from '@hookform/resolvers/zod'
import { ImagePlus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { formSchema, FormSchemaType } from './formSchema'
import { useUploadFile } from './useUploadFile'
import { useUpdateFile } from './useUpdateFile'
import { useLocation, useNavigate } from 'react-router-dom'

function AddFile() {
  const { state } = useLocation()
  const isEditSession = Boolean(state)
  const { uploadFile, isUploading } = useUploadFile()
  const { updateFile, isUpdating } = useUpdateFile()
  const navigate = useNavigate()

  const defaultValues = isEditSession
    ? {
        title: state?.title || '',
        link: state?.link || '',
        tag: state?.tag.id || '',
        image: state?.image || '',
      }
    : { title: '', link: '', tag: '', image: '' }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const isWorking = isUpdating || isUploading

  const handleOnSubmit = (data: FormSchemaType) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0]

    if (isEditSession)
      updateFile(
        { newFileData: { ...data, image }, id: state.id },
        {
          onSuccess: () => {
            reset()
            navigate(`/file/${state.id}`)
          },
        },
      )
    else
      uploadFile(
        { ...data, image: image },
        {
          onSuccess: (res) => {
            reset()
            navigate(`/file/${res.id}`)
          },
        },
      )
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="w-full flex flex-col gap-10 main-content-scroll overflow-y-scroll min-h-0 py-8 px-5"
      >
        <fieldset className="relative">
          <input
            disabled={isWorking}
            type="text"
            placeholder="Title"
            className="bg-[transparent] border-b-2 border-gray-300 w-full  placeholder:text-gray-300 py-2 px-1 text-[clamp(1.2rem,_4vw,_1.5rem)]  focus:rounded-md focus:outline-none focus:ring focus:ring-secondary"
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
              <li className="check">
                <input
                  disabled={isWorking}
                  type="radio"
                  id="image"
                  value="1"
                  className="fixed w-0 opacity-0"
                  {...register('tag')}
                  defaultChecked={state && state?.tag === 1}
                />
                <label
                  htmlFor="image"
                  className="text-white cursor-pointer rounded-2xl px-3 py-2 bg-gray-900"
                >
                  image
                </label>
              </li>

              <li className="check">
                <input
                  disabled={isWorking}
                  type="radio"
                  id="document"
                  value="2"
                  {...register('tag')}
                  className="fixed w-0 opacity-0"
                  defaultChecked={state && state?.tag === 2}
                />
                <label
                  htmlFor="document"
                  className="text-white cursor-pointer rounded-2xl px-3 py-2 bg-gray-900"
                >
                  document
                </label>
              </li>

              <li className="check">
                <input
                  disabled={isWorking}
                  type="radio"
                  id="links"
                  value="3"
                  {...register('tag')}
                  className="fixed w-0 opacity-0"
                  defaultChecked={state && state?.tag === 3}
                />
                <label
                  htmlFor="links"
                  className="text-white cursor-pointer rounded-2xl px-3 py-2 bg-gray-900"
                >
                  links
                </label>
              </li>

              <li className="check">
                <input
                  disabled={isWorking}
                  type="radio"
                  id="video"
                  value="4"
                  {...register('tag')}
                  className="fixed w-0 opacity-0"
                  defaultChecked={state && state?.tag === 4}
                />
                <label
                  htmlFor="video"
                  className="text-white cursor-pointer rounded-2xl px-3 py-2 bg-gray-900"
                >
                  videos
                </label>
              </li>
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
              {errors.link?.message && (
                <span className="text-red-500 text-xs absolute -bottom-7 right-0">
                  {errors.link?.message}
                </span>
              )}
            </fieldset>

            <fieldset className="flex flex-col gap-1 content-start">
              <label htmlFor="notes" className="text-gray-300 md:row-start-2">
                Notes:
              </label>
              <textarea
                disabled={isWorking}
                id="notes"
                rows={4}
                className="px-2 py-2 text-gray rounded-md bg-gray-900 w-full aspect-[3/1] focus:outline-none focus:ring focus:ring-secondary"
                {...register('notes')}
              />
            </fieldset>
          </div>

          <div className="grid gap-1 content-start relative">
            <h2 className="text-gray-300">Upload an image:</h2>

            <label
              htmlFor="fileUpload"
              className="grid cursor-pointer aspect-[1.6] object-cover rounded-md overflow-hidden bg-gray-900 place-items-center"
            >
              <ImagePlus className="text-gray-300" />
              <input
                disabled={isWorking}
                type="file"
                id="fileUpload"
                className="hidden"
                {...register('image')}
              />
            </label>
            {errors.image?.message && (
              <span className="text-red-500 text-xs absolute -bottom-7 right-0">
                {String(errors.image?.message)}
              </span>
            )}
          </div>
        </section>

        <div className="flex gap-5 justify-end">
          <button type="reset" className="text-gray-300 hover:underline">
            Cancel
          </button>
          <button
            disabled={isWorking}
            type="submit"
            className="w-[120px] main-action"
          >
            {isEditSession ? 'Update' : 'Upload'}
          </button>
        </div>
      </form>
    </>
  )
}

export default AddFile
