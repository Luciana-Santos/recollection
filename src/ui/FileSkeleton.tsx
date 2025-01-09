import { Skeleton } from './Skeleton'

function FileSkeleton() {
  return (
    <main className="mt-20 sm:my-20 rounded-2xl overflow-y-auto main-content-scroll relative px-5 md:px-8">
      <Skeleton className="h-4 w-2/3 mx-auto bg-gray-700 mb-10" />
      <div className="flex flex-wrap justify-center gap-5 mb-10">
        <Skeleton className="h-4 w-24 bg-gray-700" />
        <Skeleton className="h-4 w-24 bg-gray-700" />
        <Skeleton className="h-4 w-10 bg-gray-700" />
      </div>

      <section className="grid md:grid-cols-2 gap-10">
        <div className="flex-1 grid gap-2">
          <Skeleton className="h-4 w-20 bg-gray-700" />
          <Skeleton className="min-h-20 w-full bg-gray-700 mb-10" />
          <Skeleton className="h-4 w-1/3 bg-gray-700" />
        </div>

        <div className="flex-1">
          <Skeleton className="aspect-[1.6] bg-gray-700" />
        </div>
      </section>
    </main>
  )
}

export default FileSkeleton
