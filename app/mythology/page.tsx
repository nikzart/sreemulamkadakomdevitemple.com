import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { SectionTitle } from "@/components/ui/section-title"
import Image from "next/image"

export const metadata = {
  title: "Mythology | Sree Mulamkadakom Devi Temple",
  description: "Discover the divine legend and sacred origin story of Sree Mulamkadakom Devi Temple - a miraculous tale of Goddess Bhadrakali's manifestation.",
}

export default function MythologyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50/50">
      <Header />

      <main className="flex-1">
        <PageHeader
          title="Mythology"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Mythology" }]}
          backgroundImage="/temple-bg.jpg"
        />

        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/mandala-pattern.png" alt="Background Pattern" fill className="object-cover" />
          </div>

          <div className="container relative z-10">
            <SectionTitle
              subtitle="Divine Legend"
              title="ഐതീഹ്യം"
              description="The miraculous origin story of how Goddess Sree Bhadrakali manifested at this sacred location"
            />

            {/* First Section - Temple Introduction */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden transition-all duration-500 shadow-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
                  <div className="mb-6 text-center">
                    <Image
                      src="/golden-om-symbol.png"
                      alt="Om Symbol"
                      width={60}
                      height={60}
                      className="mx-auto opacity-60"
                    />
                  </div>
                  <p className="text-slate-800 leading-loose text-lg font-serif text-justify">
                    കൊല്ലവർഷാരംഭത്തിൽ സുസ്ഥാപിതമായ ശ്രീ മുളങ്കാടകം ദേവീ ക്ഷേത്രം ഇന്നും ഭക്തിയുടെയും ദേവീവിശ്വാസത്തിന്റേയും പ്രോജ്ജ്വലത്തായ പ്രതീകമായി കൊല്ലം പട്ടണത്തിന്റെ ഹൃദയഭാഗത്ത് സ്ഥിതിചെയ്യുന്നു. ശാന്തിയുടെയും സമാധാനത്തിന്റേയും സന്നിവേശം വേണ്ടതിലേറെ അനുഭവവേദ്യ മാകുന്ന അന്തരീക്ഷത്തിന്റെ പ്രത്യേകതകളാൽ കേരളത്തിലെ ദേവീക്ഷേത്രങ്ങളിൽ പരമപ്രധാനമായ സ്ഥാനമാണ് മുളങ്കാടകം ദേവീക്ഷേത്രത്തിനുള്ളത്. ദ്രാവിഡസംസ്കാരത്തിന്റെ നിഷ്കളങ്കവും പരിശു ദ്ധവുമായ ആരാധനയുടെ അന്തസ്സത്ത അതിന്റെ മുഴുവൻ രൂപഭംഗിയും ഉൾക്കൊണ്ട് ഈ ക്ഷേത്രത്തിൽ അനുഷ്ഠിക്കപ്പെടുന്നു. പാരമ്പര്യാധിഷ്ഠിതവും വിദ്യാനുസാരിയുമായ കർമ്മങ്ങൾകൊണ്ട് ശക്തിസ്വരൂ പിണിയായ ദേവി ഇവിടെ പൂജിക്കപ്പെടുന്നു. നൈമിത്തികതയുടെ പ്രഭാവം പൂണ്ടപോലെ ക്ഷേത്രത്തിന് മുന്നിലുള്ള കാവും അവിടെയുള്ള മറ്റനേകം പ്രതിഷ്ഠകളും നൂറ്റാണ്ടുകളായി തുടരുന്നു. ആരാധനാ സമ്പ്രദായങ്ങളുടെ സ്വച്ഛവും നിർമ്മലവുമായ അവബോധത്തിന്റെ സാക്ഷാത്ക്കാരമായും അവയേകുന്ന ഭാവതീവ്രതയുടെ മേളനംകൊണ്ട് മുളങ്കാടകം ദേവീക്ഷേത്രം ചൈതന്യമാക്കപ്പെട്ടിരിക്കുന്നു.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center my-16">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full max-w-md"></div>
              <div className="mx-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="text-amber-600 font-bold text-lg">ॐ</div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full max-w-md"></div>
            </div>

            {/* Second Section - The Legend */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-amber-900 font-serif mb-2">The Divine Manifestation</h3>
                <p className="text-amber-700 italic">A Tale of Miracles and Divine Grace</p>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mt-4"></div>
              </div>

              <div className="relative rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 md:p-12">
                  <p className="text-slate-800 leading-loose text-lg font-serif text-justify mb-6">
                    നൂറ്റാണ്ടുകൾക്ക് മുമ്പുള്ള ഒരു വേളയിൽ മുളങ്കാടിന്റെ ഓരത്ത് പുല്ലറുത്തുകൊണ്ടുനിന്ന അടി യാട്ടി പതിവില്ലാത്ത ഒരു കാഴ്ച കണ്ടു. കട്ടിയാവുടുത്ത ഒരു പെൺകുട്ടി കത്തിച്ചുപിടിച്ച കാക്കവിളക്കു മായി മുളങ്കാട്ടിലേക്ക് കയറിപ്പോകുന്ന കാഴ്ചകണ്ട് അവൾ ഭയന്നു വിറച്ചുപോയി. ഏതോ ഒരു വീടിന്റെ ഉത്തരംവയ്പ്പ് എന്ന ചടങ്ങും കഴിഞ്ഞ് ഗണപതിഒരുക്കും തോർത്തിൽ കെട്ടി മുഴക്കോലുമായി രാമൻ കുഞ്ചോതി എന്ന മൂത്താശാരി അതുവഴി വരികയായിരുന്നു. യോഗീശ്വരൻ കൂടിയായ അദ്ദേഹം കുറത്തി യുടെ പരവേശം കണ്ട് കാര്യമന്വേഷിച്ചു. അവൾ കണ്ട കാര്യം അതുപോലെ യോഗീശ്വരനോട് പറഞ്ഞു. യോഗീശ്വരൻ ഒരു നിമിഷം കണ്ണടച്ചുനിന്നു. തന്റെ ഉപാസനാമൂർത്തിയായ ദേവിയെ അദ്ദേഹം മനസ്സിൽ ധ്യാനിച്ചു. പെട്ടെന്ന് ആ പെൺകുട്ടി അദ്ദേഹത്തിന്റെ മുന്നിൽ പ്രത്യക്ഷമായി. കാക്കവിളക്കേന്തിയ തേജോമയിയായ പെൺകുട്ടി തനിക്ക് വിശക്കുന്നു എന്നു പറഞ്ഞപ്പോൾ യോഗീശ്വരൻ തന്റെ ഭാ ത്തിനുള്ളിലിരിക്കുന്ന ഗണപതിയൊരുക്കിന്റെ പങ്കായ അടയും മലരും നൽകുകയും പെൺകുട്ടി അത് രുചിയോടെ ഭക്ഷിക്കുകയും ചെയ്തു. ഇനി എനിക്ക് ഇരിക്കാനൊരു സ്ഥലം വേണമെന്ന് സാക്ഷാൽ ശ്രീ ഭദ്രകാളിയുടെ പ്രതീകമായ പെൺകുട്ടി ആവശ്യപ്പെട്ടു. പ്രസിദ്ധ ശിൽപ്പികുടിയായ യോഗീശ്വരൻ തൊട്ട ടുത്തുതന്നെ ഉചിതമായ ഒരു സ്ഥലം കണ്ടെത്തി, അസാധാരണമായ ഈ സംഭവത്തിൽ അടിയാട്ടിയും അപ്പോൾ അതുവഴി വന്ന അഞ്ചലോട്ടക്കാരനും സാക്ഷികളായിരുന്നു.
                  </p>
                  <p className="text-slate-800 leading-loose text-lg font-serif text-justify">
                    അടയാട്ടിക്കൊപ്പം ദേവീസംഭവ ത്തിന് സാക്ഷിയായ അഞ്ചലോട്ടക്കാരൻ തൻനിമിത്തം അന്ന് താമസിച്ചു ചെന്നതുകൊണ്ട് രാജകോപ ത്തിനിരായി. താൻ താമസിക്കാനുണ്ടായ കാരണം തിരുമുമ്പിലുണർത്തി. അത്കള്ളമാണെന്ന് കരുതിയ രാജാവ് കള്ളം പറഞ്ഞ് അയാളുടെ നാക്ക് അരിഞ്ഞെറിയാൻ ഉത്തരവിട്ടു. ആ പാവം പൊട്ടിക്കരഞ്ഞു കൊണ്ട് ഭഗവതിയെ പ്രാർത്ഥിച്ചു. ആ സമയത്ത് ഭഗവതിയുടെ വെളിപാട് ഉണ്ടായ യോഗീശ്വരൻ ഒരു തൂശനിലവെട്ടി കായലിലിട്ട് അതിൽ കയറിനിന്ന് നാന്തകം കൊണ്ട് തുഴഞ്ഞ് കൊട്ടാരത്തിൽ എത്തി യെന്നും തന്റെ ഭക്തന്റെ നാവ് വലിച്ചിട്ടുവെന്നും അതുകണ്ട് ഭയന്ന രാജാവ് പ്രായശ്ചിത്തമായി ക്ഷേത്ര നിർമ്മാണം നടത്തുകയും നിത്യചെലവുകൾക്ക് ഭണ്ഡാരം വക വസ്തുക്കൾ വിട്ടുകൊടുക്കുകയും ചെയ്തു എന്നാണ് ഐതീഹ്യം
                  </p>

                  {/* Decorative bottom element */}
                  <div className="mt-8 pt-6 border-t border-amber-200 text-center">
                    <p className="text-amber-800 italic text-sm">
                      Thus was established the sacred temple through divine intervention and royal penance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Section */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-100">
                <Image
                  src="/golden-om-symbol.png"
                  alt="Om Symbol"
                  width={50}
                  height={50}
                  className="mx-auto opacity-60 mb-4"
                />
                <h3 className="text-2xl font-bold text-amber-900 font-serif mb-4">
                  A Legacy of Divine Grace
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  This sacred legend has been passed down through generations, reminding us of the Goddess's compassion and the temple's divine origins. Today, devotees continue to experience her blessings and protection in this hallowed space.
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
