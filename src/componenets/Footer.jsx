import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
