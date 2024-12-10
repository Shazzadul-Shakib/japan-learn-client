import React from "react";
import { Link } from "react-router-dom";
import { TFormSchema, useRegisterForm } from "./useRegister";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();

  const onSubmit = (data: TFormSchema) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="grid min-h-screen content-center justify-items-center bg-background">
      <div className="w-full max-w-md rounded-lg bg-primary p-8 shadow-lg sm:max-w-lg">
        <h1 className="mb-6 text-center text-lg font-semibold text-white">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Field */}
          <div className="flex flex-col">
            <label htmlFor="userName" className="mb-1 text-sm text-white">
              Username
            </label>
            <input
              id="userName"
              type="text"
              placeholder="@username"
              {...register("userName")}
              className="w-full rounded p-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.userName && (
              <p className="text-sm text-red-500">{errors.userName.message}</p>
            )}
          </div>
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="xyz@mail.com"
              {...register("email")}
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
              {...register("password")}
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
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-accent hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
