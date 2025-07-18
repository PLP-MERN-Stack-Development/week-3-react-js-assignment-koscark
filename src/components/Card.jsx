import React from 'react';

export default function Card({ title, content }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
}
