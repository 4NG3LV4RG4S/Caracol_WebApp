"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MessageSquare, Send } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  category: string
  message: string
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { value: "general", label: "Consulta general" },
    { value: "products", label: "Productos y precios" },
    { value: "events", label: "Eventos y talleres" },
    { value: "wholesale", label: "Ventas al por mayor" },
    { value: "partnership", label: "Alianzas comerciales" },
    { value: "support", label: "Soporte técnico" },
    { value: "feedback", label: "Sugerencias y comentarios" }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: ""
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateFormData = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-2xl bg-white border-[#e6ccb2]">
      <CardHeader>
        <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
          <MessageSquare className="w-6 h-6" />
          Envíanos un mensaje
        </CardTitle>
        <p className="text-gray-600">
          Estamos aquí para ayudarte. Completa el formulario y te responderemos pronto.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-[#9c7a5b] font-medium">
                Nombre completo *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                className="border-[#e6ccb2] focus:border-[#9c7a5b] focus:ring-[#9c7a5b]"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-[#9c7a5b] font-medium">
                Correo electrónico *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="pl-10 border-[#e6ccb2] focus:border-[#9c7a5b] focus:ring-[#9c7a5b]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Phone and Category Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-[#9c7a5b] font-medium">
                Teléfono
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="pl-10 border-[#e6ccb2] focus:border-[#9c7a5b] focus:ring-[#9c7a5b]"
                />
              </div>
            </div>
            <div>
              <Label className="text-[#9c7a5b] font-medium">
                Categoría de consulta
              </Label>
              <Select value={formData.category} onValueChange={(value) => updateFormData("category", value)}>
                <SelectTrigger className="border-[#e6ccb2] focus:border-[#9c7a5b]">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Subject */}
          <div>
            <Label htmlFor="subject" className="text-[#9c7a5b] font-medium">
              Asunto
            </Label>
            <Input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => updateFormData("subject", e.target.value)}
              placeholder="Breve descripción del tema"
              className="border-[#e6ccb2] focus:border-[#9c7a5b] focus:ring-[#9c7a5b]"
            />
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-[#9c7a5b] font-medium">
              Mensaje *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => updateFormData("message", e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              className="border-[#e6ccb2] focus:border-[#9c7a5b] focus:ring-[#9c7a5b] min-h-[120px] resize-none"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Mínimo 10 caracteres. Sé específico para ayudarnos a responder mejor.
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="bg-[#f7f3e9] rounded-lg p-4 border border-[#e6ccb2]">
            <p className="text-sm text-gray-600">
              <strong>Política de privacidad:</strong> Tus datos personales serán utilizados únicamente 
              para responder a tu consulta. No compartimos información con terceros y puedes solicitar 
              la eliminación de tus datos en cualquier momento.
            </p>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            disabled={!formData.name || !formData.email || !formData.message || isSubmitting}
            className="w-full bg-[#9c7a5b] hover:bg-[#8b6a4d] text-white py-3"
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar mensaje
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
