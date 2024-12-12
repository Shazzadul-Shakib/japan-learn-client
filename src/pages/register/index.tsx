import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TFormSchema, useRegisterForm } from "./useRegister";
import useGetImageUrl from "@/hooks/useGetImageUrl";
import { useRegisterUserMutation } from "@/redux/api/authApi";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useRegisterForm();
  const [fileName, setFileName] = useState<string>("No file chosen");
  const { getImageUrl } = useGetImageUrl();
  const [registerUser, { isLoading: isRegisterLoading }] =
    useRegisterUserMutation();
  const navigate = useNavigate();

  // --- Handle file change --- //
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (file) {
      setValue("profile", file); // Set the file in react-hook-form
      setFileName(file.name); // Update the file name for display
    } else {
      setFileName("No file chosen");
    }
  };

  // --- Handle submit of register form --- //
  const onSubmit = async (data: TFormSchema) => {
    const imageUrl = await getImageUrl(data.profile as File);
    data.profile = imageUrl;
    const newUser = await registerUser(data);

    if (newUser?.error) {
      alert(newUser?.error?.data?.message);
    } else {
      reset();
      navigate("/login");
      alert(newUser?.data?.message);
    }
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
          {/* Profile Photo Field */}
          <div className="flex flex-col">
            <label htmlFor="profile" className="mb-1 text-sm text-white">
              Profile Photo
            </label>
            <div className="relative flex items-center justify-between">
              <input
                id="profile"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="profile"
                className="hover:bg-accent-light w-full cursor-pointer rounded bg-white p-2 text-center text-sm font-semibold text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Choose File
              </label>
              <span id="file-name" className="ml-2 text-xs text-gray-300">
                {fileName}
              </span>
            </div>
            {errors.profile && (
              <p className="text-sm text-red-500">{errors.profile.message}</p>
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
            {isRegisterLoading ? "Loading..." : " Register"}
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
