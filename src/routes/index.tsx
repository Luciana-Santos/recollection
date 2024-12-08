import { createBrowserRouter } from 'react-router-dom'
import AllFiles from '../pages/AllFiles'
import Documents from '../pages/Documents'
import ErrorPage from '../pages/ErrorPage'
import Images from '../pages/Images'
import Landing from '../pages/Landing'
import Links from '../pages/Links'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import Recents from '../pages/Recents'
import Trash from '../pages/Trash'
import Upload from '../pages/Upload'
import Videos from '../pages/Videos'
import AppLayout from '../ui/AppLayout'

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
        path: '/images',
        element: <Images />,
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
