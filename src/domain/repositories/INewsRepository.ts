import { News } from '../entities/News';

export interface INewsRepository {
  getAllNews(): Promise<News[]>;
  getLatestNews(limit?: number): Promise<News[]>;
  getNewsBySlug(slug: string): Promise<News | null>;
  getNewsByTag(tag: string): Promise<News[]>;
}
