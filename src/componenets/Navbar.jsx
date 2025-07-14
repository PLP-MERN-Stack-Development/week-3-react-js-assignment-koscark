import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              PLP Task Manager
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/api-data"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
            >
              API Data
            </NavLink>
            <Button
              onClick={toggleTheme}
              variant="secondary"
              size="sm"
              className="flex items-center gap-2"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
