"use client"

import { useState } from "react"
import { CommunityForum, EventCalendar, UserProfiles } from "@/components/Community"

export default function CommunityPage() {
  const forumPosts = [
    {
      id: "1",
      title: "¿Cuál es el mejor método para preparar café V60?",
      content: "Hola comunidad, soy nuevo en el mundo del café filtrado y me gustaría conocer sus técnicas favoritas para el V60. ¿Qué temperatura del agua recomiendan?",
      author: {
        name: "Miguel Santos",
        avatar: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/users/miguel.jpg",
        role: "member" as const
      },
      category: "Técnicas de preparación",
      createdAt: new Date("2024-01-14"),
      replies: 12,
      likes: 8,
      isPinned: false,
      isAnswered: true
    },
    {
      id: "2",
      title: "Taller de Latte Art - Compartiendo mis primeros intentos",
      content: "Después del taller del fin de semana, quería compartir mis primeros intentos de latte art. ¡Cualquier consejo es bienvenido!",
      author: {
        name: "Laura Jiménez",
        avatar: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/users/laura.jpg",
        role: "member" as const
      },
      category: "Latte Art",
      createdAt: new Date("2024-01-13"),
      replies: 18,
      likes: 25,
      isPinned: true,
      isAnswered: false
    },
    {
      id: "3",
      title: "Recomendaciones de cafés para espresso",
      content: "Busco recomendaciones de granos que funcionen bien para espresso. Prefiero perfiles con notas a chocolate y caramelo.",
      author: {
        name: "Carlos Mendoza",
        avatar: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/users/carlos.jpg",
        role: "expert" as const
      },
      category: "Recomendaciones",
      createdAt: new Date("2024-01-12"),
      replies: 7,
      likes: 15,
      isPinned: false,
      isAnswered: true
    }
  ]

  const events = [
    {
      id: "1",
      title: "Taller de Cata de Café",
      description: "Aprende a identificar diferentes perfiles de sabor y aroma en cafés de especialidad.",
      date: new Date("2024-02-15"),
      time: "10:00 AM",
      location: "Cafetería Caracolillo - Sala de Cata",
      type: "workshop" as const,
      capacity: 12,
      registered: 8,
      price: 45000,
      difficulty: "beginner" as const,
      instructor: "Carlos Pérez",
      featured: true
    },
    {
      id: "2",
      title: "Competencia de Latte Art",
      description: "Demuestra tus habilidades en latte art y compite por increíbles premios.",
      date: new Date("2024-02-20"),
      time: "2:00 PM",
      location: "Cafetería Caracolillo - Área Principal",
      type: "competition" as const,
      capacity: 20,
      registered: 15,
      price: 0,
      difficulty: "intermediate" as const,
      featured: false
    },
    {
      id: "3",
      title: "Curso de Barista Profesional",
      description: "Curso intensivo de 3 días para convertirte en barista profesional.",
      date: new Date("2024-03-01"),
      time: "9:00 AM",
      location: "Academia Caracolillo",
      type: "course" as const,
      capacity: 8,
      registered: 3,
      price: 350000,
      difficulty: "advanced" as const,
      instructor: "María Fernández",
      featured: true
    },
    {
      id: "4",
      title: "Encuentro Mensual de Cafeteros",
      description: "Reunión informal para compartir experiencias y conocer otros amantes del café.",
      date: new Date("2024-02-25"),
      time: "4:00 PM",
      location: "Cafetería Caracolillo - Terraza",
      type: "meetup" as const,
      capacity: 30,
      registered: 12,
      price: 0,
      difficulty: "beginner" as const,
      featured: false
    }
  ]

  const userProfiles = [
    {
      id: "1",
      name: "Ana López",
      avatar: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/users/ana-lopez.jpg",
      role: "moderator" as const,
      joinDate: new Date("2023-03-15"),
      bio: "Barista profesional y amante del café de especialidad. Siempre dispuesta a ayudar a nuevos miembros.",
      location: "Ciudad de México",
      favoriteOrigin: "Etiopía",
      brewingMethods: ["V60", "Chemex", "Espresso", "French Press"],
      stats: {
        posts: 156,
        likes: 892,
        eventsAttended: 23,
        recipesShared: 12
      },
      badges: [
        {
          id: "1",
          name: "Experto en Filtrado",
          description: "Domina múltiples métodos de café filtrado",
          icon: "☕",
          rarity: "rare" as const
        },
        {
          id: "2",
          name: "Mentor de la Comunidad",
          description: "Ha ayudado a más de 50 nuevos miembros",
          icon: "🏆",
          rarity: "epic" as const
        }
      ],
      level: 8,
      experience: 2340,
      maxExperience: 3000
    },
    {
      id: "2",
      name: "Diego Ramírez",
      avatar: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/users/diego.jpg",
      role: "expert" as const,
      joinDate: new Date("2023-06-20"),
      bio: "Tostador artesanal con 5 años de experiencia. Especializado en perfiles de tueste para espresso.",
      location: "Guadalajara",
      favoriteOrigin: "Colombia",
      brewingMethods: ["Espresso", "Moka", "Turkish"],
      stats: {
        posts: 89,
        likes: 567,
        eventsAttended: 15,
        recipesShared: 8
      },
      badges: [
        {
          id: "3",
          name: "Maestro Tostador",
          description: "Conocimiento avanzado en tostado de café",
          icon: "🔥",
          rarity: "legendary" as const
        }
      ],
      level: 6,
      experience: 1890,
      maxExperience: 2500
    },
    {
      id: "3",
      name: "Sofia Herrera",
      avatar: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/users/sofia.jpg",
      role: "member" as const,
      joinDate: new Date("2023-11-10"),
      bio: "Nueva en el mundo del café de especialidad pero muy entusiasta. Me encanta aprender nuevas técnicas.",
      location: "Monterrey",
      favoriteOrigin: "Guatemala",
      brewingMethods: ["French Press", "V60"],
      stats: {
        posts: 23,
        likes: 145,
        eventsAttended: 4,
        recipesShared: 2
      },
      badges: [
        {
          id: "4",
          name: "Nuevo Miembro",
          description: "Bienvenido a la comunidad",
          icon: "🌟",
          rarity: "common" as const
        }
      ],
      level: 2,
      experience: 450,
      maxExperience: 1000
    }
  ]

  const categories = ["Técnicas de preparación", "Latte Art", "Recomendaciones", "Equipos", "Recetas"]

  return (
    <main className="container mx-auto px-4 py-12 mt-16 space-y-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#9c7a5b] mb-4">Comunidad Caracolillo</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Únete a nuestra comunidad de amantes del café. Comparte experiencias, 
          aprende nuevas técnicas y conecta con otros apasionados del café de especialidad.
        </p>
      </div>

      {/* Foro de la Comunidad */}
      <section>
        <CommunityForum posts={forumPosts} categories={categories} />
      </section>

      {/* Calendario de Eventos */}
      <section>
        <EventCalendar events={events} />
      </section>

      {/* Perfiles de Usuarios Destacados */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#9c7a5b] mb-4">Miembros Destacados</h2>
          <p className="text-gray-600">
            Conoce a algunos de los miembros más activos de nuestra comunidad
          </p>
        </div>
        <UserProfiles profiles={userProfiles} />
      </section>
    </main>
  )
}
