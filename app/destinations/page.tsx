"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image" // <-- Added optimized Image component
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StudyDestinationsMap from "@/components/study-destinations"
import ExpertPopup from "@/components/expert-popup"
import { GraduationCap, Wallet, Briefcase, Calendar, ArrowRight } from "lucide-react"

// Updated with the exact file names from your VS Code screenshot
const countries = [
  { 
    id: 'usa', 
    name: 'United States', 
    flag: '/hero/us.png', 
    image: '/hero/hero-usa (1).jpg',
    tuition: '$20k - $50k / year', 
    visa: 'F-1 Student Visa', 
    workRights: '12-36 months OPT', 
    intake: 'Fall (Aug), Spring (Jan)' 
  },
  { 
    id: 'uk', 
    name: 'United Kingdom', 
    flag: '/hero/gb.png', 
    image: '/hero/hero-uk.jpg',
    tuition: '£12k - £30k / year', 
    visa: 'Tier 4 Visa', 
    workRights: '2 years Graduate Route', 
    intake: 'Sep/Oct, Jan/Feb' 
  },
  { 
    id: 'canada', 
    name: 'Canada', 
    flag: '/hero/ca.png', 
    image: '/hero/hero-canada.jpg',
    tuition: 'CAD 15k - 35k / year', 
    visa: 'Study Permit', 
    workRights: 'Up to 3 years PGWP', 
    intake: 'Fall (Sep), Winter (Jan)' 
  },
  { 
    id: 'australia', 
    name: 'Australia', 
    flag: '/hero/au.png', 
    image: '/hero/hero-australia.jpg',
    tuition: 'AUD 20k - 45k / year', 
    visa: 'Subclass 500', 
    workRights: '2-4 years Temporary', 
    intake: 'Feb/March, July' 
  },
  { 
    id: 'germany', 
    name: 'Germany', 
    flag: '/hero/de.png', 
    image: '/hero/hero-germany.jpg',
    tuition: '€0 - €3k / year (Public)', 
    visa: 'National Visa (D)', 
    workRights: '18 months Job Seeker', 
    intake: 'Winter (Oct), Summer (Apr)' 
  },
  { 
    id: 'ireland', 
    name: 'Ireland', 
    flag: '/hero/ie.png', 
    image: '/hero/hero-ireland.jpg',
    tuition: '€10k - €25k / year', 
    visa: 'Stamp 2', 
    workRights: '1-2 years Post-Study', 
    intake: 'Autumn (Sep), Spring (Jan)' 
  }
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Dynamic Lead Capture Popup */}
      <ExpertPopup />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0B3B7A] mb-6">
              Global Study Destinations
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Explore tuition fees, scholarship opportunities, and visa details for the world's most sought-after academic hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Component */}
      <div className="bg-slate-50 border-b border-gray-200/50">
        <StudyDestinationsMap />
      </div>

      {/* Country Cards Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#0B3B7A] mb-4">Compare Top Destinations</h2>
            <p className="text-gray-600 font-medium">Find the perfect academic and professional fit for your future.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div 
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg shadow-blue-900/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
                {/* Visual Header with Images */}
                <div className="relative h-48 w-full bg-gray-100">
                  <Image 
                    src={country.image} 
                    alt={country.name} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Flag and Name Overlay */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                    <div className="relative w-10 h-7 rounded border border-white/30 overflow-hidden shadow-sm">
                      <Image 
                        src={country.flag} 
                        alt={`${country.name} flag`} 
                        fill 
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">{country.name}</h3>
                  </div>
                </div>

                {/* Card Data Points */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="space-y-5 flex-1 mb-8">
                    <div className="flex items-start gap-3">
                      <Wallet className="w-5 h-5 text-[#1D4ED8] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Avg. Tuition</p>
                        <p className="text-sm font-bold text-gray-800">{country.tuition}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#1D4ED8] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Visa Type</p>
                        <p className="text-sm font-bold text-gray-800">{country.visa}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-[#1D4ED8] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Work Rights</p>
                        <p className="text-sm font-bold text-green-600">{country.workRights}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#1D4ED8] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Main Intakes</p>
                        <p className="text-sm font-bold text-gray-800">{country.intake}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/book-consultation?country=${country.name}`}>
                    <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-50 text-[#0B3B7A] font-bold rounded-xl border border-gray-200 hover:bg-[#0B3B7A] hover:text-white hover:border-[#0B3B7A] transition-all group">
                      Get Guidance
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}