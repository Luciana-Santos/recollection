import { FilePenLine, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const FileItem = () => {
  return (
    <main className="wrapper my-12 sm:my-5 bg-gray-700 rounded-md overflow-y-auto main-content-scroll relative px-5 md:px-8">
      <FilePenLine className="absolute top-4 right-3 text-gray-300 cursor-pointer" />

      <h1 className="text-center text-[clamp(1.5rem,_4vw,_2rem)] mb-4">
        file title
      </h1>

      <div className="flex flex-wrap justify-center gap-8 items-center mb-12">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-gray-300 text-sm">Tag:</span>
          <Link
            to="/dashboard/photos"
            className="bg-gray-900 px-3 py-1 rounded-2xl hover:bg-primary"
          >
            image
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-gray-300 text-sm">Date:</span>
          <p>31/03/23</p>
        </div>

        <Trash2 size={20} className="text-gray-300 cursor-pointer" />
      </div>

      <div className="flex flex-col md:flex-row *:flex-1 gap-5">
        <div className="grid gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-gray-300 ">Notes:</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
              quibusdam.
            </p>
          </div>
          <div className="flex gap-2 h-max items-center">
            <span className="text-gray-300">Link:</span>
            <Link
              to="#"
              className="py-4 text-secondary hover:text-gray-100 underline"
            >
              Acessar
            </Link>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden">
          <img
            src="https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/sistema_solar-preview.jpg?raw=true"
            alt=""
          />
        </div>
      </div>
    </main>
  )
}

export default FileItem
