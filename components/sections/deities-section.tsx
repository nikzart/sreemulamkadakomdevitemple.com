import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"

export function DeitiesSection() {
  const mainDeity = {
    name: "Sree Bhadrakali",
    malayalamName: "ശ്രീ ഭദ്രകാളി",
    description:
      "The principal deity of the temple is a fierce and powerful form of the Divine Mother. She is worshipped as the supreme protector who safeguards her devotees from evil and grants blessings.",
    image: "/images/deities/Sree Bhadrakali.webp",
    color: "from-red-600 to-rose-700",
  }

  const subsidiaryDeities = [
    {
      name: "Lord Shiva",
      malayalamName: "ശിവൻ",
      description: "Representing the divine masculine energy and the destroyer of evil.",
      image: "/images/deities/Shiva.webp",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Lord Ganapathi",
      malayalamName: "ഗണപതി",
      description: "The remover of obstacles, worshipped before beginning any new endeavor.",
      image: "/images/deities/Lord_Ganesha.jpg",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Lord Murugan",
      malayalamName: "മുരുകൻ",
      description: "The god of war and victory, son of Shiva and Parvathi.",
      image: "/images/deities/murugan.webp",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Lord Ayyappan",
      malayalamName: "അയ്യപ്പൻ",
      description: "A revered deity, particularly prominent in Kerala.",
      image: "/images/deities/ayyappa.jpg",
      color: "from-slate-600 to-slate-800",
    },
    {
      name: "Yogishwaran",
      malayalamName: "യോഗീശ്വരൻ",
      description: "Believed to be the representation of the ascetic who first witnessed the Goddess's manifestation.",
      image: "/images/deities/yogeeshwara.jpg",
      color: "from-orange-500 to-amber-600",
    },
    {
      name: "Nagaraja & Nagayakshi",
      malayalamName: "നാഗരാജാവ് & നാഗയക്ഷി",
      description: "The Serpent King and Queen, worshipped for fertility, prosperity, and protection.",
      image: "/images/deities/Nagaraja & Nagayakshi.jpg",
      color: "from-green-600 to-emerald-700",
    },
    {
      name: "Brahmarakshas",
      malayalamName: "ബ്രഹ്മരക്ഷസ്സ്",
      description: "The spirit of a learned Brahmin, worshipped to pacify and seek blessings.",
      image: "/images/deities/Brahmarakshasa.jpg",
      color: "from-purple-600 to-indigo-700",
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

        {/* Main Deity - Featured */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-amber-900 font-serif mb-2">Main Deity</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto"></div>
          </div>
          <div className="group">
            <div className="relative rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-3xl">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${mainDeity.color} rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-96 overflow-hidden">
                    <Image
                      src={mainDeity.image || "/placeholder.svg"}
                      alt={mainDeity.name}
                      width={500}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className={`w-20 h-1 bg-gradient-to-r ${mainDeity.color} mb-6`}></div>
                    <h4 className="text-4xl font-bold mb-3 text-red-900 font-serif">{mainDeity.name}</h4>
                    <p className="text-2xl text-red-700 mb-6 font-serif">{mainDeity.malayalamName}</p>
                    <p className="text-slate-700 text-lg leading-relaxed">{mainDeity.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subsidiary Deities */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 font-serif mb-2">Subsidiary Deities</h3>
            <p className="text-amber-700 italic">Upadevathas</p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaryDeities.map((deity, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${deity.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                  <div className="relative bg-white rounded-xl overflow-hidden">
                    <div className="h-64 overflow-hidden">
                      <Image
                        src={deity.image || "/placeholder.svg"}
                        alt={deity.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="p-6 relative">
                      <div className={`w-12 h-1 bg-gradient-to-r ${deity.color} mb-3`}></div>
                      <h4 className="text-xl font-bold mb-1 text-amber-900 font-serif">{deity.name}</h4>
                      <p className="text-amber-700 mb-3 font-serif text-sm">{deity.malayalamName}</p>
                      <p className="text-slate-600 text-sm">{deity.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
