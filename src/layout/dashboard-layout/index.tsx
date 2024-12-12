import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const DashboardLayout: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return user && user?.role === "admin" ? (
    <section className="grid min-h-screen bg-background md:grid-cols-[auto_1fr]">
      <h1>{user?.userName}</h1>
      <Outlet />
    </section>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default DashboardLayout;
