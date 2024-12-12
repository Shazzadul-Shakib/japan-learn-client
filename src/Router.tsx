import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import DashboardLayout from "./layout/dashboard-layout";
import DashboardHome from "./pages/dashboard/home";

// --- Layout import --- //
const MainLayout = lazy(() => import("@/layout/main-layout/index"));

// --- pages --- //
const Lessons = lazy(() => import("@/pages/main/lessons/index"));
const Login = lazy(() => import("@/pages/login/index"));
const Register = lazy(() => import("@/pages/register/index"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={"Main layout loading..."}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={"Lessons page loading..."}>
            <Lessons />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={"Dashboard layout loading..."}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index:true,
        element: (
          <Suspense fallback={"Home page loading..."}>
            <DashboardHome />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={"Login page loading..."}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={"Register page loading..."}>
        <Register />
      </Suspense>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
