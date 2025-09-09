import { Coffee, Heart, Star, Sprout, Target, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MissionVisionValues() {
  const values = [
    {
      icon: Coffee,
      title: "Misión",
      description: "Ofrecer la mejor experiencia de café, desde el origen hasta la taza, con calidad y comercio justo."
    },
    {
      icon: Star,
      title: "Visión", 
      description: "Ser referentes en café de especialidad, educando y expandiendo nuestra pasión a más personas."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Pasión, transparencia, responsabilidad social y compromiso con la calidad en cada producto."
    }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f7f3e9] via-white to-[#a8d5ba] overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-[#9c7a5b]" />
        <div className="absolute top-32 left-20 w-16 h-16 rounded-full bg-[#6b4423]" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#9c7a5b]" />
        <div className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-[#6b4423]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#9c7a5b]/20">
                <Heart className="w-5 h-5 text-[#9c7a5b] mr-2" />
                <span className="text-[#9c7a5b] font-medium">Nuestra Esencia</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
                Quiénes
                <span className="block text-[#9c7a5b]">Somos</span>
              </h1>
              
              <p className="text-xl text-[#8c6a4b] leading-relaxed max-w-lg">
                Conoce nuestra pasión por el café y nuestro compromiso 
                con la calidad, sostenibilidad y la comunidad cafetera.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#9c7a5b]/10 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#9c7a5b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#6b4423] text-lg mb-2">{value.title}</h3>
                      <p className="text-[#8c6a4b] text-sm leading-relaxed">{value.description}</p>
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
                <Link href="/nosotros">
                  <Target className="w-5 h-5 mr-2" />
                  Conoce Más
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white px-8 py-6 text-lg rounded-xl bg-white/80 backdrop-blur-sm"
              >
                <Link href="/contacto">
                  <Eye className="w-5 h-5 mr-2" />
                  Contáctanos
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Sustainability Illustration */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#e6ccb2]/30">
              
              {/* Sustainability Section */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#a8d5ba] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#6b4423] mb-4">Sostenibilidad</h3>
                <p className="text-[#8c6a4b] leading-relaxed">
                  Trabajamos con productores que utilizan prácticas sostenibles, 
                  cuidando nuestro planeta y asegurando un futuro mejor para todos.
                </p>
              </div>

              {/* Sustainability Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-[#f7f3e9] rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#9c7a5b] mb-1">100%</div>
                  <div className="text-xs text-[#8c6a4b]">Comercio Justo</div>
                </div>
                
                <div className="text-center bg-[#f7f3e9] rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#9c7a5b] mb-1">0%</div>
                  <div className="text-xs text-[#8c6a4b]">Plásticos</div>
                </div>
                
                <div className="text-center bg-[#f7f3e9] rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#9c7a5b] mb-1">50+</div>
                  <div className="text-xs text-[#8c6a4b]">Productores</div>
                </div>
                
                <div className="text-center bg-[#f7f3e9] rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#9c7a5b] mb-1">5</div>
                  <div className="text-xs text-[#8c6a4b]">Países</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

