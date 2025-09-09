import HeroSection from "@/components/hero-section"
import CoffeeExperience from "@/components/coffee-experience"
import EnhancedFeaturedProducts from "@/components/enhanced-featured-products"
import LatestNews from "@/components/latest-news"
import MissionVisionValues from "@/components/mission-vision-values"


export default function Home() {
  return (
    <>
      <HeroSection />
      <CoffeeExperience />
      <EnhancedFeaturedProducts />
      <MissionVisionValues />
      <LatestNews />
    </>
  )
}