"use client"

import { TeamMember, CompanyTimeline, CompanyValues } from "@/components/Nosotros"

export default function NosotrosPage() {
  const team = [
    {
      id: "1",
      name: "Juan Ángel Vargas Martínez",
      position: "Co-Fundador y barista",
      bio: "Apasionada del café desde .",
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/team/ana.jpg",
      specialties: ["Tostado", "Cata", "Innovación"],
      experience: "10 años",
      email: "ana@caracolillo.com",
      linkedin: "https://linkedin.com/in/ana-lopez",
      favoriteOrigin: "Etiopía"
    },
    {
      id: "2",
      name: "Carlos Pérez",
      position: "Maestro Tostador",
      bio: "Carlos combina ciencia y arte para resaltar los mejores perfiles de cada grano.",
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/team/carlos.jpg",
      specialties: ["Tostado", "Perfilado"],
      experience: "8 años",
      twitter: "https://twitter.com/carlosperez",
      favoriteOrigin: "Colombia"
    },
    {
      id: "3",
      name: "María Fernández",
      position: "Barista Principal",
      bio: "Experta en métodos de filtrado y creación de experiencias sensoriales en la barra.",
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/team/maria.jpg",
      specialties: ["Latte Art", "Filtros", "Experiencia sensorial"],
      experience: "6 años",
      email: "maria@caracolillo.com",
      favoriteOrigin: "Kenia"
    }
  ]


  return (
    <main className="container mx-auto px-4 py-12 space-y-20">
      {/* Nuestro Equipo */}
      <section>
        <h2 className="text-3xl font-bold text-[#9c7a5b] mb-8">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Nuestra Historia */}
      <section>
        <h2 className="text-3xl font-bold text-[#9c7a5b] mb-8">Nuestra Historia</h2>
        <CompanyTimeline events={[
                  {
                      id: "1",
                      year: "2015",
                      title: "Fundación de Caracolillo",
                      description: "Nació nuestra pasión por el café de especialidad en Ixhuatlán del Café.",
                      type: "founding",
                      location: "Ixhuatlán del Café, Veracruz"
                  },
                  {
                      id: "2",
                      year: "2018",
                      title: "Primera cafetería",
                      description: "Abrimos nuestro primer espacio para compartir experiencias alrededor del café.",
                      type: "milestone",
                      location: "Centro de Ixhuatlán"
                  },
                  {
                      id: "3",
                      year: "2021",
                      title: "Premio a la innovación",
                      description: "Reconocidos a nivel nacional por nuestro enfoque en procesos sostenibles.",
                      type: "award"
                  }
              ]} />
      </section>

      {/* Nuestros Valores */}
      <section>
        <h2 className="text-3xl font-bold text-[#9c7a5b] mb-8">Nuestros Valores</h2>
        <CompanyValues />
      </section>
    </main>
  )
}
