import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../Layout/root-layout'
import Home from '../pages/Home/home'
import Register from '../pages/Register/register'
import Signin from '../pages/Signin/signin'
import JobDetails from '../pages/Home/Jobs/job-details'
import PrivateRoute from '../routes/private-route'
import JobApply from '../pages/Home/Jobs/job-apply'
import MyApplication from '../pages/Applications/my-application'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/jobs/:id',
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        )
      },
      {
        path: '/myApplications',
        element: (
          <PrivateRoute>
            <MyApplication />
          </PrivateRoute>
        )
      },
      { path: '/register', element: <Register /> },
      { path: '/signin', element: <Signin /> }
    ]
  }
])

export default router
