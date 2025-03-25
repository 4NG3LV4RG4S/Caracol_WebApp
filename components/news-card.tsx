import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

type NewsCardProps = {
  title: string
  summary: string
  imageUrl: string
  date: string
  slug: string
}

export default function NewsCard({ title, summary, imageUrl, date, slug }: NewsCardProps) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow bg-white border-[#e6ccb2]">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl text-[#9c7a5b] line-clamp-2">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-[#a8d5ba]">
          <CalendarIcon className="h-4 w-4" />
          <span>{date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground line-clamp-3">{summary}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/noticias/${slug}`}
          className="text-[#9c7a5b] hover:text-[#a8d5ba] font-medium transition-colors inline-flex items-center"
        >
          Leer más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </CardFooter>
    </Card>
  )
}

