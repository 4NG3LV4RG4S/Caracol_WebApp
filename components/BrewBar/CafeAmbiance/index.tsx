"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Music, Volume2, Users, Coffee, Clock } from "lucide-react"
import Image from "next/image"

interface AmbianceFeature {
  icon: React.ReactNode
  title: string
  description: string
  available: boolean
}

interface CafeAmbianceProps {
  features?: AmbianceFeature[]
  currentMusic?: string
  wifiPassword?: string
  capacity?: number
  currentOccupancy?: number
}

export default function CafeAmbiance({ 
  features = [],
  currentMusic = "Jazz Suave",
  wifiPassword = "CaracolilloCafe2024",
  capacity = 40,
  currentOccupancy = 12
}: CafeAmbianceProps) {
  
  const defaultFeatures: AmbianceFeature[] = [
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "WiFi Gratuito",
      description: "Conexión de alta velocidad para trabajar o estudiar",
      available: true
    },
    {
      icon: <Music className="w-5 h-5" />,
      title: "Música Ambiente",
      description: "Selección cuidadosa de jazz, bossa nova y música instrumental",
      available: true
    },
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: "Ambiente Tranquilo",
      description: "Perfecto para conversaciones, trabajo y relajación",
      available: true
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Espacios Compartidos",
      description: "Mesas comunitarias y espacios para grupos",
      available: true
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Cata de Café",
      description: "Sesiones de cata los fines de semana",
      available: false
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horario Extendido",
      description: "Abierto desde las 7:00 AM hasta las 10:00 PM",
      available: true
    }
  ]

  const displayFeatures = features.length > 0 ? features : defaultFeatures
  const occupancyPercentage = (currentOccupancy / capacity) * 100

  const getOccupancyColor = () => {
    if (occupancyPercentage < 30) return "text-green-600"
    if (occupancyPercentage < 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getOccupancyLabel = () => {
    if (occupancyPercentage < 30) return "Tranquilo"
    if (occupancyPercentage < 70) return "Moderado"
    return "Concurrido"
  }

  return (
    <div className="space-y-6">
      {/* Current Status */}
      <Card className="bg-gradient-to-r from-[#f7f3e9] to-[#e6ccb2] border-[#9c7a5b]">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Music className="w-6 h-6 text-[#9c7a5b] mr-2" />
                <span className="font-semibold text-[#9c7a5b]">Ahora Suena</span>
              </div>
              <p className="text-sm text-gray-700">{currentMusic}</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className={`w-6 h-6 mr-2 ${getOccupancyColor()}`} />
                <span className="font-semibold text-[#9c7a5b]">Ocupación</span>
              </div>
              <p className={`text-sm font-medium ${getOccupancyColor()}`}>
                {currentOccupancy}/{capacity} - {getOccupancyLabel()}
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Wifi className="w-6 h-6 text-[#9c7a5b] mr-2" />
                <span className="font-semibold text-[#9c7a5b]">WiFi</span>
              </div>
              <p className="text-xs text-gray-600">
                Red: CaracolilloCafe<br />
                Clave: {wifiPassword}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayFeatures.map((feature, index) => (
          <Card 
            key={index} 
            className={`transition-all duration-300 hover:shadow-md ${
              feature.available 
                ? "bg-white border-[#e6ccb2] hover:border-[#9c7a5b]" 
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  feature.available 
                    ? "bg-[#a8d5ba] text-[#9c7a5b]" 
                    : "bg-gray-200 text-gray-400"
                }`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold text-sm ${
                      feature.available ? "text-[#9c7a5b]" : "text-gray-400"
                    }`}>
                      {feature.title}
                    </h3>
                    <Badge 
                      variant={feature.available ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {feature.available ? "Disponible" : "Próximamente"}
                    </Badge>
                  </div>
                  <p className={`text-xs ${
                    feature.available ? "text-gray-600" : "text-gray-400"
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cafe Gallery */}
      <Card className="bg-white border-[#e6ccb2]">
        <CardContent className="p-6">
          <h3 className="font-semibold text-[#9c7a5b] mb-4 flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            Ambiente del Café
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/placeholder.jpg", alt: "Interior del café", caption: "Área principal" },
              { src: "/placeholder.jpg", alt: "Barra de café", caption: "Barra de preparación" },
              { src: "/placeholder.jpg", alt: "Zona de trabajo", caption: "Zona de trabajo" },
              { src: "/placeholder.jpg", alt: "Terraza", caption: "Terraza exterior" }
            ].map((image, index) => (
              <div key={index} className="relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={150}
                  className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-medium">{image.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
