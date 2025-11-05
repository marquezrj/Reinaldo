
import React, { useState, useCallback } from 'react';
import type { NewsData, NewsItem } from './types';
import { generateNewsForCity } from './services/geminiService';
import { Header } from './components/Header';
import { ControlPanel } from './components/ControlPanel';
import { NewsFeed } from './components/NewsFeed';
import { SummarySection } from './components/SummarySection';
import { RankingSection } from './components/RankingSection';
import { ArticleModal } from './components/ArticleModal';
import { LoadingSpinner } from './components/LoadingSpinner';
import { WelcomeSplash } from './components/WelcomeSplash';

const App: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const handleGenerateNews = useCallback(async (city: string) => {
    setIsLoading(true);
    setError(null);
    setNewsData(null);
    try {
      const data = await generateNewsForCity(city);
      setNewsData(data);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSelectArticle = (article: NewsItem) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <Header />
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <ControlPanel onGenerate={handleGenerateNews} isLoading={isLoading} />
        
        {isLoading && <LoadingSpinner />}
        
        {error && (
          <div className="mt-8 text-center bg-red-100 dark:bg-red-900/20 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}

        {!isLoading && !newsData && !error && <WelcomeSplash />}

        {newsData && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Latest News for {newsData.city}</h2>
              <NewsFeed newsItems={newsData.news_items} onSelectArticle={handleSelectArticle} />
            </div>
            <div className="lg:col-span-1 space-y-8">
              <SummarySection summary={newsData.daily_summary} />
              {newsData.weekly_top20 && newsData.weekly_top20.length > 0 && (
                <RankingSection ranking={newsData.weekly_top20} />
              )}
            </div>
          </div>
        )}
      </main>

      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
