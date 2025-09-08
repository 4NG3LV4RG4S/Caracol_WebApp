// Shared constants for Caracol WebApp

// Brand Colors
export const COLORS = {
  primary: "#9c7a5b",
  primaryHover: "#8b6a4d",
  secondary: "#a8d5ba",
  secondaryHover: "#95c7a8",
  background: "#f7f3e9",
  border: "#e6ccb2",
  text: {
    primary: "#9c7a5b",
    secondary: "#6b7280",
    muted: "#9ca3af"
  }
} as const

// Component Sizes
export const SIZES = {
  avatar: {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20"
  },
  card: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }
} as const

// Animation Durations
export const ANIMATIONS = {
  fast: "duration-150",
  normal: "duration-300",
  slow: "duration-500"
} as const

// Breakpoints (Tailwind)
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
} as const

// Coffee Categories
export const COFFEE_CATEGORIES = [
  "Espresso",
  "Filtrado",
  "Frío",
  "Especial"
] as const

// Coffee Origins
export const COFFEE_ORIGINS = [
  "Colombia",
  "Brasil",
  "Etiopía",
  "Guatemala",
  "Costa Rica",
  "Jamaica",
  "Yemen",
  "Kenia"
] as const

// Roast Levels
export const ROAST_LEVELS = [
  "Claro",
  "Medio",
  "Medio-Oscuro",
  "Oscuro"
] as const

// News Categories
export const NEWS_CATEGORIES = [
  "café",
  "recetas",
  "eventos",
  "cultura",
  "sostenibilidad",
  "empresa"
] as const

// Event Types
export const EVENT_TYPES = [
  "workshop",
  "tasting",
  "meetup",
  "competition",
  "course"
] as const

// User Roles
export const USER_ROLES = [
  "member",
  "moderator",
  "expert",
  "barista"
] as const

// Contact Categories
export const CONTACT_CATEGORIES = [
  { value: "general", label: "Consulta general" },
  { value: "products", label: "Productos y precios" },
  { value: "events", label: "Eventos y talleres" },
  { value: "wholesale", label: "Ventas al por mayor" },
  { value: "partnership", label: "Alianzas comerciales" },
  { value: "support", label: "Soporte técnico" },
  { value: "feedback", label: "Sugerencias y comentarios" }
] as const

// Time Slots for Reservations
export const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
] as const

// Default Images
export const DEFAULT_IMAGES = {
  product: "/placeholder.jpg",
  user: "/placeholder-user.jpg",
  news: "/placeholder.jpg",
  cafe: "/placeholder.jpg"
} as const

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  products: "/api/products",
  news: "/api/news",
  events: "/api/events",
  contact: "/api/contact",
  newsletter: "/api/newsletter",
  reservations: "/api/reservations"
} as const
