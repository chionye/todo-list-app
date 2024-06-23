/** @format */

import { ToastContainer } from "react-toastify";
import { Nav } from "../../components";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
      <ToastContainer />
    </div>
  );
};

export default Layout;
