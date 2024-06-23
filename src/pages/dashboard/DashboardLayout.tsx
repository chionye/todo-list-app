/** @format */

import { Nav } from "../../components";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default DashboardLayout;
