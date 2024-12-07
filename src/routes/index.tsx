import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        index: true,
        path: '/landing',
        element: <Landing />,
      },
    ],
  },
])
