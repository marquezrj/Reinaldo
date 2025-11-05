
import React from 'react';

export const WelcomeSplash: React.FC = () => (
    <div className="mt-8 text-center p-10 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="mx-auto h-16 w-16 text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      </div>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Welcome to Autonomous News</h2>
      <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Enter a city above and click "Generate News" to get an AI-powered, up-to-the-minute tourism report.
      </p>
    </div>
);
