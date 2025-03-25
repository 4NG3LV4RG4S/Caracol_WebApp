type SectionTitleProps = {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({ title, subtitle, centered = false, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#9c7a5b]">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}
      <div className="mt-4 w-20 h-1 bg-[#a8d5ba] rounded-full"></div>
    </div>
  )
}

