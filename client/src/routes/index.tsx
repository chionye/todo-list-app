/** @format */

import { Outlet } from "react-router-dom";
import Layout from "../pages/auth/Layout";
import Home from "../pages/auth/Welcome";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./protectedroute";
import Todo from "../pages/dashboard/Todo";
import About from "../pages/dashboard/About";
import Error from "../pages/Error";

const Routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    errorElement: <Error />,
    children: [
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
];

export default Routes;
