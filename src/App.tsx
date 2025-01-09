import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      <RouterProvider router={router} />

      <Toaster
        position="top-center"
        gutter={20}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
          style: {
            fontSize: '12px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'hsl(0, 0%, 11%)',
            border: '1px solid hsl(240, 3%, 6%)',
            color: 'rgb(217, 217, 217)',
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default App
