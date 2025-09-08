"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Users, Coffee, Globe, Award } from "lucide-react"

interface CompanyValue {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

interface CompanyValuesProps {
  values?: CompanyValue[]
}

export default function CompanyValues({ values }: CompanyValuesProps) {
  const defaultValues: CompanyValue[] = [
    {
      id: "quality",
      title: "Calidad Premium",
      description: "Seleccionamos cuidadosamente los mejores granos de café de origen único para garantizar una experiencia excepcional en cada taza.",
      icon: <Coffee className="w-8 h-8" />,
      color: "from-amber-400 to-orange-500"
    },
    {
      id: "sustainability",
      title: "Sostenibilidad",
      description: "Trabajamos directamente con productores locales, promoviendo prácticas agrícolas sostenibles y comercio justo.",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      id: "community",
      title: "Comunidad",
      description: "Creamos espacios donde las personas se conectan, comparten experiencias y construyen relaciones duraderas alrededor del café.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: "passion",
      title: "Pasión",
      description: "Cada proceso, desde la selección hasta la preparación, está impulsado por nuestra pasión genuina por el café y la excelencia.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-400 to-pink-500"
    },
    {
      id: "innovation",
      title: "Innovación",
      description: "Exploramos constantemente nuevas técnicas de tostado y preparación para ofrecer experiencias únicas y memorables.",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-400 to-violet-500"
    },
    {
      id: "global",
      title: "Visión Global",
      description: "Conectamos culturas y tradiciones cafeteras del mundo, celebrando la diversidad y riqueza del café internacional.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-400 to-teal-500"
    }
  ]

  const displayValues = values || defaultValues

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayValues.map((value, index) => (
        <Card 
          key={value.id} 
          className="group hover:shadow-xl transition-all duration-500 bg-white border-[#e6ccb2] overflow-hidden hover:-translate-y-2"
        >
          <CardContent className="p-0">
            {/* Icon Header */}
            <div className={`bg-gradient-to-br ${value.color} p-6 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
              <div className="relative z-10 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-center relative z-10">
                {value.title}
              </h3>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
            
            {/* Hover Effect Border */}
            <div className={`h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
