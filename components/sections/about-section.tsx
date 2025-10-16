import Image from "next/image"
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
                Founded in 1985, Sree Mulamkadakom Devi Temple has served as a spiritual beacon for the Hindu community.
                What began as a small gathering of devoted families has grown into a vibrant center for worship,
                cultural celebration, and community service.
              </p>
              <p>
                Our temple was constructed following traditional Vastu Shastra principles, with each element carefully
                designed to create a sacred space that connects devotees with the divine. The main shrine was
                consecrated in 1987, with additional shrines added as our community grew.
              </p>
              <p>
                Today, our temple stands as a testament to the dedication of generations of devotees who have
                contributed their time, resources, and spiritual energy to creating this sacred space for all who seek
                connection with the divine.
              </p>
            </div>
            <Button className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-8">
              Learn More
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <div className="relative">
              <Image
                src="/temple-gathering.png"
                alt="Temple Interior"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-50 p-4 rounded-lg shadow-xl border border-amber-200">
                <div className="text-amber-900 font-bold">Established</div>
                <div className="text-3xl font-serif text-amber-800">1985</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
