
import React from 'react';
import type { WeeklyTop20Item } from '../types';

interface RankingSectionProps {
  ranking: WeeklyTop20Item[];
}

const RankBadge: React.FC<{ rank: number }> = ({ rank }) => {
  let color = 'bg-gray-300 dark:bg-gray-600';
  if (rank === 1) color = 'bg-yellow-400 dark:bg-yellow-500 text-yellow-900';
  if (rank === 2) color = 'bg-gray-300 dark:bg-gray-400 text-gray-800';
  if (rank === 3) color = 'bg-yellow-600 dark:bg-yellow-700 text-yellow-100';
  
  return (
    <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-sm ${color}`}>
      {rank}
    </div>
  );
};

export const RankingSection: React.FC<RankingSectionProps> = ({ ranking }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Weekly Top Places</h2>
      <div className="space-y-4">
        {ranking.map((item) => (
          <div key={item.rank} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <RankBadge rank={item.rank} />
            <div className="flex-grow">
              <p className="font-semibold text-gray-800 dark:text-white">{item.place}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.city}, {item.state}</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-lg text-blue-600 dark:text-blue-400">{item.score.toFixed(1)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Score</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
