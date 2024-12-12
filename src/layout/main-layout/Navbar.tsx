import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-primary px-4 py-3 text-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link to="/">~日本~ Learn</Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden space-x-6 sm:flex">
        <Link to="/" className="transition-colors hover:text-accent">
          Lessons
        </Link>
        <Link to="/tutorials" className="transition-colors hover:text-accent">
          Tutorials
        </Link>
      </div>

      {/* Profile Icon with Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
              src={user?.profile}
              alt={`${user?.userName}'s Profile`}
              className="h-8 w-8 rounded-full object-cover border border-white"
            />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md bg-primary border-2 border-white shadow-md">
            <div className="border-b p-4">
              <p className="font-semibold text-white">{user?.userName}</p>
              <p className="text-sm text-white">{user?.email}</p>
            </div>
            <button
              className="w-full p-2 rounded-b text-center bg-accent text-white"
              onClick={() => console.log("Logout clicked")}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
