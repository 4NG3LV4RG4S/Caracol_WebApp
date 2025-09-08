"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Coffee, Star } from "lucide-react"

interface CommunityEvent {
  id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  type: "workshop" | "tasting" | "meetup" | "competition" | "course"
  capacity: number
  registered: number
  price: number
  difficulty: "beginner" | "intermediate" | "advanced"
  instructor?: string
  featured: boolean
}

interface EventCalendarProps {
  events: CommunityEvent[]
}

export default function EventCalendar({ events }: EventCalendarProps) {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid")

  const eventTypes = ["workshop", "tasting", "meetup", "competition", "course"]
  
  const filteredEvents = events
    .filter(event => selectedType === "all" || event.type === selectedType)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      workshop: "bg-blue-100 text-blue-800",
      tasting: "bg-amber-100 text-amber-800",
      meetup: "bg-green-100 text-green-800",
      competition: "bg-red-100 text-red-800",
      course: "bg-purple-100 text-purple-800"
    }
    return colors[type] || "bg-gray-100 text-gray-800"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800"
      case "intermediate": return "bg-yellow-100 text-yellow-800"
      case "advanced": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  const getAvailabilityStatus = (registered: number, capacity: number) => {
    const percentage = (registered / capacity) * 100
    if (percentage >= 100) return { text: "Completo", color: "bg-red-100 text-red-800" }
    if (percentage >= 80) return { text: "Últimos cupos", color: "bg-orange-100 text-orange-800" }
    if (percentage >= 50) return { text: "Disponible", color: "bg-yellow-100 text-yellow-800" }
    return { text: "Muchos cupos", color: "bg-green-100 text-green-800" }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-[#f7f3e9] to-[#e6ccb2] border-[#9c7a5b]">
        <CardHeader>
          <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Calendario de Eventos
          </CardTitle>
          <p className="text-gray-600">
            Únete a nuestros talleres, catas y eventos especiales
          </p>
        </CardHeader>
      </Card>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedType === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedType("all")}
            className={selectedType === "all" ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
          >
            Todos
          </Button>
          {eventTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(type)}
              className={selectedType === type ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
          >
            Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
          >
            Lista
          </Button>
        </div>
      </div>

      {/* Events Display */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {filteredEvents.map((event) => {
          const availability = getAvailabilityStatus(event.registered, event.capacity)
          
          return (
            <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-[#e6ccb2] overflow-hidden">
              <CardContent className="p-0">
                {/* Event Header */}
                <div className="bg-gradient-to-r from-[#9c7a5b] to-[#8b6a4d] text-white p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      {event.featured && (
                        <Star className="w-5 h-5 text-yellow-300 fill-current" />
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-4 space-y-3">
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.registered}/{event.capacity} personas</span>
                    </div>
                    {event.instructor && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Coffee className="w-4 h-4" />
                        <span>Instructor: {event.instructor}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge className={availability.color}>
                        {availability.text}
                      </Badge>
                      <Badge className={getDifficultyColor(event.difficulty)}>
                        {event.difficulty}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-[#9c7a5b]">
                        {event.price === 0 ? "Gratis" : `$${event.price.toLocaleString()}`}
                      </span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-[#a8d5ba] hover:bg-[#95c7a8] text-[#9c7a5b]"
                    disabled={event.registered >= event.capacity}
                  >
                    {event.registered >= event.capacity ? "Evento completo" : "Registrarse"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredEvents.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              No hay eventos disponibles
            </h3>
            <p className="text-gray-500">
              {selectedType === "all" 
                ? "No hay eventos programados en este momento."
                : `No hay eventos de tipo "${selectedType}" disponibles.`
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
