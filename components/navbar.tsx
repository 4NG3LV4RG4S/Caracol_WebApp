"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#f7f3e9]/95 backdrop-blur-sm shadow-sm" : "bg-[#f7f3e9]"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-[#9c7a5b] font-bold flex items-center space-x-2 text-xl md:text-2xl">
              <Image
                src="https://caracolillo.blob.core.windows.net/media-web-caracolillo/CaracolilloMediaImage/2024-10-09%2010%2045%2049.png"
                alt="Logo Caracolillo"
                width={95}
                height={52} />

              Caracolillo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/productos" className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors font-medium">
              Productos
            </Link>
            <Link href="/noticias" className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors font-medium">
              Noticias
            </Link>
            <Link href="/nosotros" className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors font-medium">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors font-medium">
              Contacto
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-[#e6ccb2] border-[#9c7a5b]">
                <Menu className="h-5 w-5 text-[#9c7a5b]" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#f7f3e9]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors text-lg font-medium">
                  Inicio
                </Link>
                <Link
                  href="/productos"
                  className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors text-lg font-medium"
                >
                  Productos
                </Link>
                <Link
                  href="/noticias"
                  className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors text-lg font-medium"
                >
                  Noticias
                </Link>
                <Link
                  href="/nosotros"
                  className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors text-lg font-medium"
                >
                  Nosotros
                </Link>
                <Link
                  href="/contacto"
                  className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors text-lg font-medium"
                >
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

