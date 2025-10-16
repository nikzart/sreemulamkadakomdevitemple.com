interface SectionTitleProps {
  subtitle: string
  title: string
  description?: string
  alignment?: "left" | "center"
}

export function SectionTitle({ subtitle, title, description, alignment = "center" }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${alignment === "center" ? "text-center max-w-3xl mx-auto" : ""}`}>
      <div className={`mb-4 ${alignment === "center" ? "flex justify-center" : "flex items-center"}`}>
        <div className="h-0.5 w-12 bg-amber-500 mr-4 mt-4"></div>
        <div className="text-amber-600 text-sm tracking-widest uppercase font-medium">{subtitle}</div>
        {alignment === "center" && <div className="h-0.5 w-12 bg-amber-500 ml-4 mt-4"></div>}
      </div>
      <h2 className="text-4xl font-bold mb-6 text-amber-900 font-serif">{title}</h2>
      {description && <p className="text-slate-600">{description}</p>}
    </div>
  )
}
