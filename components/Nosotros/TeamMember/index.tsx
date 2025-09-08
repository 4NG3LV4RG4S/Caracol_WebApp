"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter, Coffee } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image: string
  specialties: string[]
  experience: string
  email?: string
  linkedin?: string
  twitter?: string
  favoriteOrigin?: string
}

interface TeamMemberProps {
  member: TeamMember
  variant?: "default" | "compact"
}

export default function TeamMember({ member, variant = "default" }: TeamMemberProps) {
  if (variant === "compact") {
    return (
      <Card className="group hover:shadow-md transition-all duration-300 bg-white border-[#e6ccb2]">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Image
              src={member.image}
              alt={member.name}
              width={60}
              height={60}
              className="w-15 h-15 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-[#9c7a5b] mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.position}</p>
              <div className="flex gap-1">
                {member.specialties.slice(0, 2).map((specialty, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white border-[#e6ccb2] overflow-hidden">
      <div className="relative">
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-sm opacity-90">{member.position}</p>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        </div>

        <div className="space-y-3 mb-4">
          {/* Experience */}
          <div className="flex items-center gap-2 text-sm">
            <Coffee className="w-4 h-4 text-[#9c7a5b]" />
            <span className="text-gray-600">Experiencia: </span>
            <span className="font-medium text-[#9c7a5b]">{member.experience}</span>
          </div>

          {/* Favorite Origin */}
          {member.favoriteOrigin && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Origen favorito: </span>
              <Badge variant="outline" className="text-xs">
                {member.favoriteOrigin}
              </Badge>
            </div>
          )}
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <p className="text-sm font-medium text-[#9c7a5b] mb-2">Especialidades:</p>
          <div className="flex flex-wrap gap-1">
            {member.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 pt-4 border-t border-[#e6ccb2]">
          {member.email && (
            <Button
              variant="outline"
              size="sm"
              className="p-2 h-auto border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
              asChild
            >
              <a href={`mailto:${member.email}`}>
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          )}
          {member.linkedin && (
            <Button
              variant="outline"
              size="sm"
              className="p-2 h-auto border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
              asChild
            >
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          )}
          {member.twitter && (
            <Button
              variant="outline"
              size="sm"
              className="p-2 h-auto border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
              asChild
            >
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
