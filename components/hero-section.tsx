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
      className="relative min-h-[calc(100vh-80px)] bg-white overflow-hidden pt-12 pb-16 flex flex-col justify-center w-full"
    >
      {/* --- PREMIUM THEMATIC BACKGROUND ANIMATIONS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#0B3B7A]/5 to-blue-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/5 to-[#1D4ED8]/5 rounded-full blur-3xl" />

        <motion.div
          className="absolute top-[20%] opacity-20 text-[#1D4ED8]"
          animate={{ x: ["-10vw", "110vw"], y: [50, -50] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="rotate-45">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </motion.div>

        {/* Floating Graduation Caps */}
        <motion.div
          className="absolute left-[10%] opacity-25 text-[#0B3B7A]"
          animate={{
            y: ["110vh", "-20vh"],
            rotate: [-15, 25, -15],
            x: [0, 40, -30, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-[15%] opacity-20 text-[#1D4ED8]"
          animate={{
            y: ["110vh", "-20vh"],
            rotate: [20, -20, 15],
            x: [0, -50, 30, 0]
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear", delay: 4 }}
        >
          <svg width="68" height="68" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B3B7A]/5 border border-[#0B3B7A]/10 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-[#0B3B7A] uppercase">Empowering 15,000+ Global Scholars</span>
            </motion.div>

            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B3B7A] leading-[1.15]">
                Global Ambitions.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B3B7A] leading-[1.15]">
                Strategic Guidance.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                <span className="bg-gradient-to-r from-[#0B3B7A] via-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent">
                  Unrivaled Success.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-medium">
              Elevate your international education journey with elite, end-to-end advisory. Bold Overseas transforms complex university admissions and visa processes into a clear, strategic roadmap for your global future.
            </p>

            <div className="flex flex-wrap gap-6 pt-2">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-left"
                >
                  <div className="text-xl sm:text-2xl font-black text-[#0B3B7A]">{metric.number}</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-400 mt-0.5">{metric.label}</div>
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
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] text-white font-bold shadow-lg shadow-blue-500/25 transition-all text-base"
                >
                  Book A Call With CEO
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Layer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center h-[380px] lg:h-[450px]"
          >
            <div className="relative w-full max-w-md flex justify-center items-center">
              
              {/* Premium Dark Globe Lineart Rotation Overlay */}
              <motion.svg 
                viewBox="0 0 100 100" 
                className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] text-[#0B3B7A]/15 -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.8" />
                <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 50 4 C 68 25, 68 75, 50 96" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 50 4 C 32 25, 32 75, 50 96" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 50 4 C 82 25, 82 75, 50 96" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M 50 4 C 18 25, 18 75, 50 96" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M 8.5 30 Q 50 38 91.5 30" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 8.5 70 Q 50 62 91.5 70" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </motion.svg>

              {/* ORIGINAL SVG CLIP-PATH LETTERS (Fixed with overflow-visible to stop crashing) */}
              <div className="flex justify-center items-end gap-2 sm:gap-3 z-10 relative">
                
                {/* B - USA */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="relative">
                  <svg viewBox="0 0 100 140" className="w-16 sm:w-24 lg:w-26 h-auto drop-shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-visible">
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
                </motion.div>

                {/* O - UK */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="relative">
                  <svg viewBox="0 0 100 140" className="w-16 sm:w-24 lg:w-26 h-auto drop-shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-visible">
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
                </motion.div>

                {/* L - Germany */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="relative">
                  <svg viewBox="0 0 100 140" className="w-16 sm:w-24 lg:w-26 h-auto drop-shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-visible">
                    <defs>
                      <clipPath id="clipL"><text x="50" y="115" fontSize="125" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle">L</text></clipPath>
                    </defs>
                    <g clipPath="url(#clipL)">
                      <rect width="100" height="46.6" fill="#000000" />
                      <rect y="46.6" width="100" height="46.6" fill="#FF0000" />
                      <rect y="93.2" width="100" height="46.8" fill="#FFCC00" />
                    </g>
                  </svg>
                </motion.div>

                {/* D - Australia */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="relative">
                  <svg viewBox="0 0 100 140" className="w-16 sm:w-24 lg:w-26 h-auto drop-shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-visible">
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
                      <circle cx="75" cy="100" r="5" fill="white" />
                      <circle cx="88" cy="80" r="4" fill="white" />
                      <circle cx="78" cy="60" r="4" fill="white" />
                      <circle cx="58" cy="75" r="3" fill="white" />
                      <circle cx="62" cy="95" r="3" fill="white" />
                    </g>
                  </svg>
                </motion.div>
              </div>
              
              {/* Overseas Banner Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 left-0 right-0 text-center z-20"
              >
                <div className="tracking-[0.4em] text-[#0B3B7A] font-black text-lg sm:text-xl bg-white/90 backdrop-blur-md border border-gray-100 rounded-full py-2 px-8 mx-auto inline-block shadow-lg">
                  OVERSEAS
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Grid Stats Block */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B3B7A]">{item.number}</h3>
              <p className="text-gray-500 font-semibold text-xs sm:text-sm mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}