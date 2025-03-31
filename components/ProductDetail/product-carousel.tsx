"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProductImage = {
  id: number
  url: string
  alt: string
}

type ProductCarouselProps = {
  images: ProductImage[]
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToImage = (index: number) => {
    setCurrentImage(index)
  }

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-[#e6ccb2]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 border-none rounded-full h-10 w-10"
            >
              <ChevronLeft className="h-6 w-6 text-[#9c7a5b]" />
              <span className="sr-only">Imagen anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 border-none rounded-full h-10 w-10"
            >
              <ChevronRight className="h-6 w-6 text-[#9c7a5b]" />
              <span className="sr-only">Siguiente imagen</span>
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToImage(index)}
              className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                index === currentImage
                  ? "border-[#9c7a5b] opacity-100"
                  : "border-[#e6ccb2] opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={`Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

