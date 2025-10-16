import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const quickLinks = [
    { name: "About", path: "/#about" },
    { name: "Deities", path: "/#deities" },
    { name: "Mythology", path: "/mythology" },
    { name: "Pooja Timings", path: "/#events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Trust Members", path: "/trust-members" },
    { name: "Priests", path: "/priests" },
  ]

  return (
    <footer className="bg-gradient-to-r from-amber-900 to-red-900 text-amber-100 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/mandala-pattern.png" alt="Background Pattern" fill className="object-cover" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12">
                <Image src="/golden-om-symbol.png" alt="Om Symbol" fill className="object-contain" />
              </div>
              <div>
                <span className="text-2xl font-bold text-amber-100 font-serif">Sree Mulamkadakom Devi Temple</span>
              </div>
            </div>
            <p className="text-amber-200 mb-6">
              A sacred space dedicated to spiritual growth, cultural preservation, and community service.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4 text-amber-100 font-serif">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/sreemulamkadakomdevitemple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-800/30 p-3 rounded-full hover:bg-amber-700/50 transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5 text-amber-100" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-100 font-serif">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-amber-200 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-100 font-serif">Newsletter</h3>
            <p className="text-amber-200 mb-4">
              Subscribe to our newsletter for updates on temple events and activities.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-12 w-full rounded-l-md border-y border-l border-amber-700 bg-amber-800/30 px-3 py-2 text-amber-100 placeholder:text-amber-400/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:ring-offset-1 focus-visible:ring-offset-amber-900"
              />
              <Button className="rounded-l-none bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white h-12">
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
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800/50 mt-12 pt-8 text-center text-sm">
          <p>© {currentYear} Sree Mulamkadakom Devi Temple. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="#" className="text-amber-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-amber-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-amber-300 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
