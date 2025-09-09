"use client";

import { useState, useEffect } from "react";
import { Coffee, Leaf, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingLink from "@/components/ui/loading-link";

const CoffeeIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Coffee Cup */}
    <path
      d="M80 120 L80 220 Q80 240 100 240 L200 240 Q220 240 220 220 L220 120 Z"
      fill="#9c7a5b"
      stroke="#8c6a4b"
      strokeWidth="2"
    />

    {/* Coffee Surface */}
    <ellipse cx="150" cy="120" rx="70" ry="8" fill="#6b4423" />

    {/* Steam */}
    <path
      d="M130 110 Q135 100 130 90 Q125 80 130 70"
      stroke="#e6ccb2"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M150 110 Q155 100 150 90 Q145 80 150 70"
      stroke="#e6ccb2"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M170 110 Q175 100 170 90 Q165 80 170 70"
      stroke="#e6ccb2"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />

    {/* Handle */}
    <path
      d="M220 140 Q250 140 250 170 Q250 200 220 200"
      stroke="#9c7a5b"
      strokeWidth="8"
      fill="none"
    />

    {/* Coffee Beans */}
    <ellipse cx="280" cy="80" rx="8" ry="12" fill="#8c6a4b" transform="rotate(15 280 80)" />
    <path d="M280 74 Q280 80 280 86" stroke="#6b4423" strokeWidth="1" />

    <ellipse cx="310" cy="100" rx="8" ry="12" fill="#8c6a4b" transform="rotate(-20 310 100)" />
    <path d="M310 94 Q310 100 310 106" stroke="#6b4423" strokeWidth="1" />

    <ellipse cx="300" cy="130" rx="8" ry="12" fill="#8c6a4b" transform="rotate(45 300 130)" />
    <path d="M300 124 Q300 130 300 136" stroke="#6b4423" strokeWidth="1" />

    {/* Saucer */}
    <ellipse cx="150" cy="240" rx="90" ry="12" fill="#a8d5ba" />
    <ellipse cx="150" cy="238" rx="90" ry="12" fill="#9bc5a8" />
  </svg>
)

const CoffeePlantIllustration = () => (
  <svg
    viewBox="0 0 300 400"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Plant Stem */}
    <path
      d="M150 350 Q145 300 140 250 Q135 200 140 150 Q145 100 150 50"
      stroke="#6b8e23"
      strokeWidth="6"
      fill="none"
    />

    {/* Leaves */}
    <path
      d="M140 100 Q120 90 110 110 Q120 130 140 120"
      fill="#a8d5ba"
      stroke="#8fbc8f"
      strokeWidth="1"
    />
    <path
      d="M150 120 Q170 110 180 130 Q170 150 150 140"
      fill="#a8d5ba"
      stroke="#8fbc8f"
      strokeWidth="1"
    />
    <path
      d="M140 160 Q120 150 110 170 Q120 190 140 180"
      fill="#a8d5ba"
      stroke="#8fbc8f"
      strokeWidth="1"
    />
    <path
      d="M150 180 Q170 170 180 190 Q170 210 150 200"
      fill="#a8d5ba"
      stroke="#8fbc8f"
      strokeWidth="1"
    />

    {/* Coffee Cherries */}
    <circle cx="125" cy="140" r="8" fill="#dc143c" />
    <circle cx="175" cy="160" r="8" fill="#dc143c" />
    <circle cx="130" cy="200" r="8" fill="#dc143c" />
    <circle cx="170" cy="220" r="8" fill="#dc143c" />
  </svg>
)

export default function HeroSection() {
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    {
      icon: Coffee,
      title: "Café de Especialidad",
      description: "Granos seleccionados de las mejores fincas"
    },
    {
      icon: Leaf,
      title: "Cultivo Sostenible",
      description: "Comprometidos con el medio ambiente"
    },
    {
      icon: Heart,
      title: "Hecho con Pasión",
      description: "Cada taza cuenta una historia"
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Reconocidos por nuestra excelencia"
    }
  ]
  const Icon = features[currentFeature].icon;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f7f3e9] via-[#e6ccb2] to-[#a8d5ba] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#9c7a5b]" />
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-[#a8d5ba]" />
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-[#9c7a5b]" />
        <div className="absolute bottom-40 right-10 w-12 h-12 rounded-full bg-[#a8d5ba]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
                Café Caracolillo
              </h1>

              <p className="text-xl text-[#8c6a4b] leading-relaxed max-w-lg">
                Descubre la experiencia única de nuestro café de especialidad,
                cultivado con pasión y preparado con maestría para despertar todos tus sentidos.
              </p>
            </div>

            {/* Animated Features */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#9c7a5b]/10 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#9c7a5b] rounded-xl flex items-center justify-center">
                  {Icon && (
                    <Icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-[#6b4423] text-lg">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-[#8c6a4b]">
                    {features[currentFeature].description}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <LoadingLink href="/productos">
                  <Coffee className="w-5 h-5 mr-2" />
                  Explorar Productos
                </LoadingLink>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white px-8 py-6 text-lg rounded-xl bg-white/80 backdrop-blur-sm"
              >
                <LoadingLink href="/brewBar">
                  <Heart className="w-5 h-5 mr-2" />
                  Visitar BrewBar
                </LoadingLink>
              </Button>
            </div>
          </div>

          {/* Right Illustrations */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8 h-[600px]">

              {/* Main Coffee Cup */}
              <div className="col-span-2 relative">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30" />
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <CoffeeIllustration />
                </div>
              </div>

              {/* Coffee Plant */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30" />
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <CoffeePlantIllustration />
                </div>
              </div>

              {/* Stats Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/30 shadow-lg" />
                <div className="relative z-10 p-6 h-full flex flex-col justify-center space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9c7a5b]">15+</div>
                    <div className="text-sm text-[#8c6a4b]">Años de experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9c7a5b]">100%</div>
                    <div className="text-sm text-[#8c6a4b]">Café de especialidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9c7a5b]">5★</div>
                    <div className="text-sm text-[#8c6a4b]">Calidad premium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
