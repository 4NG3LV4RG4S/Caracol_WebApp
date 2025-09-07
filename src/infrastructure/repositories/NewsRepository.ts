import { News } from '@/src/domain/entities/News';
import { INewsRepository } from '@/src/domain/repositories/INewsRepository';

// Mock data for news - in a real app this would come from an API
const mockNews: News[] = [
  {
    id: 1,
    title: "Nuevas variedades de café para esta temporada",
    summary: "Descubre las nuevas variedades de café que hemos incorporado a nuestro catálogo para esta temporada. Cafés de orígenes exóticos con sabores únicos.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "28 Mar 2024",
    slug: "nuevas-variedades-cafe-temporada",
    tags: ["café", "variedades", "temporada"]
  },
  {
    id: 2,
    title: "Taller de métodos de extracción este fin de semana",
    summary: "No te pierdas nuestro taller donde aprenderás diferentes métodos de extracción de café y cómo sacar el máximo provecho a tu café favorito.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "25 Mar 2024",
    slug: "taller-metodos-extraccion",
    tags: ["taller", "extracción", "métodos"]
  },
  {
    id: 3,
    title: "El proceso honey: dulzura natural en tu taza",
    summary: "Conoce más sobre el proceso honey, una técnica que conserva parte del mucílago del café para lograr notas más dulces y un perfil único.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "20 Mar 2024",
    slug: "proceso-honey-dulzura-natural",
    tags: ["proceso", "honey", "técnicas"]
  },
  {
    id: 4,
    title: "Visitamos fincas cafetaleras en Chiapas",
    summary: "Nuestro equipo visitó diferentes fincas cafetaleras en Chiapas para conocer de primera mano los procesos de cultivo y selección de granos.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "15 Mar 2024",
    slug: "visita-fincas-cafetaleras-chiapas",
    tags: ["fincas", "chiapas", "cultivo"]
  },
  {
    id: 5,
    title: "Nueva línea de accesorios para preparar café",
    summary: "Conoce nuestra nueva línea de accesorios para preparar café: desde prensas francesas hasta drippers, todo lo que necesitas para disfrutar del mejor café en casa.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "10 Mar 2024",
    slug: "nueva-linea-accesorios-cafe",
    tags: ["accesorios", "preparación", "casa"]
  },
  {
    id: 6,
    title: "Cata de café: aprendiendo a distinguir sabores",
    summary: "Realizamos una cata de café donde los asistentes pudieron aprender a distinguir los diferentes sabores y aromas presentes en distintas variedades de café.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "5 Mar 2024",
    slug: "cata-cafe-distinguir-sabores",
    tags: ["cata", "sabores", "degustación"]
  }
];

export class NewsRepository implements INewsRepository {
  async getAllNews(): Promise<News[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...mockNews];
  }

  async getLatestNews(limit: number = 3): Promise<News[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockNews.slice(0, limit);
  }

  async getNewsBySlug(slug: string): Promise<News | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockNews.find(news => news.slug === slug) || null;
  }

  async getNewsByTag(tag: string): Promise<News[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockNews.filter(news => 
      news.tags?.some(newsTag => newsTag.toLowerCase().includes(tag.toLowerCase()))
    );
  }
}
