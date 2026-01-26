import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/root-layout";
import Home from "../pages/Home/home";
import Register from "../pages/Register/register";
import Signin from "../pages/Signin/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/sign", element: <Signin /> },
    ],
  },
]);

export default router;
