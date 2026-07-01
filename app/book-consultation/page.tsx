"use client"

import { Suspense, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PhoneCall, Mail, MessageCircle } from "lucide-react"

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", 
  "Ireland", "France", "Cyprus", "Germany", "Slovakia", 
  "Russia", "Georgia", "Kyrgyzstan"
]

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", 
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
]

function BookConsultationContent() {
  const searchParams = useSearchParams()
  const preselectedCountry = searchParams.get("country") || ""
  
  const [formData, setFormData] = useState({
    name: "", email: "", mobile: "", preferredCountry: preselectedCountry,
    preferredDate: "", preferredTime: "", message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (preselectedCountry) {
      setFormData(prev => ({ ...prev, preferredCountry: preselectedCountry }))
    }
  }, [preselectedCountry])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number"
    }
    if (!formData.preferredCountry) newErrors.preferredCountry = "Please select a country"
    if (!formData.preferredDate) newErrors.preferredDate = "Please select a date"
    if (!formData.preferredTime) newErrors.preferredTime = "Please select a time"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // UPDATED: New Calendly Link for the automatic popup
    window.open("https://calendly.com/boldoverseas9/30min", "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }))
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split("T")[0]
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#1D4ED8]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#0B3B7A]/5 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B3B7A] mb-6 leading-tight">
              Book A Call With{" "}
              <span className="bg-gradient-to-r from-[#0B3B7A] via-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent">
                Our EXPERTS
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get personalized guidance for your international education journey directly from our experts. Schedule a one-on-one consultation today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid lg:grid-cols-5 gap-10"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 space-y-8"
                  >
                    <div className="relative rounded-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3B7A] to-[#1D4ED8]" />
                      <div className="relative p-8">
                        <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Personal Consultation</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-8">
                          Connect directly with our experts who have helped over 15,000+ students achieve their dreams.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-blue-50 p-6 rounded-3xl border border-blue-100/50 shadow-sm">
                      <a href="https://wa.me/919966704042" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#20bd5a] transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Us
                      </a>
                      <div className="flex flex-col text-sm">
                        <a href="tel:+919966704042" className="inline-flex items-center gap-2 text-[#0B3B7A] font-bold hover:underline mb-1">
                          <PhoneCall className="w-4 h-4" /> +91 99667 04042
                        </a>
                        <a href="mailto:Sairamgade@boldoverseas.com" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0B3B7A] hover:underline">
                          <Mail className="w-4 h-4" /> Sairamgade@boldoverseas.com
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:col-span-3 flex flex-col gap-6"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                      <form onSubmit={handleSubmit} className="relative p-8 lg:p-10">
                        <h2 className="text-2xl font-bold text-[#0B3B7A] mb-8">Schedule Your Consultation</h2>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input
                              type="text" name="name" value={formData.name} onChange={handleInputChange}
                              className={`w-full px-4 py-3.5 rounded-xl border ${errors.name ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"} outline-none`}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                              <input
                                type="email" name="email" value={formData.email} onChange={handleInputChange}
                                className={`w-full px-4 py-3.5 rounded-xl border ${errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"} outline-none`}
                              />
                              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile *</label>
                              <input
                                type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange}
                                className={`w-full px-4 py-3.5 rounded-xl border ${errors.mobile ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"} outline-none`}
                              />
                              {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Destination *</label>
                            <select
                              name="preferredCountry" value={formData.preferredCountry} onChange={handleInputChange}
                              className={`w-full px-4 py-3.5 rounded-xl border ${errors.preferredCountry ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"} outline-none bg-white`}
                            >
                              <option value="">Select a country</option>
                              {countries.map(country => <option key={country} value={country}>{country}</option>)}
                            </select>
                            {errors.preferredCountry && <p className="mt-1 text-xs text-red-500">{errors.preferredCountry}</p>}
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                              <input
                                type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange}
                                min={getMinDate()} max={getMaxDate()}
                                className={`w-full px-4 py-3.5 rounded-xl border ${errors.preferredDate ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"} outline-none bg-white`}
                              />
                              {errors.preferredDate && <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
                              <select
                                name="preferredTime" value={formData.preferredTime} onChange={handleInputChange}
                                className={`w-full px-4 py-3.5 rounded-xl border ${errors.preferredTime ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"} outline-none bg-white`}
                              >
                                <option value="">Select a time</option>
                                {timeSlots.map(time => <option key={time} value={time}>{time} IST</option>)}
                              </select>
                              {errors.preferredTime && <p className="mt-1 text-xs text-red-500">{errors.preferredTime}</p>}
                            </div>
                          </div>

                          <motion.button
                            type="submit" disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] text-white font-semibold shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                          >
                            {isSubmitting ? "Opening Calendar..." : "Schedule Consultation"}
                          </motion.button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="relative rounded-3xl overflow-hidden border border-green-100 shadow-xl p-10 lg:p-16 text-center bg-white mb-6">
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto mb-8 flex items-center justify-center shadow-lg"
                    >
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h2 className="text-3xl font-bold text-[#0B3B7A] mb-4">Consultation Scheduled!</h2>
                    <p className="text-gray-600 mb-8">Thank you! Your Calendly window has opened. Please pick your final slot there.</p>
                    
                    <button 
                      onClick={() => window.location.reload()}
                      className="px-8 py-3 bg-[#0B3B7A] text-white rounded-xl"
                    >
                      Book Another Call
                    </button>
                  </div>

                  <div className="text-center bg-yellow-50 p-6 rounded-3xl border border-yellow-100 shadow-sm">
                    <p className="text-gray-700 font-medium mb-1">Did the calendar not open?</p>
                    <p className="text-gray-600 text-sm mb-3">Your browser might have blocked the pop-up.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      {/* UPDATED: New Calendly Link for the manual fallback */}
                      <a href="https://calendly.com/boldoverseas9/30min" target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] font-bold hover:underline">
                        Click here to open it manually
                      </a>
                      <span className="hidden sm:inline text-gray-300">|</span>
                      <a href="tel:+919966704042" className="inline-flex items-center gap-1 text-gray-600 hover:text-[#0B3B7A]">
                        <PhoneCall className="w-4 h-4" /> +91 99667 04042
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function BookConsultationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <BookConsultationContent />
    </Suspense>
  )
}