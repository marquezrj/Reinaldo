
import React, { useState } from 'react';

interface ControlPanelProps {
  onGenerate: (city: string) => void;
  isLoading: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ onGenerate, isLoading }) => {
  const [city, setCity] = useState('Rio de Janeiro');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onGenerate(city.trim());
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full sm:w-auto flex-grow">
          <label htmlFor="city-input" className="sr-only">City</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9 7 7 0 01-9.9-9.9zM10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.586 5.586a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm9.9 0a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 10a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm10 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" />
              </svg>
            </div>
            <input
              id="city-input"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter a city name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              disabled={isLoading}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading || !city.trim()}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate News'
          )}
        </button>
      </form>
    </div>
  );
};
