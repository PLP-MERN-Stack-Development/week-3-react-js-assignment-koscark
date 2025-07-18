import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">MyApp</div>

        {/* Use gap-* on a flex container */}
        <div className="flex gap-10">
          <Link
            to="/"
            className="text-white no-underline hover:text-gray-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="text-white visited:text-white hover:text-gray-200 no-underline font-medium"
          >
            Tasks
          </Link>
          <Link
            to="/api"
            className="text-white no-underline hover:text-gray-200 font-medium"
          >
            API Data
          </Link>
        </div>
      </div>
    </nav>
  );
}
