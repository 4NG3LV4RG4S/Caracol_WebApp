"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Coffee, Award, MessageSquare, Calendar, Star, Users } from "lucide-react"

interface UserProfile {
  id: string
  name: string
  avatar: string
  role: "member" | "moderator" | "expert" | "barista"
  joinDate: Date
  bio: string
  location: string
  favoriteOrigin: string
  brewingMethods: string[]
  stats: {
    posts: number
    likes: number
    eventsAttended: number
    recipesShared: number
  }
  badges: {
    id: string
    name: string
    description: string
    icon: React.ReactNode
    rarity: "common" | "rare" | "epic" | "legendary"
  }[]
  level: number
  experience: number
  maxExperience: number
}

interface UserProfilesProps {
  profiles: UserProfile[]
  currentUserId?: string
}

export default function UserProfiles({ profiles, currentUserId }: UserProfilesProps) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case "moderator": return "bg-blue-100 text-blue-800"
      case "expert": return "bg-purple-100 text-purple-800"
      case "barista": return "bg-amber-100 text-amber-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getBadgeRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary": return "bg-gradient-to-r from-yellow-400 to-orange-500"
      case "epic": return "bg-gradient-to-r from-purple-400 to-pink-500"
      case "rare": return "bg-gradient-to-r from-blue-400 to-indigo-500"
      default: return "bg-gradient-to-r from-gray-400 to-gray-500"
    }
  }

  const formatJoinDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long'
    }).format(date)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <Card key={profile.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-[#e6ccb2] overflow-hidden">
          <CardContent className="p-0">
            {/* Profile Header */}
            <div className="bg-gradient-to-br from-[#f7f3e9] to-[#e6ccb2] p-6 text-center relative">
              <div className="absolute top-2 right-2">
                <Badge className={getRoleColor(profile.role)}>
                  {profile.role}
                </Badge>
              </div>
              
              <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-white shadow-lg">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="text-xl font-bold text-[#9c7a5b]">
                  {profile.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <h3 className="font-bold text-lg text-[#9c7a5b] mb-1">{profile.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{profile.location}</p>
              
              {/* Level and Experience */}
              <div className="mb-3">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-[#9c7a5b]">
                    Nivel {profile.level}
                  </span>
                </div>
                <Progress 
                  value={(profile.experience / profile.maxExperience) * 100} 
                  className="h-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {profile.experience}/{profile.maxExperience} XP
                </p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-4 space-y-4">
              {/* Bio */}
              <p className="text-sm text-gray-600 line-clamp-2">
                {profile.bio}
              </p>

              {/* Coffee Preferences */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-4 h-4 text-[#9c7a5b]" />
                  <span className="text-sm font-medium text-[#9c7a5b]">
                    Origen favorito: {profile.favoriteOrigin}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {profile.brewingMethods.slice(0, 3).map((method, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {method}
                    </Badge>
                  ))}
                  {profile.brewingMethods.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{profile.brewingMethods.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <MessageSquare className="w-3 h-3 text-[#9c7a5b]" />
                    <span className="text-xs text-gray-600">Posts</span>
                  </div>
                  <span className="font-bold text-[#9c7a5b]">{profile.stats.posts}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Calendar className="w-3 h-3 text-[#9c7a5b]" />
                    <span className="text-xs text-gray-600">Eventos</span>
                  </div>
                  <span className="font-bold text-[#9c7a5b]">{profile.stats.eventsAttended}</span>
                </div>
              </div>

              {/* Badges */}
              {profile.badges.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-[#9c7a5b] mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Insignias ({profile.badges.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.badges.slice(0, 4).map((badge) => (
                      <div
                        key={badge.id}
                        className={`p-2 rounded-lg text-white ${getBadgeRarityColor(badge.rarity)} flex items-center justify-center`}
                        title={`${badge.name}: ${badge.description}`}
                      >
                        <div className="w-4 h-4">
                          {badge.icon}
                        </div>
                      </div>
                    ))}
                    {profile.badges.length > 4 && (
                      <div className="p-2 rounded-lg bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                        +{profile.badges.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Member Since */}
              <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-3">
                Miembro desde {formatJoinDate(profile.joinDate)}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Seguir
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Mensaje
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
