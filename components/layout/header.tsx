"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "About", path: "/#about" },
    { name: "Deities", path: "/#deities" },
    { name: "Events", path: "/#events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Trust Members", path: "/trust-members" },
    { name: "Priests", path: "/priests" },
  ]

  // Helper function to check if a link is active
  const isLinkActive = (path) => {
    if (path === "/gallery" && pathname === "/gallery") {
      return true
    }

    if (path === "/trust-members" && pathname === "/trust-members") {
      return true
    }

    if (path === "/priests" && pathname === "/priests") {
      return true
    }

    if (pathname === "/" && path.startsWith("/#")) {
      // For hash links on homepage
      return false // Don't highlight any by default on homepage
    }

    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-amber-50/95 to-orange-50/95 backdrop-blur supports-[backdrop-filter]:bg-amber-50/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <Image src="/golden-om-symbol.png" alt="Om Symbol" fill className="object-contain" />
          </div>
          <div>
            <span className="text-2xl font-bold text-amber-900 font-serif">Sree Mulamkadakom Devi Temple</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-medium ${
                isLinkActive(item.path) ? "text-amber-600" : "text-amber-800 hover:text-amber-600"
              } transition-colors relative group`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <Button
          variant="outline"
          className="hidden md:flex border-amber-600 text-amber-600 hover:bg-amber-100 hover:text-amber-700 transition-all duration-300"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-amber-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="relative w-6 h-6"
          >
            <motion.span
              variants={{
                open: { rotate: 45, y: 8 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-6 h-0.5 bg-amber-800 transform-gpu"
            ></motion.span>
            <motion.span
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-[11px] left-0 w-6 h-0.5 bg-amber-800 transform-gpu"
            ></motion.span>
            <motion.span
              variants={{
                open: { rotate: -45, y: -8 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 w-6 h-0.5 bg-amber-800 transform-gpu"
            ></motion.span>
          </motion.div>
        </Button>

        {/* Mobile menu with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-20 left-0 right-0 bg-amber-50 shadow-lg md:hidden z-50 overflow-hidden"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
                className="flex flex-col p-4"
              >
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 20,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    className="mb-2"
                  >
                    <Link
                      href={item.path}
                      className={`block py-3 px-4 ${
                        isLinkActive(item.path)
                          ? "bg-amber-100 text-amber-800"
                          : "text-amber-800 hover:bg-amber-100"
                      } rounded-md transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    closed: {
                      y: 20,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}
                  className="mt-2"
                >
                  <Button
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Contact
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
