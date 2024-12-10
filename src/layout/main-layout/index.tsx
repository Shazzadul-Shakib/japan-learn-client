import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <section className="grid min-h-screen bg-background md:grid-cols-[auto_1fr]">
      <Outlet />
    </section>
  );
};

export default MainLayout;
