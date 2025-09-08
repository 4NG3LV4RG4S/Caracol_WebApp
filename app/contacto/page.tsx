"use client"

import { useState } from "react"
import { ContactForm, ContactInfo, LocationMap } from "@/components/Contacto"

export default function ContactoPage() {
  const locations = [
    {
      id: "main",
      name: "Tienda Principal",
      address: "Calle del Café 123, Centro Histórico, Ixhuatlán del Café, Veracruz",
      phone: "+52 (228) 123-4567",
      email: "hola@caracolillo.com",
      hours: {
        weekdays: "7:00 AM - 8:00 PM",
        weekends: "8:00 AM - 9:00 PM"
      },
      services: ["Venta de café", "Cafetería", "Talleres", "Catas"],
      coordinates: {
        lat: 19.4326,
        lng: -99.1332
      }
    },
    {
      id: "roastery",
      name: "Tostadora y Centro de Distribución",
      address: "Zona Industrial Norte, Bodega 45, Ixhuatlán del Café, Veracruz",
      phone: "+52 (228) 123-4568",
      email: "produccion@caracolillo.com",
      hours: {
        weekdays: "6:00 AM - 6:00 PM",
        weekends: "Cerrado"
      },
      services: ["Tostado", "Ventas al por mayor", "Visitas guiadas", "Almacén"],
      coordinates: {
        lat: 19.4286,
        lng: -99.1372
      }
    }
  ]

  const mapLocations = [
    {
      id: "main",
      name: "Tienda Principal",
      address: "Calle del Café 123, Centro Histórico, Ixhuatlán del Café, Veracruz",
      phone: "+52 (228) 123-4567",
      coordinates: {
        lat: 19.4326,
        lng: -99.1332
      },
      isOpen: true
    },
    {
      id: "roastery",
      name: "Tostadora y Centro de Distribución",
      address: "Zona Industrial Norte, Bodega 45, Ixhuatlán del Café, Veracruz",
      phone: "+52 (228) 123-4568",
      coordinates: {
        lat: 19.4286,
        lng: -99.1372
      },
      isOpen: true,
      nextOpenTime: "mañana a las 6:00 AM"
    }
  ]

  const [selectedLocation, setSelectedLocation] = useState<string>("main")

  const handleContactSubmit = (data: any) => {
    console.log("Formulario de contacto enviado:", data)
    // Aquí iría la lógica para enviar el formulario
    alert("¡Gracias por tu mensaje! Te responderemos pronto.")
  }

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId)
  }

  return (
    <main className="container mx-auto px-4 py-12 mt-16 space-y-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#9c7a5b] mb-4">Contáctanos</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Visítanos en nuestras ubicaciones, 
          llámanos o envíanos un mensaje. ¡Nos encanta conectar con los amantes del café!
        </p>
      </div>

      {/* Información de Contacto */}
      <section>
        <ContactInfo locations={locations} />
      </section>

      {/* Mapa de Ubicaciones */}
      <section>
        <LocationMap 
          locations={mapLocations}
          selectedLocation={selectedLocation}
          onLocationSelect={handleLocationSelect}
        />
      </section>

      {/* Formulario de Contacto */}
      <section className="bg-[#f7f3e9] rounded-2xl p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#9c7a5b] mb-4">Envíanos un Mensaje</h2>
            <p className="text-gray-600">
              ¿Tienes alguna pregunta, sugerencia o simplemente quieres saludarnos? 
              Completa el formulario y te responderemos lo antes posible.
            </p>
          </div>
          <div className="flex justify-center">
            <ContactForm onSubmit={handleContactSubmit} />
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="text-center bg-white rounded-2xl p-8 border border-[#e6ccb2]">
        <h3 className="text-2xl font-bold text-[#9c7a5b] mb-4">Otras Formas de Conectar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="w-16 h-16 bg-[#a8d5ba] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="font-semibold text-[#9c7a5b] mb-2">WhatsApp</h4>
            <p className="text-gray-600 text-sm mb-3">
              Chatea con nosotros para consultas rápidas
            </p>
            <p className="font-medium text-[#9c7a5b]">+52 (228) 123-4567</p>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-[#a8d5ba] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h4 className="font-semibold text-[#9c7a5b] mb-2">Email Directo</h4>
            <p className="text-gray-600 text-sm mb-3">
              Para consultas detalladas o comerciales
            </p>
            <p className="font-medium text-[#9c7a5b]">hola@caracolillo.com</p>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-[#a8d5ba] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="font-semibold text-[#9c7a5b] mb-2">Redes Sociales</h4>
            <p className="text-gray-600 text-sm mb-3">
              Síguenos para contenido exclusivo
            </p>
            <p className="font-medium text-[#9c7a5b]">@CaracolilloCafe</p>
          </div>
        </div>
      </section>
    </main>
  )
}
