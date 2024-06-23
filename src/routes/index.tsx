/** @format */

import { Outlet } from "react-router-dom";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import AuthLayout from "../pages/auth/AuthLayout";
import Home from "../pages/auth/Welcome";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const Routes = [
  {
    path: "/",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
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
    ],
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        path: "todo",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default Routes;
