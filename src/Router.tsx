import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import DashboardLayout from "./layout/dashboard-layout";


// --- Layout import --- //
const MainLayout = lazy(() => import("@/layout/main-layout/index"));

// --- Main pages --- //
const Lessons = lazy(() => import("@/pages/main/lessons/index"));
const Tutorials = lazy(() => import("@/pages/main/tutorials/index"));
const Login = lazy(() => import("@/pages/login/index"));
const Register = lazy(() => import("@/pages/register/index"));

// --- Dashboard pages --- //
const DashboardHome=lazy(()=>import("@/pages/dashboard/home/index"))
const ManageUsers=lazy(()=>import("@/pages/dashboard/manageUsers/index"))

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
        index:true,
        element: (
          <Suspense fallback={"Lessons page loading..."}>
            <Lessons />
          </Suspense>
        ),
      },
      {
        path:"/tutorials",
        element: (
          <Suspense fallback={"Tutorial page loading..."}>
            <Tutorials />
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
      {
        path:"manage-users",
        element: (
          <Suspense fallback={"Home page loading..."}>
            <ManageUsers />
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
