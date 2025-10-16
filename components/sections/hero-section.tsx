import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-red-900/80 z-10" />
      <Image
        src="/temple-bg.jpg"
        alt="Temple Architecture"
        width={1920}
        height={800}
        className="w-full min-h-[500px] h-[85vh] object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4 py-16 md:py-0 overflow-hidden pointer-events-auto">
        <div className="relative">
          <Image
            src="/golden-mandala.png"
            alt="Decorative Mandala"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-40 animate-spin-slow"
            priority
          />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
              {/* Goddess Image */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0 glow-effect">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-red-500/30 blur-md"></div>
                <Image
                  src="/Mulamkadakom_Devi.png"
                  alt="Goddess Devi"
                  width={400}
                  height={400}
                  className="relative z-10 object-contain w-full h-full"
                  priority
                />
              </div>

              {/* Mantra Text */}
              <div className="text-center md:text-left max-w-2xl">
                <div className="mb-4 flex justify-center md:justify-start">
                  <div className="h-0.5 w-20 bg-amber-300 mr-4 mt-4"></div>
                  <div className="text-amber-300 text-sm tracking-widest uppercase">Sacred Mantra</div>
                  <div className="h-0.5 w-20 bg-amber-300 ml-4 mt-4"></div>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 leading-relaxed font-['Noto_Sans_Malayalam'] text-amber-50 drop-shadow-lg tracking-wide">
                  <span className="block">ഓം&nbsp;സർവ്വമംഗള&nbsp;മംഗല്യേ</span>
                  <span className="block">ശിവേ&nbsp;സർവ്വാർത്ഥ&nbsp;സാധികേ</span>
                  <span className="block">ശരണ്യേ&nbsp;ത്ര്യംബകേ&nbsp;ഗൗരി</span>
                  <span className="block">നാരായണി&nbsp;നമോസ്തുതേ.</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full max-w-full flex-wrap relative z-30 pointer-events-auto">
                  <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-base">
                    Visit Temple
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/20 transition-all duration-300 rounded-full px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-base font-medium backdrop-blur-sm bg-black/20"
                  >
                    View Schedule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent z-10"></div>
    </section>
  )
}
