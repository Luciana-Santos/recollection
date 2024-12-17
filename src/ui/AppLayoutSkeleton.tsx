import { Skeleton } from './Skeleton'

function AppLayoutSkeleton() {
  return (
    <div className="grid sm:grid-cols-[260px_1fr] relative">
      <aside className="hidden sm:grid pt-10 px-5  min-h-screen bg-gray-700">
        <Skeleton className="h-8 w-[220px] mx-auto bg-gray-900" />
        <Skeleton className="h-12 w-[220px] mx-auto bg-gray-900" />

        <div>
          <Skeleton className="h-8 w-[220px] mx-auto mb-3 bg-gray-900" />
          <Skeleton className="h-8 w-[220px] mx-auto mb-3 bg-gray-900" />
          <Skeleton className="h-8 w-[220px] mx-auto bg-gray-900" />
        </div>

        <Skeleton className="h-8 w-[220px] mx-auto my-auto justify-self-end bg-gray-900" />
      </aside>

      <div className="w-[min(100%-30px,_960px)] overflow-hidden max-h-screen mx-auto pt-10 pb-5 grid grid-rows-[80px_1fr]">
        <Skeleton className="h-4 w-[250px] mx-auto bg-gray-700" />

        <main className="grid md:grid-cols-[repeat(auto-fit,minmax(230px,1fr))] content-start auto-rows-auto gap-6 max-h-screen overflow-auto main-content-scroll pb-10 pr-5">
          <div className="grid start space-y-3 w-full">
            <Skeleton className="rounded-xl bg-gray-700 aspect-[1.6]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-gray-700" />
              <Skeleton className="h-4 w-9/12 bg-gray-700" />
            </div>
          </div>

          <div className="grid start space-y-3 w-full">
            <Skeleton className="rounded-xl bg-gray-700 aspect-[1.6]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-gray-700" />
              <Skeleton className="h-4 w-9/12 bg-gray-700" />
            </div>
          </div>

          <div className="grid start space-y-3 w-full">
            <Skeleton className="rounded-xl bg-gray-700 aspect-[1.6]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-gray-700" />
              <Skeleton className="h-4 w-9/12 bg-gray-700" />
            </div>
          </div>

          <div className="grid start space-y-3 w-full">
            <Skeleton className="rounded-xl bg-gray-700 aspect-[1.6]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-gray-700" />
              <Skeleton className="h-4 w-9/12 bg-gray-700" />
            </div>
          </div>

          <div className="grid start space-y-3 w-full">
            <Skeleton className="rounded-xl bg-gray-700 aspect-[1.6]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-gray-700" />
              <Skeleton className="h-4 w-9/12 bg-gray-700" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AppLayoutSkeleton
