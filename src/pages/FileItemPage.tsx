import CardContextMenu from '@/ui/CardContextMenu'
import { Link, useParams } from 'react-router-dom'

function FileItemPage() {
  const { fileId } = useParams()
  console.log(fileId)

  return (
    <main className="overflow-hidden bg-gray-700 flex flex-col">
      <div className="grid gap-4 justify-center content-start main-content-scroll overflow-y-scroll pt-20 min-h-screen sm:max-h-screen px-10 grow grid-row-[130px,_1fr]">
        <h1 className="text-center text-[clamp(1.5rem,_4vw,_2rem)] mb-4">
          lorem
        </h1>

        <div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center mb-12">
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

            <CardContextMenu list={['Details', 'Edit', 'Delete']} />
          </div>

          <div className="flex flex-col md:flex-row *:flex-1 gap-5">
            <div className="grid gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-gray-300 ">Notes:</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nemo, quibusdam.
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

            <div className="overflow-hidden aspect-[1.6]">
              <img
                src="https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/sistema_solar-preview.jpg?raw=true"
                alt=""
                className="rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FileItemPage
