import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"

export function GallerySection() {
  const galleryImages = [
    {
      src: "/gallery-1.png",
      alt: "Temple architecture exterior",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/gallery-2.png",
      alt: "Hindu ritual with fire ceremony",
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      src: "/gallery-3.png",
      alt: "Hindu festival celebration with colors",
      span: "col-span-2 row-span-1",
    },
    {
      src: "/gallery-4.png",
      alt: "Temple ornate ceiling artwork",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/gallery-5.png",
      alt: "Temple prayer ceremony",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/gallery-6.png",
      alt: "Temple decorated for festival",
      span: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
    },
    {
      src: "/gallery-7.png",
      alt: "Traditional dance performance",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/gallery-8.png",
      alt: "Community gathering",
      span: "col-span-1 row-span-1",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image src="/mandala-pattern.png" alt="Background Pattern" fill className="object-cover" />
      </div>

      <div className="container relative z-10">
        <SectionTitle
          subtitle="Visual Journey"
          title="Temple Gallery"
          description="Explore the beauty and grandeur of our temple through these images capturing our architecture, ceremonies, and community celebrations."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`${image.span} group`}>
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-light">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 hover:text-amber-800 transition-all duration-300 rounded-full px-8"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
