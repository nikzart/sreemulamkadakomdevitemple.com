import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"

export function DeitiesSection() {
  const deities = [
    {
      name: "Lord Ganesha",
      description: "The remover of obstacles and the god of beginnings, wisdom and intelligence.",
      image: "/serene-ganesha.png",
      color: "from-amber-500 to-red-500",
    },
    {
      name: "Goddess Lakshmi",
      description: "The goddess of wealth, fortune, prosperity, and the embodiment of beauty.",
      image: "/serene-lakshmi.png",
      color: "from-rose-500 to-pink-500",
    },
    {
      name: "Lord Shiva",
      description:
        "The destroyer and transformer within the Trimurti, the supreme being who creates, protects and transforms the universe.",
      image: "/serene-shiva.png",
      color: "from-blue-500 to-indigo-500",
    },
  ]

  return (
    <section id="deities" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image src="/mandala-pattern.png" alt="Background Pattern" fill className="object-cover" />
      </div>

      <div className="container relative z-10">
        <SectionTitle
          subtitle="Divine Presence"
          title="Our Deities"
          description="Our temple houses sacred murtis of various Hindu deities, each representing different aspects of the divine and offering unique blessings to devotees."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {deities.map((deity, index) => (
            <div key={index} className="group">
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-xl overflow-hidden">
                  <div className="h-80 overflow-hidden">
                    <Image
                      src={deity.image || "/placeholder.svg"}
                      alt={deity.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-8 relative">
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-4"></div>
                    <h3 className="text-2xl font-bold mb-3 text-amber-900 font-serif">{deity.name}</h3>
                    <p className="text-slate-600 mb-4">{deity.description}</p>
                    <Button variant="link" className="p-0 text-amber-600 hover:text-amber-800 group-hover:underline">
                      Learn more about {deity.name}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
