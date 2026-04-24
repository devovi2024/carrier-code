import { createBrowserRouter } from "react-router-dom";
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

const loadJob = async ({ params }) => {
  const res = await fetch(`${BASE_URL}/jobs/${params.id}`);
  if (!res.ok) throw new Response("Failed to load job", { status: 500 });
  return res.json();
};

const loadJobApplications = async ({ params }) => {
  const res = await fetch(`${BASE_URL}/applications/jobs/${params.job_id}`);
  if (!res.ok) throw new Response("Failed to load applications", { status: 500 });
  return res.json();
};

const loadAllApplications = async () => {
  const res = await fetch(`${BASE_URL}/applications`);
  if (!res.ok) throw new Response("Failed to load applications", { status: 500 });
  return res.json();
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