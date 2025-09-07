import { News } from '@/src/domain/entities/News';
import { INewsRepository } from '@/src/domain/repositories/INewsRepository';

export class NewsService {
  constructor(private readonly newsRepository: INewsRepository) {}

  async getAllNews(): Promise<News[]> {
    try {
      return await this.newsRepository.getAllNews();
    } catch (error) {
      console.error('Error fetching all news:', error);
      throw new Error('Failed to fetch news');
    }
  }

  async getLatestNews(limit?: number): Promise<News[]> {
    try {
      return await this.newsRepository.getLatestNews(limit);
    } catch (error) {
      console.error('Error fetching latest news:', error);
      throw new Error('Failed to fetch latest news');
    }
  }

  async getNewsBySlug(slug: string): Promise<News | null> {
    if (!slug) {
      throw new Error('News slug is required');
    }

    try {
      return await this.newsRepository.getNewsBySlug(slug);
    } catch (error) {
      console.error(`Error fetching news with slug ${slug}:`, error);
      throw new Error('Failed to fetch news article');
    }
  }

  async getNewsByTag(tag: string): Promise<News[]> {
    if (!tag) {
      throw new Error('Tag is required');
    }

    try {
      return await this.newsRepository.getNewsByTag(tag);
    } catch (error) {
      console.error(`Error fetching news by tag ${tag}:`, error);
      throw new Error('Failed to fetch news by tag');
    }
  }
}
