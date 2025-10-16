import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactSection } from "@/components/sections/contact-section"
import { PageHeader } from "@/components/ui/page-header"

export const metadata = {
  title: "Contact Us | Sree Mulamkadakom Devi Temple",
  description:
    "Get in touch with Sree Mulamkadakom Devi Temple. We welcome your questions, feedback, and prayer requests.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50/50">
      <Header />

      <main className="flex-1">
        <PageHeader title="Contact Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

        <ContactSection showTitle={false} />
      </main>

      <Footer />
    </div>
  )
}
