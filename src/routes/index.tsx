import ErrorPage from '@/pages/ErrorPage'
import Login from '@/pages/Login'
import Upload from '@/pages/Upload'
import AppLayoutSkeleton from '@/ui/AppLayoutSkeleton'
import FileGridViewSkeleton from '@/ui/FileGridViewSkeleton'
import FileSkeleton from '@/ui/FileSkeleton'
import ProtectedRoute from '@/ui/ProtectedRoute'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import LandingLoading from '../ui/LandingLoading'
const Landing = lazy(() => import('@/pages/Landing'))
const Recents = lazy(() => import('@/pages/Recents'))
const AllFiles = lazy(() => import('@/pages/AllFiles'))
const Documents = lazy(() => import('@/pages/Documents'))
const Images = lazy(() => import('@/pages/Images'))
const Links = lazy(() => import('@/pages/Links'))
const Videos = lazy(() => import('@/pages/Videos'))
const AppLayout = lazy(() => import('@/ui/AppLayout'))
const FileItemPage = lazy(() => import('@/pages/FileItemPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<AppLayoutSkeleton />}>
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/recents" replace />,
      },
      {
        path: '/upload',
        element: <Upload />,
      },
      {
        index: true,
        path: '/recents',
        element: (
          <Suspense fallback={<FileGridViewSkeleton />}>
            <Recents />
          </Suspense>
        ),
      },
      {
        path: '/all-files',
        element: (
          <Suspense fallback={<FileGridViewSkeleton />}>
            <AllFiles />
          </Suspense>
        ),
      },
      {
        path: '/images',
        element: (
          <Suspense fallback={<FileGridViewSkeleton />}>
            <Images />
          </Suspense>
        ),
      },
      {
        path: '/documents',
        element: (
          <Suspense fallback={<FileGridViewSkeleton />}>
            <Documents />
          </Suspense>
        ),
      },
      {
        path: '/links',
        element: (
          <Suspense fallback={<FileGridViewSkeleton />}>
            <Links />
          </Suspense>
        ),
      },
      {
        path: '/videos',
        element: (
          <Suspense fallback={<FileGridViewSkeleton />}>
            <Videos />
          </Suspense>
        ),
      },
      {
        path: 'file/:fileId',
        element: (
          <Suspense fallback={<FileSkeleton />}>
            <FileItemPage />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/landing',
    element: (
      <Suspense fallback={<LandingLoading />}>
        <Landing />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])
