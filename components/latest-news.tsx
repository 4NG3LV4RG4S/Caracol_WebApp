import NewsCard from "./news-card"
import SectionTitle from "./section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const latestNews = [
  {
    id: 1,
    title: "Nuevas variedades de café para esta temporada",
    summary:
      "Descubre las nuevas variedades de café que hemos incorporado a nuestro catálogo para esta temporada. Cafés de orígenes exóticos con sabores únicos.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "28 Mar 2024",
    slug: "nuevas-variedades-cafe-temporada",
  },
  {
    id: 2,
    title: "Taller de métodos de extracción este fin de semana",
    summary:
      "No te pierdas nuestro taller donde aprenderás diferentes métodos de extracción de café y cómo sacar el máximo provecho a tu café favorito.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "25 Mar 2024",
    slug: "taller-metodos-extraccion",
  },
  {
    id: 3,
    title: "El proceso honey: dulzura natural en tu taza",
    summary:
      "Conoce más sobre el proceso honey, una técnica que conserva parte del mucílago del café para lograr notas más dulces y un perfil único.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "20 Mar 2024",
    slug: "proceso-honey-dulzura-natural",
  },
]

export default function LatestNews() {
  return (
    <section className="py-16 bg-[#f7f3e9]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Últimas Noticias"
          subtitle="Mantente al día con las novedades del mundo del café"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              summary={news.summary}
              imageUrl={news.imageUrl}
              date={news.date}
              slug={news.slug}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b]/10">
            <Link href="/noticias">Ver todas las noticias</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

