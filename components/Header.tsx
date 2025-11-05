
import React from 'react';

export const Header: React.FC = () => (
  <header className="bg-white dark:bg-gray-800 shadow-md">
    <div className="container mx-auto px-4 md:px-6 py-4">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Autonomous Tourism News
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-1">AI-Powered City Insights</p>
    </div>
  </header>
);
