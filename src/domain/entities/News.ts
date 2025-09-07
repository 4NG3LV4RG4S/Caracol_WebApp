export interface News {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  slug: string;
  content?: string;
  author?: string;
  tags?: string[];
}
