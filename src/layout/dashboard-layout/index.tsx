import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Sidebar from "./Sidebar";

const DashboardLayout: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return user && user?.role === "admin" ? (
    <section className="grid min-h-screen bg-background md:grid-cols-[auto_1fr]">
      {/* Sidebar */}
      <div className="fixed z-50 md:relative">
        <Sidebar />
      </div>

      {/* Scrollable Content */}
      <div className="relative h-screen w-full overflow-y-auto pl-16 md:pl-0">
        <Outlet />
      </div>
    </section>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default DashboardLayout;
