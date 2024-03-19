import Loading from '@/components/Loading'
import DashboardLayout from '@/pages/DashboardLayout'
import RootLayout from '@/pages/RootLayout'
import PrivateRoute from '@/utils/PrivateRoute'
import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Landing = lazy(() => import('../pages/Landing'))
const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
const Latest = lazy(() => import('../pages/Latest'))
const Upload = lazy(() => import('../pages/Upload'))
const AllFiles = lazy(() => import('../pages/AllFiles'))
const Documents = lazy(() => import('../pages/Documents'))
const Error = lazy(() => import('../pages/Error'))
const Links = lazy(() => import('../pages/Links'))
const Photos = lazy(() => import('../pages/Photos'))
const Videos = lazy(() => import('../pages/Videos'))
const Trash = lazy(() => import('../pages/Trash'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute isAuth>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <Latest />
              </Suspense>
            ),
          },
          {
            path: 'latest',
            element: (
              <Suspense fallback={<Loading />}>
                <Latest />
              </Suspense>
            ),
          },
          {
            path: 'upload',
            element: (
              <Suspense fallback={<Loading />}>
                <Upload />
              </Suspense>
            ),
          },
          {
            path: 'all-files',
            element: (
              <Suspense fallback={<Loading />}>
                <AllFiles />
              </Suspense>
            ),
          },
          {
            path: 'photos',
            element: (
              <Suspense fallback={<Loading />}>
                <Photos />
              </Suspense>
            ),
          },
          {
            path: 'documents',
            element: (
              <Suspense fallback={<Loading />}>
                <Documents />
              </Suspense>
            ),
          },
          {
            path: 'links',
            element: (
              <Suspense fallback={<Loading />}>
                <Links />
              </Suspense>
            ),
          },
          {
            path: 'videos',
            element: (
              <Suspense fallback={<Loading />}>
                <Videos />
              </Suspense>
            ),
          },
          {
            path: 'trash',
            element: (
              <Suspense fallback={<Loading />}>
                <Trash />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])
