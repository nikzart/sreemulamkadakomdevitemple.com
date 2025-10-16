import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

interface ContactSectionProps {
  showTitle?: boolean
}

export function ContactSection({ showTitle = true }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image src="/mandala-pattern.png" alt="Background Pattern" fill className="object-cover" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            {showTitle && <SectionTitle subtitle="Reach Out" title="Contact Us" alignment="left" />}
            <div className="space-y-4 text-slate-700 leading-relaxed mb-10">
              <p>
                We welcome your questions, feedback, and prayer requests. Please feel free to reach out to us using the
                contact information below or the form.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Sree Mulamkadakam Devi Temple</p>
                    <p>Mulamkadakam</p>
                    <p>Thirumullavaram P.O.</p>
                    <p>Kollam – 691012</p>
                    <p>Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>0474 2790446</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="break-all">sreemulamkadakamdevitemple1900@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h3 className="text-xl font-bold mb-4 text-amber-800 font-serif">Temple Hours</h3>
              <div className="space-y-3 text-slate-700">
                <div className="flex justify-between items-center pb-2 border-b border-amber-100">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>7:00 AM - 12:00 PM, 5:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-amber-100">
                  <span className="font-medium">Saturday - Sunday:</span>
                  <span>6:00 AM - 1:00 PM, 4:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Festival Days:</span>
                  <span>5:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-amber-100">
              <h3 className="text-2xl font-bold mb-6 text-amber-800 font-serif">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-amber-900">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="flex h-12 w-full rounded-md border border-amber-200 bg-white px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-amber-900">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-md border border-amber-200 bg-white px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-amber-900">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="flex h-12 w-full rounded-md border border-amber-200 bg-white px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-amber-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="flex w-full rounded-md border border-amber-200 bg-white px-3 py-2 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md hover:shadow-lg transition-all duration-300 h-12 text-md">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
