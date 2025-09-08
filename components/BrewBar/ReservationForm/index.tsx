"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Users } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface ReservationData {
  name: string
  email: string
  phone: string
  date: Date | undefined
  time: string
  guests: number
  specialRequests: string
}

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void
}

export default function ReservationForm({ onSubmit }: ReservationFormProps) {
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    email: "",
    phone: "",
    date: undefined,
    time: "",
    guests: 2,
    specialRequests: ""
  })

  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.date && formData.time) {
      onSubmit(formData)
    }
  }

  const updateFormData = (field: keyof ReservationData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-md bg-white border-[#e6ccb2]">
      <CardHeader>
        <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Reservar Mesa
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-[#9c7a5b]">Nombre completo *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              className="border-[#e6ccb2] focus:border-[#9c7a5b]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-[#9c7a5b]">Correo electrónico *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="border-[#e6ccb2] focus:border-[#9c7a5b]"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-[#9c7a5b]">Teléfono</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              className="border-[#e6ccb2] focus:border-[#9c7a5b]"
            />
          </div>

          {/* Date */}
          <div>
            <Label className="text-[#9c7a5b]">Fecha *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal border-[#e6ccb2]"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? format(formData.date, "PPP", { locale: es }) : "Seleccionar fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => updateFormData("date", date)}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time */}
          <div>
            <Label className="text-[#9c7a5b]">Hora *</Label>
            <Select value={formData.time} onValueChange={(value) => updateFormData("time", value)}>
              <SelectTrigger className="border-[#e6ccb2]">
                <SelectValue placeholder="Seleccionar hora" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {time}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Guests */}
          <div>
            <Label className="text-[#9c7a5b]">Número de personas</Label>
            <Select 
              value={formData.guests.toString()} 
              onValueChange={(value) => updateFormData("guests", parseInt(value))}
            >
              <SelectTrigger className="border-[#e6ccb2]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {num} {num === 1 ? "persona" : "personas"}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Special Requests */}
          <div>
            <Label htmlFor="requests" className="text-[#9c7a5b]">Solicitudes especiales</Label>
            <Textarea
              id="requests"
              value={formData.specialRequests}
              onChange={(e) => updateFormData("specialRequests", e.target.value)}
              placeholder="Alergias, celebraciones, preferencias de mesa..."
              className="border-[#e6ccb2] focus:border-[#9c7a5b] resize-none"
              rows={3}
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#9c7a5b] hover:bg-[#8b6a4d] text-white"
            disabled={!formData.name || !formData.email || !formData.date || !formData.time}
          >
            Confirmar Reserva
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
