import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { SectionTitle } from "@/components/ui/section-title"
import Image from "next/image"

export const metadata = {
  title: "Priests | Sree Mulamkadakom Devi Temple",
  description: "Meet the devoted priests who perform sacred rituals and guide our spiritual practices at Sree Mulamkadakom Devi Temple.",
}

export default function PriestsPage() {
  const priests = [
    {
      name: "Brahmasree Adimuttathu Sree Sureshkumar Bhattathirippadu",
      role: "Ksethram Thanthri",
      image: "/images/priests/Sureshkumar.jpeg",
    },
    {
      name: "Palathumpattil R. Selvaraj",
      role: "Ksethram Melsanthi",
      image: "/images/priests/Selvaraj.jpeg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-amber-50/50">
      <Header />

      <main className="flex-1">
        <PageHeader
          title="Our Priests"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Priests" }]}
          backgroundImage="/temple-bg.jpg"
        />

        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/mandala-pattern.png" alt="Background Pattern" fill className="object-cover" />
          </div>

          <div className="container relative z-10">
            <SectionTitle
              subtitle="Spiritual Guides"
              title="Temple Priests"
              description="Our learned and devoted priests uphold ancient Vedic traditions, performing sacred rituals with precision and devotion, guiding devotees on their spiritual journey."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {priests.map((priest, index) => (
                <div key={index} className="group">
                  <div className="relative rounded-2xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-2xl overflow-hidden">
                      {/* Priest Photo */}
                      <div className="relative h-96 overflow-hidden">
                        <Image
                          src={priest.image}
                          alt={priest.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      {/* Priest Info */}
                      <div className="p-8 text-center">
                        <div className="mb-4">
                          <div className="inline-block px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-full uppercase tracking-wider mb-4 shadow-md">
                            {priest.role}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-amber-900 font-serif leading-relaxed mb-2">
                          {priest.name}
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4"></div>
                      </div>

                      {/* Decorative bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Section */}
            <div className="mt-20 text-center max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-10 md:p-14 shadow-lg border border-amber-100">
                <div className="mb-6">
                  <Image
                    src="/golden-om-symbol.png"
                    alt="Om Symbol"
                    width={70}
                    height={70}
                    className="mx-auto opacity-70"
                  />
                </div>
                <h3 className="text-3xl font-bold text-amber-900 font-serif mb-6">
                  Guardians of Sacred Traditions
                </h3>
                <p className="text-slate-700 leading-relaxed text-lg mb-4">
                  Our priests are highly trained in Vedic scriptures, rituals, and mantras, carrying forward centuries
                  of sacred knowledge. With deep devotion and spiritual wisdom, they conduct daily pujas, special
                  ceremonies, and festivals, creating an atmosphere of divine sanctity.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Through their guidance and blessings, devotees experience spiritual upliftment and connect with the
                  divine presence that resides within our temple's sacred space.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
