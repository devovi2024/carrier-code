import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../Layout/root-layout'
import Home from '../pages/Home/home'
import Register from '../pages/Register/register'
import Signin from '../pages/Signin/signin'
import JobDetails from '../pages/Home/Jobs/job-details'
import PrivateRoute from '../routes/private-route'
import JobApply from '../pages/Home/Jobs/job-apply'
import MyApplication from '../pages/Applications/my-application'
import AddJob from '../pages/admin/Jobs/add-job'
import MyPostedJobs from '../pages/MyPostedJobs/my-posted.jobs'
import ViewApplications from '../pages/ViewApplications/view-applications'

// Loader functions
const loadJob = async ({ params }) => {
  const res = await fetch(`http://localhost:4000/jobs/${params.id}`)
  return res.json()
}

const loadJobApplications = async ({ params }) => {
  const res = await fetch(`http://localhost:4000/applications/jobs/${params.job_id}`)
  return res.json()
}

const loadAllApplications = async () => {
  const res = await fetch(`http://localhost:4000/applications`)
  return res.json()
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      // Job details
      { path: '/jobs/:id', element: <JobDetails />, loader: loadJob },

      // Job apply (private)
      {
        path: '/jobApply/:id',
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },

      // My Applications (user)
      {
        path: '/myApplications',
        element: (
          <PrivateRoute>
            <MyApplication />
          </PrivateRoute>
        ),
      },

      // Add job (admin/user)
      {
        path: '/addjob',
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },

      // My posted jobs
      {
        path: '/myPostedJobs',
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },

      // View all applications
      {
        path: '/applications',
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: loadAllApplications,
      },

      // View applications for specific job
      {
        path: '/applications/:job_id',
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: loadJobApplications,
      },

      { path: '/register', element: <Register /> },
      { path: '/signin', element: <Signin /> },
    ],
  },
])

export default router
