import { useState, useEffect } from 'react';
import { News } from '@/src/domain/entities/News';
import { getNewsService } from '@/src/infrastructure/di/ServiceContainer';

export interface UseNewsResult {
  news: News[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useNews = (): UseNewsResult => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const newsService = getNewsService();

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await newsService.getAllNews();
      setNews(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return {
    news,
    loading,
    error,
    refetch: fetchNews,
  };
};

export const useLatestNews = (limit?: number): UseNewsResult => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const newsService = getNewsService();

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await newsService.getLatestNews(limit);
      setNews(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [limit]);

  return {
    news,
    loading,
    error,
    refetch: fetchNews,
  };
};
