
export interface NewsData {
  generated_at_utc: string;
  city: string;
  update_window_hours?: number;
  news_items: NewsItem[];
  daily_summary: string[];
  weekly_top20?: WeeklyTop20Item[];
  notes?: string[];
  meta?: Record<string, any>;
}

export interface NewsItem {
  id: string;
  title: string;
  lead: string;
  body: string;
  summary_2_sentences: string;
  published_datetime_utc: string;
  time_class: 'last_hour' | 'last_24h' | 'weekly' | 'other';
  tags: string[];
  category: string;
  location: Location;
  sources: Source[];
  images?: Image[];
  seo: SEO;
  confidence: number;
  flags?: string[];
  notes?: string[];
}

export interface Location {
  city: string;
  state: string;
  lat?: number;
  lon?: number;
  poi_name?: string;
}

export interface Source {
  url: string;
  name: string;
  published: string;
  author?: string;
  source_type?: 'rss' | 'api' | 'scrape' | 'review' | 'social' | 'other';
  credibility_score?: number;
}

export interface Image {
  url: string;
  caption?: string;
  license?: string;
  attribution?: string;
}

export interface SEO {
  title_tag: string;
  meta_description: string;
  og_title?: string;
  og_description?: string;
  twitter_card?: string;
  canonical: string;
  json_ld: Record<string, any>;
}

export interface WeeklyTop20Item {
  rank: number;
  place: string;
  city: string;
  state: string;
  score: number;
  breakdown: Record<string, number>;
  sources?: string[];
}
