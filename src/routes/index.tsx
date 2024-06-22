
import { Outlet } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";

const Routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

export default Routes;