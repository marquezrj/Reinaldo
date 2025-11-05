
import React from 'react';
import type { NewsItem } from '../types';

interface ArticleModalProps {
  article: NewsItem;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const imageUrl = article.images?.[0]?.url || `https://picsum.photos/seed/${article.id}/800/400`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-t-2xl" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
            aria-label="Close article"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="p-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400">{article.category}</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">{article.title}</h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-x-4 gap-y-2 mb-6">
            <span>Published: {new Date(article.published_datetime_utc).toLocaleString()}</span>
            <span>Location: {article.location.poi_name ? `${article.location.poi_name}, ` : ''}{article.location.city}</span>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">{article.lead}</p>
          
          <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: article.body.replace(/\n/g, '<br />') }} />
          
          <div className="mt-8 border-t dark:border-gray-700 pt-6">
            <h3 className="text-xl font-bold mb-4">Sources</h3>
            <ul className="space-y-2">
              {article.sources.map((source, index) => (
                <li key={index} className="flex items-center">
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
