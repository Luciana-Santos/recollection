import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import AppLayout from '../ui/AppLayout'
import Recents from '../pages/Recents'
import Upload from '../pages/Upload'
import AllFiles from '../pages/AllFiles'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import Photos from '../pages/Photos'
import Documents from '../pages/Documents'
import Links from '../pages/Links'
import Videos from '../pages/Videos'
import Trash from '../pages/Trash'
import ErrorPage from '../pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/upload',
        element: <Upload />,
      },
      {
        index: true,
        path: '/recents',
        element: <Recents />,
      },
      {
        path: '/all-files',
        element: <AllFiles />,
      },
      {
        path: '/photos',
        element: <Photos />,
      },
      {
        path: '/documents',
        element: <Documents />,
      },
      {
        path: '/links',
        element: <Links />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/trash',
        element: <Trash />,
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
    element: <Landing />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
