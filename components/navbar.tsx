"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

// --- UPDATED MENU ITEMS ---
const menuItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About Us",
    href: "/#about"
  },
  {
    name: "Destinations", // Changed from Study Destinations
    href: "/destinations" // Removed the '#' so it links to the actual page
  },
  {
    name: "Services",
    href: "/services"
  },
  {
    name: "Blog",         // Added the missing Blog link!
    href: "/blog"
  },
  {
    name: "Resources",
    href: "/resources"
  },
  {
    name: "Contact Us",
    href: "/contact"
  }
]
// --------------------------

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex items-center group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOLD%20LOGO-H5T6j6nLhuoDiyRMQgkVxuXplVcrCf.png"
              alt="Bold Overseas"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-gray-700 hover:text-[#0B3B7A] transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link href="/book-consultation">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                Book A Call With CEO
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#0B3B7A] rounded-full block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[#0B3B7A] rounded-full block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#0B3B7A] rounded-full block"
              />
            </div>
          </button>

        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}