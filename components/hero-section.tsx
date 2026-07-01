"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const trustMetrics = [
  { number: "15,000+", label: "Success Stories" },
  { number: "98%", label: "Visa Approval Rate" },
  { number: "100+", label: "University Partnerships" },
]

const stats = [
  { number: "300+", label: "Universities" },
  { number: "98%", label: "Visa Success" },
  { number: "20,000+", label: "Students Guided" },
  { number: "100+", label: "Global Partners" },
]

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[calc(100vh-80px)] bg-[#f8fafc] overflow-hidden pt-16 sm:pt-24 pb-10 flex flex-col justify-center w-full"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-sky-400/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* --- LEFT SIDE: TEXT (DECREASED SIZE) --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4 sm:space-y-5 text-left relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-100 shadow-sm w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-[#0B3B7A] uppercase">Empowering 15,000+ Global Scholars</span>
            </motion.div>

            {/* Decreased Font Sizes Here */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-black tracking-tight text-[#0B3B7A] leading-[1.1]">
                Global Ambitions.
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-black tracking-tight text-[#0B3B7A] leading-[1.1]">
                Strategic Guidance.
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-black tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-sky-500 via-[#1D4ED8] to-[#0B3B7A] bg-clip-text text-transparent">
                  Unrivaled Success.
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed font-medium">
              Elevate your international education journey with elite, end-to-end advisory. Bold Overseas transforms complex university admissions and visa processes into a clear, strategic roadmap.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 pt-1">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-left"
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#0B3B7A]">{metric.number}</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-gray-500 mt-0.5 uppercase tracking-wide">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <Link href="/book-consultation">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] text-white font-bold shadow-lg shadow-blue-500/25 transition-all text-sm sm:text-base flex items-center gap-2"
                >
                  Connect With Our Experts
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: EXACT MATCH TO CLIENT PHOTO --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center mt-12 lg:mt-0 min-h-[400px] lg:min-h-[500px]"
          >
            
            {/* THIN WIREFRAME BACKGROUND GLOBE (Rotating) */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.15] z-0"
            >
              <svg viewBox="0 0 100 100" className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] text-[#0B3B7A]">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <ellipse cx="50" cy="50" rx="24" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="48" ry="24" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </motion.div>

            {/* B O L D LETTERS (100% SVG - No Online Images) */}
            <div className="relative z-10 flex justify-center items-center gap-1 sm:gap-3">
              
              {/* B - USA */}
              <svg viewBox="0 0 100 140" className="w-16 sm:w-20 lg:w-[100px] h-auto drop-shadow-md hover:scale-105 transition-transform duration-300">
                <defs>
                  <clipPath id="clipB"><text x="50" y="115" fontSize="125" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle">B</text></clipPath>
                  <linearGradient id="usaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#BF0A30" /><stop offset="15%" stopColor="#FFFFFF" />
                    <stop offset="30%" stopColor="#BF0A30" /><stop offset="45%" stopColor="#FFFFFF" />
                    <stop offset="60%" stopColor="#BF0A30" /><stop offset="75%" stopColor="#FFFFFF" />
                    <stop offset="90%" stopColor="#BF0A30" />
                  </linearGradient>
                </defs>
                <g clipPath="url(#clipB)">
                  <rect width="100" height="140" fill="url(#usaGrad)" />
                  <rect width="45" height="70" fill="#002868" />
                  {[...Array(6)].map((_, i) => (<circle key={i} cx={10 + (i % 3) * 12} cy={15 + Math.floor(i / 3) * 20} r="3.5" fill="white" />))}
                </g>
              </svg>

              {/* O - UK */}
              <svg viewBox="0 0 100 140" className="w-16 sm:w-20 lg:w-[100px] h-auto drop-shadow-md hover:scale-105 transition-transform duration-300">
                <defs>
                  <clipPath id="clipO"><text x="50" y="115" fontSize="125" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle">O</text></clipPath>
                </defs>
                <g clipPath="url(#clipO)">
                  <rect width="100" height="140" fill="#012169" />
                  <path d="M0,0 L100,140 M100,0 L0,140" stroke="white" strokeWidth="14" />
                  <path d="M0,0 L100,140 M100,0 L0,140" stroke="#C8102E" strokeWidth="8" />
                  <path d="M50,0 L50,140 M0,70 L100,70" stroke="white" strokeWidth="20" />
                  <path d="M50,0 L50,140 M0,70 L100,70" stroke="#C8102E" strokeWidth="12" />
                </g>
              </svg>

              {/* L - Germany (Corrected Gradient) */}
              <svg viewBox="0 0 100 140" className="w-16 sm:w-20 lg:w-[100px] h-auto drop-shadow-md hover:scale-105 transition-transform duration-300">
                <defs>
                  <clipPath id="clipL"><text x="50" y="115" fontSize="125" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle">L</text></clipPath>
                  <linearGradient id="gerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="33.3%" stopColor="#000000" />
                    <stop offset="33.3%" stopColor="#DD0000" />
                    <stop offset="66.6%" stopColor="#DD0000" />
                    <stop offset="66.6%" stopColor="#FFCE00" />
                  </linearGradient>
                </defs>
                <g clipPath="url(#clipL)">
                  <rect width="100" height="140" fill="url(#gerGrad)" />
                </g>
              </svg>

              {/* D - Australia */}
              <svg viewBox="0 0 100 140" className="w-16 sm:w-20 lg:w-[100px] h-auto drop-shadow-md hover:scale-105 transition-transform duration-300">
                <defs>
                  <clipPath id="clipD"><text x="50" y="115" fontSize="125" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle">D</text></clipPath>
                </defs>
                <g clipPath="url(#clipD)">
                  <rect width="100" height="140" fill="#00008B" />
                  <rect width="45" height="60" fill="#012169" />
                  <path d="M0,0 L45,60 M45,0 L0,60" stroke="white" strokeWidth="6" />
                  <path d="M0,0 L45,60 M45,0 L0,60" stroke="#C8102E" strokeWidth="3" />
                  <path d="M22.5,0 L22.5,60 M0,30 L45,30" stroke="white" strokeWidth="8" />
                  <path d="M22.5,0 L22.5,60 M0,30 L45,30" stroke="#C8102E" strokeWidth="4" />
                  
                  {/* Commonwealth Star */}
                  <circle cx="22.5" cy="100" r="6" fill="white" />
                  
                  {/* Southern Cross Stars */}
                  <circle cx="75" cy="100" r="5" fill="white" />
                  <circle cx="88" cy="80" r="4" fill="white" />
                  <circle cx="78" cy="60" r="4" fill="white" />
                  <circle cx="58" cy="75" r="3" fill="white" />
                  <circle cx="62" cy="95" r="3" fill="white" />
                </g>
              </svg>
            </div>

            {/* OVERSEAS BADGE */}
            <div className="relative z-20 mt-4 sm:mt-6">
              <div className="tracking-[0.4em] text-[#0B3B7A] font-black text-sm sm:text-base lg:text-lg bg-white border-2 border-gray-100 rounded-full py-2.5 px-8 mx-auto inline-block shadow-md uppercase">
                OVERSEAS
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM STATS BANNER --- */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 mt-10 sm:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B3B7A] group-hover:text-sky-500 transition-colors">{item.number}</h3>
              <p className="text-gray-500 font-semibold text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-2 uppercase tracking-wide">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}