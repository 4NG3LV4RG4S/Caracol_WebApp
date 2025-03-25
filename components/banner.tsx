"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type BannerItem = {
  id: number
  title: string
  description: string
  imageUrl: string
  buttonText: string
  buttonLink: string
}

const bannerItems: BannerItem[] = [
  {
    id: 1,
    title: "Café de especialidad",
    description: "Descubre nuestros granos de café cuidadosamente seleccionados",
    imageUrl: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/Banners/Banner1Resize.jpeg",
    buttonText: "Ver productos",
    buttonLink: "/productos",
  },
  {
    id: 2,
    title: "Métodos de extracción",
    description: "Visita nuestra barra y prueba distintos métodos de preparación",
    imageUrl: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/Banners/Banner2Resize.jpeg",
    buttonText: "Visítanos",
    buttonLink: "/contacto",
  },
  {
    id: 3,
    title: "Productos derivados del café",
    description: "Licores, mermeladas, bombones y más productos artesanales",
    imageUrl: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/Banners/Banner3Resize.jpeg",
    buttonText: "Explorar",
    buttonLink: "/productos",
  },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerItems.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden mt-16">
      {bannerItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src={item.imageUrl || "/placeholder.svg"}
            alt={item.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{item.title}</h2>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">{item.description}</p>
            <Button asChild size="lg" className="bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white">
              <a href={item.buttonLink}>{item.buttonText}</a>
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm hover:bg-white/50 border-none text-white rounded-full h-10 w-10"
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm hover:bg-white/50 border-none text-white rounded-full h-10 w-10"
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

