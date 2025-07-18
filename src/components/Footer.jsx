import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12">
      <p className="text-sm">&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
}
