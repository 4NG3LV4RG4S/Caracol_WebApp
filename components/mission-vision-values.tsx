import { Coffee, Heart, Star, Sprout } from "lucide-react"

export default function MissionVisionValues() {
  return (
    <section className="py-16 bg-[#f7f3e9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9c7a5b] mb-2">Quiénes Somos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestra pasión por el café y nuestro compromiso con la calidad y la sostenibilidad.
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-[#a8d5ba] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#e6ccb2] transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#a8d5ba]/20 rounded-full flex items-center justify-center mb-4">
              <Coffee className="h-6 w-6 text-[#9c7a5b]" />
            </div>
            <h3 className="text-xl font-bold text-[#9c7a5b] mb-3">Misión</h3>
            <p className="text-muted-foreground">
              Nuestra misión es ofrecer la mejor experiencia de café, desde el origen hasta la taza, manteniendo un
              compromiso con la calidad, la sostenibilidad y el comercio justo con nuestros productores.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#e6ccb2] transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#a8d5ba]/20 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-[#9c7a5b]" />
            </div>
            <h3 className="text-xl font-bold text-[#9c7a5b] mb-3">Visión</h3>
            <p className="text-muted-foreground">
              Aspiramos a ser referentes en la industria del café de especialidad, educando a nuestros clientes sobre la
              importancia del café de calidad y expandiendo nuestra presencia para llevar nuestra pasión a más personas.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#e6ccb2] transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#a8d5ba]/20 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-[#9c7a5b]" />
            </div>
            <h3 className="text-xl font-bold text-[#9c7a5b] mb-3">Valores</h3>
            <p className="text-muted-foreground">
              Nos guiamos por la pasión por el café, la transparencia en nuestros procesos, la responsabilidad social y
              ambiental, y el compromiso con la calidad en cada producto que ofrecemos.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm p-8 border border-[#e6ccb2]">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-20 h-20 bg-[#a8d5ba]/20 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-6 flex-shrink-0">
              <Sprout className="h-10 w-10 text-[#9c7a5b]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#9c7a5b] mb-3">Nuestro Compromiso con la Sostenibilidad</h3>
              <p className="text-muted-foreground">
                En Café Especial, entendemos la importancia de cuidar nuestro planeta. Trabajamos directamente con
                productores que utilizan prácticas sostenibles, asegurando que nuestro café no solo sea delicioso sino
                también responsable con el medio ambiente. Nuestros empaques son biodegradables o reciclables, y
                continuamente buscamos formas de reducir nuestra huella ecológica en toda nuestra cadena de producción.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

