import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TLoginFormSchema, useLoginForm } from "./useLogin";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useLoginForm();
  const [userLogin, { isLoading: isLoginLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: TLoginFormSchema) => {
    console.log("Login Data:", data);
    const loggedUser = await userLogin(data);

    if (loggedUser?.data?.success) {
      dispatch(setUser(loggedUser?.data?.data));
      reset();
      const userRole = loggedUser?.data?.data.role;
      if (userRole === "user") {
        navigate("/");
      } else if (userRole === "admin") {
        navigate("/dashboard");
      }
    }
    console.log(loggedUser);
  };

  return (
    <section className="grid min-h-screen content-center justify-items-center bg-background">
      <div className="w-full max-w-md rounded-lg bg-primary p-8 shadow-lg sm:max-w-lg">
        <h1 className="mb-6 text-center text-lg font-semibold text-white">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="xyz@mail.com"
              {...register("email")} // Bind to form logic
              className="w-full rounded p-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="******"
              {...register("password")} // Bind to form logic
              className="w-full rounded p-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="hover:bg-accent-dark mt-4 w-full rounded bg-accent py-2 text-white transition-colors"
          >
            {isLoginLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          New here?{" "}
          <Link
            to="/register"
            className="font-medium text-accent hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
