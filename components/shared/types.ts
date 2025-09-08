// Shared TypeScript interfaces for Caracol WebApp components

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
  origin?: string
  roastLevel?: string
  weight?: number
  processingMethod?: string
  tastingNotes?: string[]
  rating?: number
  reviews?: number
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  publishDate: Date
  readTime: number
  views: number
  likes: number
  featured: boolean
  tags?: string[]
}

export interface TeamMember {
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

export interface CommunityEvent {
  id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  type: "workshop" | "tasting" | "meetup" | "competition" | "course"
  capacity: number
  registered: number
  price: number
  difficulty: "beginner" | "intermediate" | "advanced"
  instructor?: string
  featured: boolean
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "espresso" | "filtrado" | "frio" | "especial"
  preparationTime: number
  temperature: "caliente" | "frio" | "ambiente"
  available: boolean
  ingredients?: string[]
  allergens?: string[]
  calories?: number
}

export interface ContactLocation {
  id: string
  name: string
  address: string
  phone: string
  email: string
  hours: {
    weekdays: string
    weekends: string
  }
  services: string[]
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface UserProfile {
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
  badges: Badge[]
  level: number
  experience: number
  maxExperience: number
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  rarity: "common" | "rare" | "epic" | "legendary"
  earnedDate?: Date
}

export interface ForumPost {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
    role: "member" | "moderator" | "expert"
  }
  category: string
  createdAt: Date
  replies: number
  likes: number
  isPinned: boolean
  isAnswered: boolean
  tags?: string[]
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  type: "founding" | "milestone" | "expansion" | "award" | "product"
  location?: string
  image?: string
}

export interface CompanyValue {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

// Form data interfaces
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  category: string
  message: string
}

export interface ReservationData {
  name: string
  email: string
  phone: string
  date: Date | undefined
  time: string
  guests: number
  specialRequests: string
}

export interface NewsletterSubscription {
  email: string
  preferences: string[]
}

// Filter interfaces
export interface ProductFilters {
  category?: string | null
  origin?: string | null
  roastLevel?: string | null
  priceRange?: [number, number]
  inStock?: boolean
}

export interface NewsFilters {
  category?: string | null
  author?: string | null
  dateRange?: string | null
  featuredOnly?: boolean
}

// Component props interfaces
export interface ComponentVariant {
  variant?: "default" | "compact" | "featured"
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface SearchProps {
  query: string
  onSearch: (query: string) => void
  placeholder?: string
}
