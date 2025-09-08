# Caracol WebApp - Component Structure

This document outlines the organized component structure for the Caracol WebApp, with each navbar section properly organized into dedicated folders.

## 📁 Folder Structure

```
components/
├── Navigation/
│   ├── Navbar/
│   │   └── index.tsx
│   └── index.ts
├── Productos/
│   ├── ProductGrid/
│   │   └── index.tsx
│   ├── ProductFilter/
│   │   └── index.tsx
│   ├── ProductSearch/
│   │   └── index.tsx
│   └── index.ts
├── BrewBar/
│   ├── MenuCard/
│   │   └── index.tsx
│   ├── ReservationForm/
│   │   └── index.tsx
│   ├── CafeAmbiance/
│   │   └── index.tsx
│   └── index.ts
├── Noticias/
│   ├── NewsCard/
│   │   └── index.tsx
│   ├── NewsFilter/
│   │   └── index.tsx
│   ├── Newsletter/
│   │   └── index.tsx
│   └── index.ts
├── Nosotros/
│   ├── TeamMember/
│   │   └── index.tsx
│   ├── CompanyTimeline/
│   │   └── index.tsx
│   ├── CompanyValues/
│   │   └── index.tsx
│   └── index.ts
├── Community/
│   ├── CommunityForum/
│   │   └── index.tsx
│   ├── EventCalendar/
│   │   └── index.tsx
│   ├── UserProfiles/
│   │   └── index.tsx
│   └── index.ts
├── Contacto/
│   ├── ContactForm/
│   │   └── index.tsx
│   ├── ContactInfo/
│   │   └── index.tsx
│   ├── LocationMap/
│   │   └── index.tsx
│   └── index.ts
├── shared/
│   ├── types.ts
│   ├── constants.ts
│   ├── utils.ts
│   └── index.ts
└── navbar.tsx (re-exports Navigation/Navbar)
```

## 🎨 Design System

### Color Palette
- **Primary**: `#9c7a5b` (Coffee Brown)
- **Primary Hover**: `#8b6a4d`
- **Secondary**: `#a8d5ba` (Mint Green)
- **Secondary Hover**: `#95c7a8`
- **Background**: `#f7f3e9` (Cream)
- **Border**: `#e6ccb2` (Light Brown)

### Component Variants
Most components support multiple variants:
- `default` - Standard appearance
- `compact` - Smaller, condensed version
- `featured` - Highlighted version with special styling

## 📦 Component Sections

### Navigation
- **Navbar**: Main navigation component with responsive design

### Productos
- **ProductGrid**: Displays products in a responsive grid layout
- **ProductFilter**: Advanced filtering by category, origin, price, etc.
- **ProductSearch**: Search functionality with debounced input

### BrewBar (Cafetería)
- **MenuCard**: Coffee menu items with details and ordering
- **ReservationForm**: Table reservation with date/time picker
- **CafeAmbiance**: Displays cafe atmosphere and current status

### Noticias
- **NewsCard**: Article cards with multiple display variants
- **NewsFilter**: Filter articles by category, author, date
- **Newsletter**: Email subscription with preferences

### Nosotros
- **TeamMember**: Staff profiles with social links
- **CompanyTimeline**: Interactive company history timeline
- **CompanyValues**: Animated value cards with icons

### Community
- **CommunityForum**: Forum posts with sorting and filtering
- **EventCalendar**: Event listings with registration
- **UserProfiles**: User cards with badges and stats

### Contacto
- **ContactForm**: Complete contact form with validation
- **ContactInfo**: Location details and contact methods
- **LocationMap**: Interactive map component (ready for API integration)

## 🔧 Usage Examples

### Import Components
```tsx
// Import individual components
import { ProductGrid, ProductFilter } from "@/components/Productos"
import { MenuCard, ReservationForm } from "@/components/BrewBar"
import { NewsCard, Newsletter } from "@/components/Noticias"

// Import shared utilities
import { formatCurrency, formatDate, COLORS } from "@/components/shared"
```

### Basic Component Usage
```tsx
// Product Grid
<ProductGrid 
  products={products} 
  category="espresso" 
/>

// News Card with featured variant
<NewsCard 
  article={article} 
  variant="featured" 
/>

// Team Member in compact mode
<TeamMember 
  member={member} 
  variant="compact" 
/>
```

### Using Shared Types
```tsx
import type { Product, NewsArticle, TeamMember } from "@/components/shared"

interface ProductPageProps {
  products: Product[]
  filters: ProductFilters
}
```

## 🚀 Features

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management

### Responsive Design
- Mobile-first approach
- Breakpoint-aware layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Performance
- Lazy loading ready
- Optimized re-renders
- Debounced search inputs
- Efficient state management

### TypeScript
- Full type safety
- Comprehensive interfaces
- IntelliSense support
- Runtime type checking

## 🛠️ Development Guidelines

### Component Structure
Each component follows this pattern:
```tsx
"use client"

import { ComponentProps } from "@/components/shared"

interface MyComponentProps {
  // Props definition
}

export default function MyComponent({ ...props }: MyComponentProps) {
  // Component logic
  return (
    // JSX
  )
}
```

### Styling Conventions
- Use Tailwind CSS classes
- Follow the established color palette
- Maintain consistent spacing (4, 6, 8 units)
- Use hover and transition effects

### State Management
- Use React hooks for local state
- Implement proper error boundaries
- Handle loading states gracefully
- Provide fallback UI components

## 🔄 Future Enhancements

### Planned Features
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] Advanced animations with Framer Motion
- [ ] Real-time updates with WebSockets
- [ ] Progressive Web App (PWA) features

### Integration Ready
- Google Maps API for LocationMap
- Payment processing for products
- Email service for Newsletter
- Authentication system for Community
- CMS integration for content management

## 📝 Contributing

When adding new components:
1. Follow the established folder structure
2. Include TypeScript interfaces
3. Add to the appropriate index.ts file
4. Update this README
5. Test across all breakpoints
6. Ensure accessibility compliance

---

**Built with ❤️ for Caracol WebApp**
