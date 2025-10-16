import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <SectionTitle subtitle="Our Legacy" title="Our Temple History" alignment="left" />
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Sree Mulankadakam Devi Temple is a cherished spiritual sanctuary in the heart of Kollam, built upon a powerful legend of divine grace.
              </p>
              <p>
                Centuries ago, the Goddess Sree Bhadrakali revealed herself in this location. Through a series of miracles, she demonstrated her compassion and power by protecting an innocent devotee from a king's wrath. As an act of profound reverence and atonement, the king established this temple in her honor.
              </p>
              <p>
                From these humble and miraculous beginnings, our temple has grown into a beacon of faith for all who seek the peace and blessings of the Divine Mother.
              </p>
            </div>
            <Link href="/mythology">
              <Button className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-8">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <div className="relative">
              <Image
                src="/images/temple-front.jpg"
                alt="Temple Front View"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
