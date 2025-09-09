"use client"

import { Coffee, Droplets, Thermometer, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoadingLink from "@/components/ui/loading-link";

const BrewingMethodCard = ({ 
  icon: Icon, 
  title, 
  description, 
  time, 
  temperature, 
  grind 
}: {
  icon: any
  title: string
  description: string
  time: string
  temperature: string
  grind: string
}) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e6ccb2]/30 hover:border-[#9c7a5b]/30">
    <div className="absolute inset-0 bg-gradient-to-br from-[#f7f3e9]/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10">
      <div className="w-12 h-12 bg-[#9c7a5b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-[#6b4423] mb-2">{title}</h3>
      <p className="text-[#8c6a4b] mb-4 leading-relaxed">{description}</p>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center text-[#9c7a5b]">
          <Clock className="w-4 h-4 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-[#9c7a5b]">
          <Thermometer className="w-4 h-4 mr-2" />
          <span>{temperature}</span>
        </div>
        <div className="flex items-center text-[#9c7a5b]">
          <Coffee className="w-4 h-4 mr-2" />
          <span>{grind}</span>
        </div>
      </div>
    </div>
  </div>
)

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  isLast = false 
}: {
  number: number
  title: string
  description: string
  isLast?: boolean
}) => (
  <div className="relative flex items-start">
    <div className="flex-shrink-0 w-12 h-12 bg-[#9c7a5b] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {number}
    </div>
    
    {!isLast && (
      <div className="absolute left-6 top-12 w-0.5 h-16 bg-[#e6ccb2]" />
    )}
    
    <div className="ml-6 pb-8">
      <h4 className="text-lg font-semibold text-[#6b4423] mb-2">{title}</h4>
      <p className="text-[#8c6a4b] leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function CoffeeExperience() {
  const brewingMethods = [
    {
      icon: Droplets,
      title: "V60",
      description: "Método de goteo que resalta la acidez y notas florales del café",
      time: "3-4 min",
      temperature: "92-96°C",
      grind: "Medio-fino"
    },
    {
      icon: Coffee,
      title: "French Press",
      description: "Inmersión completa que extrae cuerpo y aceites naturales",
      time: "4 min",
      temperature: "93-96°C",
      grind: "Grueso"
    },
    {
      icon: Thermometer,
      title: "Espresso",
      description: "Extracción bajo presión para un café concentrado e intenso",
      time: "25-30 seg",
      temperature: "90-92°C",
      grind: "Fino"
    },
    {
      icon: Droplets,
      title: "Chemex",
      description: "Filtrado limpio que produce un café brillante y claro",
      time: "4-5 min",
      temperature: "92-95°C",
      grind: "Medio-grueso"
    }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#e6ccb2] via-[#f7f3e9] to-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-[#a8d5ba]" />
        <div className="absolute top-32 left-20 w-16 h-16 rounded-full bg-[#9c7a5b]" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#a8d5ba]" />
        <div className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-[#9c7a5b]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#9c7a5b]/20">
                <Coffee className="w-5 h-5 text-[#9c7a5b] mr-2" />
                <span className="text-[#9c7a5b] font-medium">Experiencia Caracolillo</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
                Del Grano
                <span className="block text-[#9c7a5b]">a la Taza</span>
              </h1>
              
              <p className="text-xl text-[#8c6a4b] leading-relaxed max-w-lg">
                Descubre nuestro proceso artesanal y los métodos de preparación 
                que transforman cada grano en una experiencia única.
              </p>
            </div>

            {/* Brewing Methods Cards */}
            <div className="grid grid-cols-2 gap-4">
              {brewingMethods.slice(0, 4).map((method, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-[#9c7a5b]/10 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#9c7a5b] rounded-xl flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#6b4423] text-sm">{method.title}</h3>
                      <p className="text-xs text-[#8c6a4b]">{method.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <LoadingLink href="/brewBar">
                  <Coffee className="w-5 h-5 mr-2" />
                  Reservar Mesa
                </LoadingLink>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white px-8 py-6 text-lg rounded-xl bg-white/80 backdrop-blur-sm"
              >
                <LoadingLink href="/nosotros">
                  <Droplets className="w-5 h-5 mr-2" />
                  Nuestro Proceso
                </LoadingLink>
              </Button>
            </div>
          </div>

          {/* Right Content - Coffee Journey Illustration */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#e6ccb2]/30">
              <svg
                viewBox="0 0 400 500"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Coffee Plant */}
                <g transform="translate(50, 50)">
                  <circle cx="50" cy="50" r="40" fill="#a8d5ba" opacity="0.3" />
                  <path d="M50 20 L50 80" stroke="#6b8e23" strokeWidth="4" />
                  <path d="M30 35 Q25 30 20 35 Q25 40 30 35" fill="#228b22" />
                  <path d="M70 35 Q75 30 80 35 Q75 40 70 35" fill="#228b22" />
                  <circle cx="35" cy="45" r="4" fill="#dc143c" />
                  <circle cx="65" cy="45" r="4" fill="#dc143c" />
                </g>

                {/* Arrow */}
                <path d="M150 100 L200 100" stroke="#9c7a5b" strokeWidth="3" markerEnd="url(#arrowhead)" />

                {/* Roasting */}
                <g transform="translate(220, 50)">
                  <circle cx="50" cy="50" r="40" fill="#9c7a5b" opacity="0.3" />
                  <rect x="30" y="30" width="40" height="40" rx="5" fill="#8c6a4b" />
                  <circle cx="35" cy="35" r="3" fill="#6b4423" />
                  <circle cx="50" cy="40" r="3" fill="#6b4423" />
                  <circle cx="45" cy="55" r="3" fill="#6b4423" />
                  <circle cx="60" cy="50" r="3" fill="#6b4423" />
                  {/* Heat lines */}
                  <path d="M40 20 Q45 15 40 10" stroke="#ff6b35" strokeWidth="2" fill="none" />
                  <path d="M50 20 Q55 15 50 10" stroke="#ff6b35" strokeWidth="2" fill="none" />
                  <path d="M60 20 Q65 15 60 10" stroke="#ff6b35" strokeWidth="2" fill="none" />
                </g>

                {/* Arrow */}
                <path d="M150 200 L200 200" stroke="#9c7a5b" strokeWidth="3" markerEnd="url(#arrowhead)" />

                {/* Grinding */}
                <g transform="translate(50, 150)">
                  <circle cx="50" cy="50" r="40" fill="#e6ccb2" opacity="0.3" />
                  <rect x="35" y="35" width="30" height="30" rx="15" fill="#9c7a5b" />
                  <circle cx="50" cy="50" r="8" fill="#6b4423" />
                  <path d="M42 42 L58 58" stroke="#8c6a4b" strokeWidth="2" />
                  <path d="M58 42 L42 58" stroke="#8c6a4b" strokeWidth="2" />
                </g>

                {/* Arrow */}
                <path d="M250 300 L300 300" stroke="#9c7a5b" strokeWidth="3" markerEnd="url(#arrowhead)" />

                {/* Final Cup */}
                <g transform="translate(220, 250)">
                  <circle cx="50" cy="50" r="40" fill="#f7f3e9" opacity="0.3" />
                  <path d="M30 40 L30 70 Q30 80 40 80 L60 80 Q70 80 70 70 L70 40 Z" fill="#9c7a5b" />
                  <ellipse cx="50" cy="40" rx="20" ry="3" fill="#6b4423" />
                  <path d="M70 50 Q85 50 85 65 Q85 80 70 80" stroke="#9c7a5b" strokeWidth="3" fill="none" />
                  {/* Steam */}
                  <path d="M45 35 Q50 25 45 15" stroke="#e6ccb2" strokeWidth="2" fill="none" opacity="0.7" />
                  <path d="M55 35 Q60 25 55 15" stroke="#e6ccb2" strokeWidth="2" fill="none" opacity="0.7" />
                </g>

                {/* Arrow marker definition */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                   refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#9c7a5b" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
