import CardLoading from '@/components/Card/CardLoading'
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
const Images = lazy(() => import('../pages/Images'))
const Videos = lazy(() => import('../pages/Videos'))
const Trash = lazy(() => import('../pages/Trash'))
const FileItem = lazy(() => import('../pages/FileItem'))

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
              <Suspense fallback={<CardLoading />}>
                <Latest />
              </Suspense>
            ),
          },
          {
            path: 'latest',
            element: (
              <Suspense fallback={<CardLoading />}>
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
              <Suspense fallback={<CardLoading />}>
                <AllFiles />
              </Suspense>
            ),
          },
          {
            path: 'images',
            element: (
              <Suspense fallback={<CardLoading />}>
                <Images />
              </Suspense>
            ),
          },
          {
            path: 'documents',
            element: (
              <Suspense fallback={<CardLoading />}>
                <Documents />
              </Suspense>
            ),
          },
          {
            path: 'links',
            element: (
              <Suspense fallback={<CardLoading />}>
                <Links />
              </Suspense>
            ),
          },
          {
            path: 'videos',
            element: (
              <Suspense fallback={<CardLoading />}>
                <Videos />
              </Suspense>
            ),
          },
          {
            path: 'trash',
            element: (
              <Suspense fallback={<CardLoading />}>
                <Trash />
              </Suspense>
            ),
          },
          {
            path: 'file/:fileId',
            element: (
              <Suspense fallback={<CardLoading />}>
                <FileItem />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])
