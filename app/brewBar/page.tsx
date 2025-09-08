"use client"

import { useState } from "react"
import { MenuCard, ReservationForm, CafeAmbiance } from "@/components/BrewBar"

export default function BrewBarPage() {
  const menuItems = [
    {
      id: "1",
      name: "Espresso Caracolillo",
      description: "Shot perfecto de nuestro blend especial con crema dorada y sabor intenso.",
      price: 8500,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/menu/espresso.jpg",
      category: "espresso" as const,
      preparationTime: 2,
      temperature: "caliente" as const,
      available: true,
      ingredients: ["Café Caracolillo", "Agua filtrada"]
    },
    {
      id: "2",
      name: "Cappuccino Artesanal",
      description: "Espresso con leche vaporizada y arte latte personalizado.",
      price: 12000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/menu/cappuccino.jpg",
      category: "espresso" as const,
      preparationTime: 4,
      temperature: "caliente" as const,
      available: true,
      ingredients: ["Espresso", "Leche entera", "Arte latte"]
    },
    {
      id: "3",
      name: "V60 Pour Over",
      description: "Café filtrado con método V60, resalta las notas únicas de cada origen.",
      price: 15000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/menu/v60.jpg",
      category: "filtrado" as const,
      preparationTime: 6,
      temperature: "caliente" as const,
      available: true,
      ingredients: ["Café de origen", "Agua a 92°C", "Filtro V60"]
    },
    {
      id: "4",
      name: "Cold Brew Caracolillo",
      description: "Extracción en frío de 12 horas, suave y refrescante.",
      price: 13000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/menu/cold-brew.jpg",
      category: "frio" as const,
      preparationTime: 2,
      temperature: "frio" as const,
      available: true,
      ingredients: ["Café Cold Brew", "Hielo", "Agua fría"]
    },
    {
      id: "5",
      name: "Affogato Caracolillo",
      description: "Helado de vainilla artesanal bañado en espresso caliente.",
      price: 16000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/menu/affogato.jpg",
      category: "especial" as const,
      preparationTime: 3,
      temperature: "frio" as const,
      available: true,
      ingredients: ["Espresso", "Helado de vainilla", "Cacao en polvo"]
    },
    {
      id: "6",
      name: "Chemex Especial",
      description: "Método Chemex con café de temporada, cuerpo limpio y brillante.",
      price: 18000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/menu/chemex.jpg",
      category: "filtrado" as const,
      preparationTime: 8,
      temperature: "caliente" as const,
      available: false,
      ingredients: ["Café de temporada", "Filtro Chemex", "Agua purificada"]
    }
  ]

  const handleOrder = (item: any) => {
    console.log("Ordenando:", item.name)
    // Aquí iría la lógica de pedidos
  }

  const handleReservation = (data: any) => {
    console.log("Reserva:", data)
    // Aquí iría la lógica de reservas
  }

  return (
    <main className="container mx-auto px-4 py-12 mt-16 space-y-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#9c7a5b] mb-4">Cafetería Caracolillo</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Disfruta de nuestros métodos de preparación artesanales en un ambiente 
          acogedor diseñado para los verdaderos amantes del café.
        </p>
      </div>

      {/* Ambiente del Café */}
      <section>
        <h2 className="text-3xl font-bold text-[#9c7a5b] mb-8">Ambiente del Café</h2>
        <CafeAmbiance />
      </section>

      {/* Menú */}
      <section>
        <h2 className="text-3xl font-bold text-[#9c7a5b] mb-8">Nuestro Menú</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map(item => (
            <MenuCard key={item.id} item={item} onOrder={handleOrder} />
          ))}
        </div>
      </section>

      {/* Reservas */}
      <section className="bg-[#f7f3e9] rounded-2xl p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#9c7a5b] mb-4">Reserva tu Mesa</h2>
            <p className="text-gray-600">
              Asegura tu lugar en nuestra cafetería y disfruta de una experiencia única.
            </p>
          </div>
          <div className="flex justify-center">
            <ReservationForm onSubmit={handleReservation} />
          </div>
        </div>
      </section>
    </main>
  )
}
