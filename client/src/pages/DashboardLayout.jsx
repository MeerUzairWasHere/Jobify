import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
