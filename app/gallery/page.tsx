import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { SectionTitle } from "@/components/ui/section-title"
import { GalleryGrid } from "@/components/sections/gallery-grid"
import Image from "next/image"

export const metadata = {
  title: "Gallery | Sree Mulamkadakom Devi Temple",
  description: "Explore the beauty and grandeur of Sree Mulamkadakom Devi Temple through our photo gallery.",
}

export default function GalleryPage() {
  const galleryImages = [
    { src: "/images/gallery/ശ്രീ മുളങ്കാടകം ദേവീ.jpg", title: "ശ്രീ മുളങ്കാടകം ദേവീ" },
    { src: "/images/gallery/ക്ഷേത്ര പ്രേവേശന കവാടം.jpg", title: "ക്ഷേത്ര പ്രേവേശന കവാടം" },
    { src: "/images/gallery/ക്ഷേത്ര കുളം.jpg", title: "ക്ഷേത്ര കുളം" },
    { src: "/images/gallery/ക്ഷേത്ര കുളം (1).jpg", title: "ക്ഷേത്ര കുളം (1)" },
    { src: "/images/gallery/മൂലസ്ഥാനം.jpg", title: "മൂലസ്ഥാനം" },
    { src: "/images/gallery/മൂലസ്ഥാനം (1).jpg", title: "മൂലസ്ഥാനം (1)" },
    { src: "/images/gallery/മൂലസ്ഥാനം (2).jpg", title: "മൂലസ്ഥാനം (2)" },
    { src: "/images/gallery/മൂലസ്ഥാനം (3).jpg", title: "മൂലസ്ഥാനം (3)" },
    { src: "/images/gallery/മൂലസ്ഥാനം കാവ്.jpg", title: "മൂലസ്ഥാനം കാവ്" },
    { src: "/images/gallery/മൂലസ്ഥാനം സർപ്പകാവ്.jpg", title: "മൂലസ്ഥാനം സർപ്പകാവ്" },
    { src: "/images/gallery/ഗണപതി ഭഗവാൻ.jpg", title: "ഗണപതി ഭഗവാൻ" },
    { src: "/images/gallery/ശിവ ഭഗവാൻ.jpg", title: "ശിവ ഭഗവാൻ" },
    { src: "/images/gallery/നാഗ ദൈവം.jpg", title: "നാഗ ദൈവം" },
    { src: "/images/gallery/നാഗ ദൈവങ്ങൾ.jpg", title: "നാഗ ദൈവങ്ങൾ" },
    { src: "/images/gallery/ഉപദേവതകൾ.jpg", title: "ഉപദേവതകൾ" },
    { src: "/images/gallery/ഉപദേവതകൾ (1).jpg", title: "ഉപദേവതകൾ (1)" },
    { src: "/images/gallery/മുഹൂർത്തി ക്ഷേത്രം.jpg", title: "മുഹൂർത്തി ക്ഷേത്രം" },
    { src: "/images/gallery/യോഗിശ്വരാലയം.jpg", title: "യോഗിശ്വരാലയം" },
    { src: "/images/gallery/ഘണ്ടകർണ്ണ പ്രതിഷ്ഠ.jpg", title: "ഘണ്ടകർണ്ണ പ്രതിഷ്ഠ" },
    { src: "/images/gallery/നന്തികേശൻ.jpg", title: "നന്തികേശൻ" },
    { src: "/images/gallery/കാവ്.jpg", title: "കാവ്" },
    { src: "/images/gallery/കാവ് (1).jpg", title: "കാവ് (1)" },
    { src: "/images/gallery/മുളം കാട്.jpg", title: "മുളം കാട്" },
    { src: "/images/gallery/മുളം കാട് (1).jpg", title: "മുളം കാട് (1)" },
    { src: "/images/gallery/മുളംകാട്.jpg", title: "മുളംകാട്" },
    { src: "/images/gallery/കളിതട്ട്.jpg", title: "കളിതട്ട്" },
    { src: "/images/gallery/കളിതട്ട് (1).jpg", title: "കളിതട്ട് (1)" },
    { src: "/images/gallery/കളിതട്ട് മച്ച്.jpg", title: "കളിതട്ട് മച്ച്" },
    { src: "/images/gallery/കാവിലേക്കുള്ള നടപ്പാത.jpg", title: "കാവിലേക്കുള്ള നടപ്പാത" },
    { src: "/images/gallery/കവിന്റ ഉള്ളിലെ നടപ്പാത.jpg", title: "കവിന്റ ഉള്ളിലെ നടപ്പാത" },
    { src: "/images/gallery/ഒറ്റ പന.jpg", title: "ഒറ്റ പന" },
    { src: "/images/gallery/ഒറ്റപന.jpg", title: "ഒറ്റപന" },
    { src: "/images/gallery/ഒറ്റ പനമൂട്.jpg", title: "ഒറ്റ പനമൂട്" },
    { src: "/images/gallery/ആമ വിളക്ക്.jpg", title: "ആമ വിളക്ക്" },
    { src: "/images/gallery/കല്ല് വിളക്ക്.jpg", title: "കല്ല് വിളക്ക്" },
    { src: "/images/gallery/പേരാൽ.jpg", title: "പേരാൽ" },
    { src: "/images/gallery/കുവളം.jpg", title: "കുവളം" },
    { src: "/images/gallery/വിത്ത്പെട്ടി.jpg", title: "വിത്ത്പെട്ടി" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-amber-50/50">
      <Header />

      <main className="flex-1">
        <PageHeader
          title="Temple Gallery"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
          backgroundImage="/temple-bg.jpg"
        />

        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/mandala-pattern.png" alt="Background Pattern" fill className="object-cover" />
          </div>

          <div className="container relative z-10">
            <SectionTitle
              subtitle="Sacred Moments"
              title="Temple Gallery"
              description="Explore the divine beauty and architectural grandeur of Sree Mulamkadakom Devi Temple through our photo collection."
            />

            <GalleryGrid images={galleryImages} />

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-100 max-w-2xl mx-auto">
                <Image
                  src="/golden-om-symbol.png"
                  alt="Om Symbol"
                  width={50}
                  height={50}
                  className="mx-auto opacity-70 mb-4"
                />
                <p className="text-amber-900 mb-2 font-medium">
                  We regularly update our gallery with new photos from temple events and celebrations.
                </p>
                <p className="text-slate-600 text-sm">
                  Click any image to view in full screen. Use arrow keys to navigate through the gallery.
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
