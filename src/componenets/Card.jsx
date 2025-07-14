import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
