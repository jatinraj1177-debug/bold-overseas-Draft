"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ExpertPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Auto-shows the popup 3 seconds after the user lands on the page
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header Section */}
            <div className="bg-[#0B3B7A] p-6 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-black mb-1">Book a Consultation</h3>
              <p className="text-blue-200 text-sm font-medium">Connect with our experts to plan your global future.</p>
            </div>

            {/* Lead Capture Form */}
            <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#0B3B7A]">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all text-gray-800" 
                  placeholder="John Doe" 
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#0B3B7A]">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all text-gray-800" 
                  placeholder="+91 98765 43210" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#0B3B7A]">Preferred Destination</label>
                {/* FIXED: Using defaultValue on the select tag, removed 'selected' from option */}
                <select 
                  required
                  defaultValue="" 
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none bg-white text-gray-800 transition-all"
                >
                  <option value="" disabled>Select a country...</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all active:scale-[0.98]"
              >
                Request Call Back
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}