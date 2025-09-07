"use client";

import NewsCard from "@/components/news-card"
import SectionTitle from "@/components/section-title"
import { useNews } from "@/src/presentation/hooks/useNews";
import { LoadingSpinner } from "@/src/presentation/components/LoadingSpinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NoticiasPage() {
  const { news, loading, error, refetch } = useNews();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <SectionTitle
          title="Noticias y Artículos"
          subtitle="Mantente al día con las novedades del mundo del café"
          centered={true}
        />
        <LoadingSpinner text="Cargando noticias..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <SectionTitle
          title="Noticias y Artículos"
          subtitle="Mantente al día con las novedades del mundo del café"
          centered={true}
        />
        <Alert variant="destructive" className="max-w-md mx-auto">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {error}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={refetch}
              className="ml-2"
            >
              Reintentar
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <SectionTitle
        title="Noticias y Artículos"
        subtitle="Mantente al día con las novedades del mundo del café"
        centered={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            summary={item.summary}
            imageUrl={item.imageUrl}
            date={item.date}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  )
}

