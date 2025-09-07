"use client";

import NewsCard from "./news-card"
import SectionTitle from "./section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLatestNews } from "@/src/presentation/hooks/useNews";
import { LoadingSpinner } from "@/src/presentation/components/LoadingSpinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function LatestNews() {
  const { news: latestNews, loading, error, refetch } = useLatestNews(3);

  if (loading) {
    return (
      <section className="py-16 bg-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Últimas Noticias"
            subtitle="Mantente al día con las novedades del mundo del café"
            centered={true}
          />
          <LoadingSpinner text="Cargando últimas noticias..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Últimas Noticias"
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
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#f7f3e9]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Últimas Noticias"
          subtitle="Mantente al día con las novedades del mundo del café"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              summary={news.summary}
              imageUrl={news.imageUrl}
              date={news.date}
              slug={news.slug}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b]/10">
            <Link href="/noticias">Ver todas las noticias</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

