import { Skeleton } from './Skeleton'

function FileGridViewSkeleton() {
  return (
    <div className="w-[min(100%-30px,_960px)] overflow-hidden max-h-screen mx-auto pt-10 pb-5 grid">
      <main className="grid md:grid-cols-[repeat(auto-fit,minmax(230px,1fr))] content-start auto-rows-auto gap-6 max-h-screen overflow-auto main-content-scroll pb-10">
        <div className="grid start space-y-3 w-full">
          <Skeleton className="aspect-[1.6] rounded-xl bg-gray-900" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-900" />
            <Skeleton className="h-4 w-9/12 bg-gray-900" />
          </div>
        </div>

        <div className="grid start space-y-3 w-full">
          <Skeleton className="aspect-[1.6] rounded-xl bg-gray-900" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-900" />
            <Skeleton className="h-4 w-9/12 bg-gray-900" />
          </div>
        </div>

        <div className="grid start space-y-3 w-full">
          <Skeleton className="aspect-[1.6] rounded-xl bg-gray-900" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-900" />
            <Skeleton className="h-4 w-9/12 bg-gray-900" />
          </div>
        </div>

        <div className="grid start space-y-3 w-full">
          <Skeleton className="aspect-[1.6] rounded-xl bg-gray-900" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-900" />
            <Skeleton className="h-4 w-9/12 bg-gray-900" />
          </div>
        </div>

        <div className="grid start space-y-3 w-full">
          <Skeleton className="aspect-[1.6] rounded-xl bg-gray-900" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-900" />
            <Skeleton className="h-4 w-9/12 bg-gray-900" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default FileGridViewSkeleton
