"use client"

import { useState } from "react"
import { NewsCard, NewsFilter, Newsletter } from "@/components/Noticias"

export default function NoticiasPage() {
  const [filters, setFilters] = useState({})

  const articles = [
    {
      id: "1",
      title: "El Arte del Tostado: Secretos de Nuestros Maestros Tostadores",
      excerpt: "Descubre los secretos detrás del perfecto tostado de café y cómo nuestros maestros tostadores crean perfiles únicos para cada origen.",
      content: "El tostado es un arte que requiere años de experiencia y dedicación. Nuestros maestros tostadores han perfeccionado técnicas que resaltan las características únicas de cada origen...",
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/news/tostado-arte.jpg",
      category: "café",
      author: "Carlos Pérez",
      publishDate: new Date("2024-01-15"),
      readTime: 5,
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: "2",
      title: "Nuevas Recetas de Cold Brew para el Verano",
      excerpt: "Refréscate con nuestras nuevas recetas de cold brew, perfectas para los días calurosos de verano.",
      content: "El cold brew se ha convertido en una de las formas más populares de disfrutar el café durante el verano...",
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/news/cold-brew-verano.jpg",
      category: "recetas",
      author: "María Fernández",
      publishDate: new Date("2024-01-10"),
      readTime: 3,
      views: 890,
      likes: 67,
      featured: false
    },
    {
      id: "3",
      title: "Taller de Latte Art: Próximas Fechas Disponibles",
      excerpt: "Únete a nuestros talleres de latte art y aprende a crear hermosas figuras en tu café.",
      content: "El latte art es una forma de expresión artística que combina técnica y creatividad...",
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/news/latte-art-taller.jpg",
      category: "eventos",
      author: "Ana López",
      publishDate: new Date("2024-01-08"),
      readTime: 4,
      views: 654,
      likes: 45,
      featured: false
    },
    {
      id: "4",
      title: "Sostenibilidad en el Café: Nuestro Compromiso Ambiental",
      excerpt: "Conoce las prácticas sostenibles que implementamos desde la finca hasta tu taza.",
      content: "La sostenibilidad es fundamental en nuestra cadena de suministro...",
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/news/sostenibilidad.jpg",
      category: "sostenibilidad",
      author: "Juan Ángel Vargas",
      publishDate: new Date("2024-01-05"),
      readTime: 6,
      views: 432,
      likes: 78,
      featured: false
    },
    {
      id: "5",
      title: "La Cultura del Café en México: Tradición y Modernidad",
      excerpt: "Un recorrido por la rica tradición cafetera mexicana y su evolución hacia la especialidad.",
      content: "México tiene una rica tradición cafetera que se remonta a siglos atrás...",
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/news/cultura-mexico.jpg",
      category: "cultura",
      author: "Carlos Pérez",
      publishDate: new Date("2024-01-02"),
      readTime: 7,
      views: 987,
      likes: 123,
      featured: false
    }
  ]

  const filterOptions = {
    categories: ["café", "recetas", "eventos", "cultura", "sostenibilidad", "empresa"],
    authors: ["Carlos Pérez", "María Fernández", "Ana López", "Juan Ángel Vargas"],
    dateRanges: [
      { label: "Última semana", value: "week" },
      { label: "Último mes", value: "month" },
      { label: "Últimos 3 meses", value: "quarter" },
      { label: "Último año", value: "year" }
    ]
  }

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
  }

  const handleNewsletterSubscribe = (data: { email: string; preferences: string[] }) => {
    console.log("Suscripción al newsletter:", data)
    // Aquí iría la lógica de suscripción
  }

  // Separar artículo destacado
  const featuredArticle = articles.find(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

  return (
    <main className="container mx-auto px-4 py-12 mt-16 space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#9c7a5b] mb-4">Noticias y Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Mantente al día con las últimas noticias del mundo del café, recetas exclusivas, 
          eventos especiales y todo sobre la cultura cafetera.
        </p>
      </div>

      {/* Artículo Destacado */}
      {featuredArticle && (
        <section>
          <h2 className="text-2xl font-bold text-[#9c7a5b] mb-6">Artículo Destacado</h2>
          <NewsCard article={featuredArticle} variant="featured" />
        </section>
      )}

      {/* Contenido Principal */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar con Filtros y Newsletter */}
        <aside className="lg:w-1/4 space-y-8">
          <NewsFilter options={filterOptions} onFilterChange={handleFilterChange} />
          <Newsletter onSubscribe={handleNewsletterSubscribe} />
        </aside>

        {/* Grid de Artículos */}
        <div className="lg:w-3/4">
          <h2 className="text-2xl font-bold text-[#9c7a5b] mb-6">Últimos Artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
