"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Coffee, Car } from "lucide-react"

interface ContactLocation {
  id: string
  name: string
  address: string
  phone: string
  email: string
  hours: {
    weekdays: string
    weekends: string
  }
  services: string[]
  coordinates?: {
    lat: number
    lng: number
  }
}

interface ContactInfoProps {
  locations: ContactLocation[]
}

export default function ContactInfo({ locations }: ContactInfoProps) {
  const defaultLocations: ContactLocation[] = [
    {
      id: "main",
      name: "Tienda Principal",
      address: "Calle del Café 123, Centro Histórico, Ciudad",
      phone: "+57 (1) 234-5678",
      email: "hola@caracolillo.com",
      hours: {
        weekdays: "7:00 AM - 8:00 PM",
        weekends: "8:00 AM - 9:00 PM"
      },
      services: ["Venta de café", "Cafetería", "Talleres", "Catas"]
    },
    {
      id: "roastery",
      name: "Tostadora y Almacén",
      address: "Zona Industrial Norte, Bodega 45",
      phone: "+57 (1) 234-5679",
      email: "produccion@caracolillo.com",
      hours: {
        weekdays: "6:00 AM - 6:00 PM",
        weekends: "Cerrado"
      },
      services: ["Tostado", "Ventas al por mayor", "Visitas guiadas"]
    }
  ]

  const displayLocations = locations.length > 0 ? locations : defaultLocations

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-[#f7f3e9] to-[#e6ccb2] border-[#9c7a5b]">
        <CardHeader>
          <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Información de Contacto
          </CardTitle>
          <p className="text-gray-600">
            Visítanos en nuestras ubicaciones o contáctanos por los medios que prefieras
          </p>
        </CardHeader>
      </Card>

      {/* Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayLocations.map((location) => (
          <Card key={location.id} className="bg-white border-[#e6ccb2] hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                {location.name}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9c7a5b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">{location.address}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-[#9c7a5b] hover:text-[#8b6a4d]"
                    asChild
                  >
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#9c7a5b] flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">{location.phone}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-[#9c7a5b] hover:text-[#8b6a4d]"
                    asChild
                  >
                    <a href={`tel:${location.phone}`}>
                      Llamar ahora
                    </a>
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#9c7a5b] flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">{location.email}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-[#9c7a5b] hover:text-[#8b6a4d]"
                    asChild
                  >
                    <a href={`mailto:${location.email}`}>
                      Enviar correo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#9c7a5b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Horarios de atención</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><span className="font-medium">Lunes - Viernes:</span> {location.hours.weekdays}</p>
                    <p><span className="font-medium">Sábados - Domingos:</span> {location.hours.weekends}</p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-[#9c7a5b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Servicios disponibles</p>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-[#f7f3e9] text-[#9c7a5b] rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t border-[#e6ccb2]">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
                  asChild
                >
                  <a href={`tel:${location.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
                  asChild
                >
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Cómo llegar
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Contact Methods */}
      <Card className="bg-white border-[#e6ccb2]">
        <CardHeader>
          <CardTitle className="text-[#9c7a5b]">Otros medios de contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#a8d5ba] rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-[#9c7a5b]" />
              </div>
              <h3 className="font-semibold text-[#9c7a5b] mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-2">
                Chatea con nosotros para consultas rápidas
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
              >
                Abrir WhatsApp
              </Button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#a8d5ba] rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-[#9c7a5b]" />
              </div>
              <h3 className="font-semibold text-[#9c7a5b] mb-2">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-2">
                Suscríbete para recibir noticias y ofertas
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
              >
                Suscribirse
              </Button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#a8d5ba] rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="w-6 h-6 text-[#9c7a5b]" />
              </div>
              <h3 className="font-semibold text-[#9c7a5b] mb-2">Redes Sociales</h3>
              <p className="text-sm text-gray-600 mb-2">
                Síguenos en nuestras redes sociales
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
              >
                Seguir
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
