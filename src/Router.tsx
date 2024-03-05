import { createBrowserRouter } from 'react-router-dom'
import {
  AllFiles,
  DashboardLayout,
  Documents,
  Error,
  HomeLayout,
  Landing,
  Latest,
  Links,
  Login,
  Photos,
  Register,
  Upload,
  Videos,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Latest />,
          },
          {
            path: 'upload',
            element: <Upload />,
          },
          {
            path: 'all-files',
            element: <AllFiles />,
          },
          {
            path: 'photos',
            element: <Photos />,
          },
          {
            path: 'documents',
            element: <Documents />,
          },
          {
            path: 'links',
            element: <Links />,
          },
          {
            path: 'videos',
            element: <Videos />,
          },
        ],
      },
    ],
  },
])

export default router
