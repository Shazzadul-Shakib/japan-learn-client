import { Link } from "react-router";

const Register: React.FC = () => {
  return (
    <section className="grid min-h-screen bg-background content-center justify-items-center">
      <div className="bg-primary p-8 w-1/3 rounded-lg shadow-lg">
        <h1 className="text-lg font-semibold text-white text-center mb-6">
          Register
        </h1>
        <form className="space-y-4">
          {/* Username Field */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-white text-sm mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="@username"
              className="p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="xyz@mail.com"
              className="p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-white text-sm mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="******"
              className="p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-accent text-white py-2 rounded mt-4 hover:bg-accent-dark transition-colors"
          >
            Register
          </button>
        </form>
        <p className="text-white text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:underline font-medium">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
