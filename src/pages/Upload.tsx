import TagItem from '@/components/TagItem'
import Title from '@/components/Title'
import { tags } from '@/data/content'
import { Image } from 'lucide-react'

const Upload = () => {
  return (
    <div className="page-layout">
      <Title>Upload</Title>

      <main className="main-content">
        <form className="w-full flex flex-col gap-10">
          <input
            type="text"
            placeholder="Title"
            className="bg-[transparent] border-b-2 border-gray-300 w-full text-3xl placeholder:text-gray-300 py-2 px-1"
          />

          <div className="flex flex-wrap gap-3">
            <p className="text-gray-300">Tags:</p>
            {tags.map((tag) => {
              return (
                <TagItem key={tag.id} name={tag.name}>
                  {tag.name}
                </TagItem>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-y-5 gap-x-10 items-center  md:gap-y-10 justify-center">
            <div className="w-[265px] h-[162px] md:row-span-full rounded-xl overflow-hidden justify-self-center bg-gray-900 grid place-items-center flex-2">
              <Image className="text-gray-300" />
            </div>

            <div className="flex flex-col gap-10 flex-1">
              <label
                htmlFor="file"
                className="text-gray-300 grid gap-3 md:row-start-1"
              >
                Upload an image:
                <input type="file" name="file" id="file" />
              </label>

              <fieldset className="flex flex-col gap-3">
                <label htmlFor="url" className="text-gray-300 md:row-start-2">
                  Url:
                </label>
                <input
                  type="text"
                  placeholder="url"
                  id="url"
                  className="px-2 py-2 text-grayW rounded-md bg-gray-900"
                />
              </fieldset>
            </div>
          </div>

          <fieldset className="flex gap-5 justify-end mt-8 items-center">
            <button className="text-gray-300 hover:text-gray-100 hover:underline">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-sm py-3 w-[130px] hover:tracking-widest text-center uppercase tracking-wide grad leading-none transition-all duration-300 ease-in-out text-white"
            >
              Upload
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  )
}

export default Upload
