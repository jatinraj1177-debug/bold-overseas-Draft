"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StudyDestinationsMap from "@/components/study-destinations"
import { GraduationCap, Wallet, Briefcase, Calendar, ArrowRight } from "lucide-react"

const countries = [
  { 
    id: 'usa', 
    name: 'United States', 
    flag: '🇺🇸', 
    tuition: '$20k - $50k / year', 
    visa: 'F-1 Student Visa', 
    workRights: '12-36 months OPT', 
    intake: 'Fall (Aug), Spring (Jan)' 
  },
  { 
    id: 'uk', 
    name: 'United Kingdom', 
    flag: '🇬🇧', 
    tuition: '£12k - £30k / year', 
    visa: 'Tier 4 Visa', 
    workRights: '2 years Graduate Route', 
    intake: 'Sep/Oct, Jan/Feb' 
  },
  { 
    id: 'canada', 
    name: 'Canada', 
    flag: '🇨🇦', 
    tuition: 'CAD 15k - 35k / year', 
    visa: 'Study Permit', 
    workRights: 'Up to 3 years PGWP', 
    intake: 'Fall (Sep), Winter (Jan)' 
  },
  { 
    id: 'australia', 
    name: 'Australia', 
    flag: '🇦🇺', 
    tuition: 'AUD 20k - 45k / year', 
    visa: 'Subclass 500', 
    workRights: '2-4 years Temporary', 
    intake: 'Feb/March, July' 
  },
  { 
    id: 'germany', 
    name: 'Germany', 
    flag: '🇩🇪', 
    tuition: '€0 - €3k / year (Public)', 
    visa: 'National Visa (D)', 
    workRights: '18 months Job Seeker', 
    intake: 'Winter (Oct), Summer (Apr)' 
  },
  { 
    id: 'ireland', 
    name: 'Ireland', 
    flag: '🇮🇪', 
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

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3B7A] mb-6">
              Global Study Destinations
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Explore top universities, tuition fees, scholarship opportunities, and visa details for the world's most sought-after academic hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Your Existing Map Component */}
      <div className="bg-slate-50 border-b border-gray-200/50">
        <StudyDestinationsMap />
      </div>

      {/* Country Cards Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B3B7A] mb-4">Compare Top Destinations</h2>
            <p className="text-gray-600">Find the perfect academic and professional fit for your future.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div 
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg shadow-blue-900/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-50">
                  <span className="text-5xl">{country.flag}</span>
                  <h3 className="text-2xl font-bold text-[#0B3B7A]">{country.name}</h3>
                </div>

                {/* Card Data Points */}
                <div className="space-y-4 flex-1 mb-8">
                  <div className="flex items-start gap-3">
                    <Wallet className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Avg. Tuition</p>
                      <p className="text-sm font-medium text-gray-800">{country.tuition}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Visa Type</p>
                      <p className="text-sm font-medium text-gray-800">{country.visa}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Work Rights</p>
                      <p className="text-sm font-medium text-green-600">{country.workRights}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Main Intakes</p>
                      <p className="text-sm font-medium text-gray-800">{country.intake}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/book-consultation?country=${country.name}`}>
                  <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-50 text-[#0B3B7A] font-semibold rounded-xl border border-gray-200 hover:bg-[#0B3B7A] hover:text-white hover:border-[#0B3B7A] transition-all group">
                    Get Guidance
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}