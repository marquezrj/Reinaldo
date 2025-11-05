
import React from 'react';
import type { NewsItem } from '../types';

interface ArticleCardProps {
  article: NewsItem;
  onSelectArticle: (article: NewsItem) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSelectArticle }) => {
  const imageUrl = article.images?.[0]?.url || `https://picsum.photos/seed/${article.id}/600/400`;

  return (
    <div 
      onClick={() => onSelectArticle(article)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="relative">
        <img src={imageUrl} alt={article.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400">{article.category}</span>
        <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {article.lead}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{new Date(article.published_datetime_utc).toLocaleDateString()}</span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            {article.location.poi_name || article.location.city}
          </span>
        </div>
      </div>
    </div>
  );
};
