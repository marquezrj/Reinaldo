
import React from 'react';

interface SummarySectionProps {
  summary: string[];
}

export const SummarySection: React.FC<SummarySectionProps> = ({ summary }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Daily Summary</h2>
      {summary.length > 0 ? (
        <ul className="space-y-3">
          {summary.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">&#8226;</span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No daily summary available.</p>
      )}
    </div>
  );
};
