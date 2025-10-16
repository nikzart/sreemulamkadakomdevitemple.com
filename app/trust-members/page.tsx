import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { SectionTitle } from "@/components/ui/section-title"
import Image from "next/image"

export const metadata = {
  title: "Trust Members | Sree Mulamkadakom Devi Temple",
  description: "Meet the dedicated trustees who manage and serve Sree Mulamkadakom Devi Temple.",
}

export default function TrustMembersPage() {
  const trustMembers = [
    {
      name: "J. SIVAPRASAD",
      role: "Trust President",
      image: "/images/trust members/sivaprasad.jpg",
    },
    {
      name: "K.R. SURENDRAN",
      role: "Trust Member",
      image: "/images/trust members/surendran.jpg",
    },
    {
      name: "G. VIJAYAN INCHAVILA",
      role: "Trust Secretary",
      image: "/images/trust members/vijayan.jpg",
    },
    {
      name: "V.A. MOHANLAL",
      role: "Trust Member",
      image: "/images/trust members/mohanlal.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-amber-50/50">
      <Header />

      <main className="flex-1">
        <PageHeader
          title="Trust Members"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Trust Members" }]}
          backgroundImage="/temple-bg.jpg"
        />

        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/mandala-pattern.png" alt="Background Pattern" fill className="object-cover" />
          </div>

          <div className="container relative z-10">
            <SectionTitle
              subtitle="Leadership"
              title="Our Trust Members"
              description="Meet the dedicated individuals who serve our temple community with devotion and commitment, ensuring the spiritual and administrative well-being of our sacred space."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {trustMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative rounded-2xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-2xl overflow-hidden">
                      {/* Member Photo */}
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      {/* Member Info */}
                      <div className="p-6 text-center">
                        <div className="mb-3">
                          <div className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                            {member.role}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900 font-serif leading-snug">
                          {member.name}
                        </h3>
                      </div>

                      {/* Decorative bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Section */}
            <div className="mt-20 text-center max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-lg border border-amber-100">
                <div className="mb-4">
                  <Image
                    src="/golden-om-symbol.png"
                    alt="Om Symbol"
                    width={60}
                    height={60}
                    className="mx-auto opacity-70"
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 font-serif mb-4">
                  Serving with Devotion
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Our trust members work tirelessly to preserve our temple's sacred traditions while ensuring smooth
                  operations and community service. Their dedication and leadership help maintain this temple as a
                  beacon of spiritual guidance and cultural heritage for our community.
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
