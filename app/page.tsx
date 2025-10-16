import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { DeitiesSection } from "@/components/sections/deities-section"
import { PoojaTimingsSection } from "@/components/sections/pooja-timings-section"
import { DecorativeDivider } from "@/components/ui/decorative-divider"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50/50">
      <Header />

      <main className="flex-1">
        <HeroSection />

        <DecorativeDivider bgColor="bg-amber-50" dividerColor="text-amber-200 opacity-50" />

        <AboutSection />

        <DecorativeDivider bgColor="bg-white" dividerColor="text-amber-50 opacity-100" invert={true} />

        <DeitiesSection />

        <PoojaTimingsSection />
      </main>

      <Footer />
    </div>
  )
}
