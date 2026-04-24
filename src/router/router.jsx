import { createBrowserRouter } from "react-router-dom";
import axios from "axios";

import RootLayout from "../Layout/root-layout";
import Home from "../pages/Home/home";
import Register from "../pages/Register/register";
import Signin from "../pages/Signin/signin";
import JobDetails from "../pages/Home/Jobs/job-details";
import PrivateRoute from "../routes/private-route";
import JobApply from "../pages/Home/Jobs/job-apply";
import MyApplication from "../pages/Applications/my-application";
import AddJob from "../pages/admin/Jobs/add-job";
import MyPostedJobs from "../pages/MyPostedJobs/my-posted.jobs";
import ViewApplications from "../pages/ViewApplications/view-applications";
import NotFound from "../pages/NotFound/not-found";

const BASE_URL = "https://carriercode-server.vercel.app";

// job details loader
const loadJob = async ({ params }) => {
  const res = await axios.get(`${BASE_URL}/jobs/${params.id}`);
  return res.data;
};

// job applications (by job id)
const loadJobApplications = async ({ params }) => {
  const res = await axios.get(
    `${BASE_URL}/applications/jobs/${params.job_id}`
  );
  return res.data;
};

// all applications
const loadAllApplications = async () => {
  const res = await axios.get(`${BASE_URL}/applications`);
  return res.data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "/jobs/:id", element: <JobDetails />, loader: loadJob },

      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },

      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplication />
          </PrivateRoute>
        ),
      },

      {
        path: "/addjob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },

      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },

      {
        path: "/applications",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: loadAllApplications,
      },

      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: loadJobApplications,
      },

      { path: "/register", element: <Register /> },
      { path: "/signin", element: <Signin /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;