import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Sidebar from "./Sidebar";

const DashboardLayout: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return user && user?.role === "admin" ? (
    <section className="grid min-h-screen bg-background md:grid-cols-[auto_1fr]">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Scrollable Outlet */}
      <div className="relative h-screen overflow-y-auto">
        <Outlet />
      </div>
    </section>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default DashboardLayout;
