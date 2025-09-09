"use client"

import { useState, useEffect } from "react"
import { Menu, Coffee, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LoadingLink from "@/components/ui/loading-link"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/brewBar", label: "Cafetería" },
    { href: "/noticias", label: "Noticias" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/community", label: "Comunidad" },
    { href: "/contacto", label: "Contacto" }
  ]

  return (
    <>
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20" 
            : "bg-white/60 backdrop-blur-md"
        }`}
      >
        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3e9]/20 via-white/10 to-[#e6ccb2]/20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="h-18 flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center">
              <LoadingLink 
                href="/" 
                className="text-[#6b4423] font-bold flex items-center space-x-3 text-xl md:text-2xl group transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src="https://caracolillo.blob.core.windows.net/media-web-caracolillo/CaracolilloMediaImage/CaracolilloPNGLogo.png"
                    alt="Caracolillo"
                    width={90}
                    height={58}
                    className="transition-transform duration-300 group-hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9c7a5b]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="bg-gradient-to-r from-[#6b4423] to-[#9c7a5b] bg-clip-text text-transparent font-extrabold">
                  Caracolillo
                </span>
              </LoadingLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <LoadingLink
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[#6b4423] hover:text-[#9c7a5b] transition-all duration-300 font-medium group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9c7a5b] to-[#a8d5ba] transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2" />
                </LoadingLink>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                asChild
                className="bg-gradient-to-r from-[#9c7a5b] to-[#8c6a4b] hover:from-[#8c6a4b] hover:to-[#7a5a3b] text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <LoadingLink href="/brewBar" className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4" />
                  <span>Reservar</span>
                </LoadingLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all duration-300"
                >
                  <Menu className="h-5 w-5 text-[#6b4423]" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              
              <SheetContent 
                side="right" 
                className="w-full sm:w-80 bg-white/95 backdrop-blur-xl border-l border-white/20"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8 pt-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://caracolillo.blob.core.windows.net/media-web-caracolillo/CaracolilloMediaImage/CaracolilloPNGLogo.png"
                      alt="Caracolillo"
                      width={60}
                      height={40}
                    />
                    <span className="text-[#6b4423] font-bold text-lg">Caracolillo</span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <LoadingLink
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group relative px-4 py-4 text-[#6b4423] hover:text-[#9c7a5b] transition-all duration-300 text-lg font-medium rounded-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3e9]/50 to-[#e6ccb2]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span className="relative z-10 flex items-center space-x-3">
                        <Coffee className="w-4 h-4 opacity-60" />
                        <span>{link.label}</span>
                      </span>
                    </LoadingLink>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-[#e6ccb2]/30">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-[#9c7a5b] to-[#8c6a4b] hover:from-[#8c6a4b] hover:to-[#7a5a3b] text-white py-4 rounded-xl shadow-lg text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LoadingLink href="/brewBar" className="flex items-center justify-center space-x-2">
                      <Coffee className="w-5 h-5" />
                      <span>Reservar Mesa</span>
                    </LoadingLink>
                  </Button>
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-center text-sm text-[#8c6a4b]">
                    <p>Café de especialidad</p>
                    <p className="text-xs opacity-70">Hecho con ❤️ para los amantes del café</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-18" />
    </>
  )
}
