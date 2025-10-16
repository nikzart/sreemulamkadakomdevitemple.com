import Image from "next/image"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  backgroundImage?: string
  breadcrumbs?: Array<{
    label: string
    href?: string
  }>
}

export function PageHeader({ title, backgroundImage = "/temple-hero.png", breadcrumbs = [] }: PageHeaderProps) {
  return (
    <>
      {/* Page Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-red-900/80 z-10" />
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={title}
          width={1920}
          height={600}
          className="w-full h-[40vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4 text-shadow">{title}</h1>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-amber-300"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent z-20"></div>
      </div>

      {/* Breadcrumb */}
      {breadcrumbs.length > 0 && (
        <div className="bg-amber-50 py-4 border-b border-amber-100">
          <div className="container">
            <div className="flex items-center text-sm text-amber-800">
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-amber-600 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
