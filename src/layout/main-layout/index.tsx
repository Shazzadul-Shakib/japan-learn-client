import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Navbar from "./Navbar";

const MainLayout: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return user && user?.role === "user" ? (
    <section className=" min-h-screen bg-background">
      <Navbar/>
      <Outlet />
    </section>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default MainLayout;
