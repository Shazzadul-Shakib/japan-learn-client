import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaUser,
  FaPlus,
  FaHome,
  FaCog,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } flex min-h-screen flex-col bg-primary text-white shadow-lg transition-all duration-300`}
    >
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className={`text-lg font-bold ${isOpen ? "block" : "hidden"}`}>
          Dashboard
        </h1>
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? "<<" : ">>"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center rounded px-4 py-2 transition-colors hover:bg-accent"
            >
              <FaHome className="text-lg" />
              {isOpen && <span className="ml-3">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/lessons"
              className="flex items-center rounded px-4 py-2 transition-colors hover:bg-accent"
            >
              <FaBook className="text-lg" />
              {isOpen && <span className="ml-3">Lessons</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/add-lessons"
              className="flex items-center rounded px-4 py-2 transition-colors hover:bg-accent"
            >
              <FaPlus className="text-lg" />
              {isOpen && <span className="ml-3">Add Lessons</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/add-vocabularies"
              className="flex items-center rounded px-4 py-2 transition-colors hover:bg-accent"
            >
              <FaPlus className="text-lg" />
              {isOpen && <span className="ml-3">Add Vocabularies</span>}
            </Link>
          </li>
          <li>
            <Link
              to="manage-users"
              className="flex items-center rounded px-4 py-2 transition-colors hover:bg-accent"
            >
              <FaUser className="text-lg" />
              {isOpen && <span className="ml-3">Manage Users</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/lesson-management"
              className="flex items-center rounded px-4 py-2 transition-colors hover:bg-accent"
            >
              <FaCog className="text-lg" />
              {isOpen && <span className="ml-3">Lesson Management</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/vocabulary-management"
              className="flex items-center rounded px-4 py-2 transition-colors hover:bg-accent"
            >
              <FaList className="text-lg" />
              {isOpen && <span className="ml-3">Vocabulary Management</span>}
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Info and Logout */}
      <div className="mt-auto border-t border-gray-700 p-4">
        <div className="flex items-center space-x-4">
          <img
            src={user?.profile}
            alt={`${user?.userName}'s Profile`}
            className="h-8 w-8 rounded-full border border-white object-cover"
          />
          {isOpen && (
            <div>
              <p className="font-medium">{user?.userName}</p>
              <p className="text-sm text-gray-300">{user?.email}</p>
            </div>
          )}
        </div>
        <button className="mt-4 flex w-full items-center rounded px-4 py-2 text-left transition-colors hover:bg-accent">
          <FaSignOutAlt className="text-lg" />
          {isOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 text-center text-sm text-gray-300">
        {isOpen && <p>© 2024 ~日本~ Learn</p>}
      </div>
    </div>
  );
};

export default Sidebar;
