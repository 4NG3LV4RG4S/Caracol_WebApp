"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Bell, Coffee, Users } from "lucide-react"

interface NewsletterProps {
  onSubscribe: (data: { email: string; preferences: string[] }) => void
}

export default function Newsletter({ onSubscribe }: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [preferences, setPreferences] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subscriptionOptions = [
    { id: "weekly", label: "Boletín semanal", description: "Resumen de noticias y novedades" },
    { id: "recipes", label: "Recetas de café", description: "Nuevas recetas y técnicas de preparación" },
    { id: "events", label: "Eventos", description: "Catas, talleres y eventos especiales" },
    { id: "offers", label: "Ofertas especiales", description: "Descuentos y promociones exclusivas" }
  ]

  const handlePreferenceChange = (optionId: string, checked: boolean) => {
    if (checked) {
      setPreferences(prev => [...prev, optionId])
    } else {
      setPreferences(prev => prev.filter(id => id !== optionId))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      await onSubscribe({ email, preferences })
      setEmail("")
      setPreferences([])
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-[#f7f3e9] to-[#e6ccb2] border-[#9c7a5b]">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <div className="p-3 bg-[#9c7a5b] rounded-full">
            <Mail className="w-6 h-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-[#9c7a5b] text-xl">
          Suscríbete a nuestro boletín
        </CardTitle>
        <p className="text-sm text-gray-600">
          Mantente al día con las últimas noticias del mundo del café
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <Label htmlFor="email" className="text-[#9c7a5b] font-medium">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="border-[#9c7a5b]/30 focus:border-[#9c7a5b] bg-white"
              required
            />
          </div>

          {/* Subscription Preferences */}
          <div>
            <Label className="text-[#9c7a5b] font-medium mb-3 block">
              ¿Qué te interesa recibir?
            </Label>
            <div className="space-y-3">
              {subscriptionOptions.map((option) => (
                <div key={option.id} className="flex items-start space-x-3">
                  <Checkbox
                    id={option.id}
                    checked={preferences.includes(option.id)}
                    onCheckedChange={(checked) => 
                      handlePreferenceChange(option.id, checked as boolean)
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label 
                      htmlFor={option.id} 
                      className="text-sm font-medium text-[#9c7a5b] cursor-pointer"
                    >
                      {option.label}
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/50 rounded-lg p-3 space-y-2">
            <h4 className="text-sm font-medium text-[#9c7a5b] flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              Beneficios de suscribirse
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className="flex items-center gap-2">
                <Bell className="w-3 h-3" />
                Acceso anticipado a nuevos productos
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-3 h-3" />
                Invitaciones a eventos exclusivos
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                Contenido premium y tips de baristas
              </li>
            </ul>
          </div>

          <Button 
            type="submit"
            disabled={!email || isSubmitting}
            className="w-full bg-[#9c7a5b] hover:bg-[#8b6a4d] text-white"
          >
            {isSubmitting ? "Suscribiendo..." : "Suscribirse"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Puedes cancelar tu suscripción en cualquier momento. 
            Respetamos tu privacidad.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
