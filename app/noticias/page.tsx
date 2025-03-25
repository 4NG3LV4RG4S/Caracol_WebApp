import NewsCard from "@/components/news-card"
import SectionTitle from "@/components/section-title"

// Datos de ejemplo de noticias
const news = [
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
  {
    id: 4,
    title: "Visitamos fincas cafetaleras en Chiapas",
    summary:
      "Nuestro equipo visitó diferentes fincas cafetaleras en Chiapas para conocer de primera mano los procesos de cultivo y selección de granos.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "15 Mar 2024",
    slug: "visita-fincas-cafetaleras-chiapas",
  },
  {
    id: 5,
    title: "Nueva línea de accesorios para preparar café",
    summary:
      "Conoce nuestra nueva línea de accesorios para preparar café: desde prensas francesas hasta drippers, todo lo que necesitas para disfrutar del mejor café en casa.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "10 Mar 2024",
    slug: "nueva-linea-accesorios-cafe",
  },
  {
    id: 6,
    title: "Cata de café: aprendiendo a distinguir sabores",
    summary:
      "Realizamos una cata de café donde los asistentes pudieron aprender a distinguir los diferentes sabores y aromas presentes en distintas variedades de café.",
    imageUrl: "/placeholder.svg?height=500&width=800",
    date: "5 Mar 2024",
    slug: "cata-cafe-distinguir-sabores",
  },
]

export default function NoticiasPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <SectionTitle
        title="Noticias y Artículos"
        subtitle="Mantente al día con las novedades del mundo del café"
        centered={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            summary={item.summary}
            imageUrl={item.imageUrl}
            date={item.date}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  )
}

