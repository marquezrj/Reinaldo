
import React from 'react';
import type { NewsItem } from '../types';
import { ArticleCard } from './ArticleCard';

interface NewsFeedProps {
  newsItems: NewsItem[];
  onSelectArticle: (article: NewsItem) => void;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({ newsItems, onSelectArticle }) => {
  if (newsItems.length === 0) {
    return (
      <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No news items found.</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Try generating news for a different city or try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {newsItems.map((item) => (
        <ArticleCard key={item.id} article={item} onSelectArticle={onSelectArticle} />
      ))}
    </div>
  );
};
