"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Phone, Clock } from "lucide-react"

interface MapLocation {
  id: string
  name: string
  address: string
  phone: string
  coordinates: {
    lat: number
    lng: number
  }
  isOpen: boolean
  nextOpenTime?: string
}

interface LocationMapProps {
  locations: MapLocation[]
  selectedLocation?: string
  onLocationSelect?: (locationId: string) => void
}

export default function LocationMap({ locations, selectedLocation, onLocationSelect }: LocationMapProps) {
  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?daddr=${encodedAddress}`, '_blank')
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="bg-white border-[#e6ccb2] overflow-hidden">
        <CardHeader>
          <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Nuestras Ubicaciones
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Placeholder for actual map integration */}
          <div className="h-96 bg-gradient-to-br from-[#f7f3e9] to-[#e6ccb2] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-[#9c7a5b] rounded-full"></div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-[#a8d5ba] rounded-full"></div>
              <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-[#9c7a5b] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#e6ccb2] rounded-full"></div>
            </div>
            <div className="text-center z-10">
              <MapPin className="w-16 h-16 text-[#9c7a5b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#9c7a5b] mb-2">
                Mapa Interactivo
              </h3>
              <p className="text-gray-600 mb-4">
                Aquí se integraría Google Maps o Mapbox para mostrar nuestras ubicaciones
              </p>
              <Button 
                variant="outline"
                className="border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
                onClick={() => handleGetDirections(locations[0]?.address || "")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Ver en Google Maps
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((location) => (
          <Card 
            key={location.id} 
            className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
              selectedLocation === location.id 
                ? "border-[#9c7a5b] bg-[#f7f3e9]" 
                : "border-[#e6ccb2] bg-white hover:border-[#9c7a5b]"
            }`}
            onClick={() => onLocationSelect?.(location.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#9c7a5b]" />
                  <h3 className="font-semibold text-[#9c7a5b]">{location.name}</h3>
                </div>
                <Badge 
                  className={location.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                >
                  {location.isOpen ? "Abierto" : "Cerrado"}
                </Badge>
              </div>

              <p className="text-sm text-gray-600 mb-3">{location.address}</p>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <Phone className="w-4 h-4" />
                <span>{location.phone}</span>
              </div>

              {!location.isOpen && location.nextOpenTime && (
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Abre {location.nextOpenTime}</span>
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleGetDirections(location.address)
                  }}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Direcciones
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(`tel:${location.phone}`, '_self')
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Map Integration Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">
                Integración de Mapas
              </h4>
              <p className="text-sm text-blue-700">
                Para una experiencia completa, se puede integrar Google Maps API o Mapbox 
                para mostrar mapas interactivos con marcadores de ubicación, rutas y 
                información en tiempo real.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
