"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award } from "lucide-react"

interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  type: "founding" | "milestone" | "expansion" | "award" | "product"
  location?: string
  image?: string
}

interface CompanyTimelineProps {
  events: TimelineEvent[]
}

export default function CompanyTimeline({ events }: CompanyTimelineProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "founding": return <Users className="w-5 h-5" />
      case "milestone": return <Award className="w-5 h-5" />
      case "expansion": return <MapPin className="w-5 h-5" />
      case "award": return <Award className="w-5 h-5" />
      case "product": return <Calendar className="w-5 h-5" />
      default: return <Calendar className="w-5 h-5" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "founding": return "bg-blue-500"
      case "milestone": return "bg-green-500"
      case "expansion": return "bg-purple-500"
      case "award": return "bg-yellow-500"
      case "product": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "founding": return "bg-blue-100 text-blue-800"
      case "milestone": return "bg-green-100 text-green-800"
      case "expansion": return "bg-purple-100 text-purple-800"
      case "award": return "bg-yellow-100 text-yellow-800"
      case "product": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e6ccb2]" />
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative flex items-start gap-6">
            {/* Timeline Dot */}
            <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${getEventColor(event.type)} text-white shadow-lg`}>
              {getEventIcon(event.type)}
            </div>
            
            {/* Event Card */}
            <Card className="flex-1 bg-white border-[#e6ccb2] hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-[#9c7a5b]">{event.year}</span>
                      <Badge className={getEventBadgeColor(event.type)}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-[#9c7a5b] mb-2">
                      {event.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-3">
                  {event.description}
                </p>
                
                {event.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
