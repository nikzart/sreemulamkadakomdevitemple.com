"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  title: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  // Mount check for SSR compatibility
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedIndex])

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-full h-full bg-white rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm font-medium line-clamp-2">{image.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal - Rendered via Portal to document.body */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {selectedIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-sm"
                onClick={closeLightbox}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 md:p-4 rounded-full bg-white/90 hover:bg-white text-black hover:scale-110 transition-all duration-200 shadow-2xl group"
                  aria-label="Close"
                >
                  <X size={28} className="md:w-8 md:h-8" />
                  <span className="absolute -bottom-8 right-0 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded whitespace-nowrap">
                    Close (ESC)
                  </span>
                </button>

                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={32} />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Image Container */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-7xl max-h-[90vh] mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={images[selectedIndex].src}
                      alt={images[selectedIndex].title}
                      width={1920}
                      height={1080}
                      className="object-contain max-h-[80vh] w-auto mx-auto rounded-lg"
                      priority
                    />
                  </div>

                  {/* Image Title */}
                  <div className="mt-6 text-center">
                    <h3 className="text-white text-xl md:text-2xl font-bold font-serif">
                      {images[selectedIndex].title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2">
                      {selectedIndex + 1} / {images.length}
                    </p>
                  </div>
                </motion.div>

                {/* Instruction Text */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
                  Use arrow keys to navigate • Press ESC to close
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}
