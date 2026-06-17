"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"
import { Plane, GraduationCap } from "lucide-react"

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
      className="relative min-h-[calc(100vh-80px)] bg-[#f8fafc] overflow-hidden pt-6 pb-10 flex flex-col justify-center w-full"
    >
      {/* --- INJECTED CSS FOR THE SEAMLESS GLOBE ROTATION --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spinEarth {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
      `}} />

      {/* --- PREMIUM AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-sky-400/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#1D4ED8]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* --- LEFT SIDE: CONTENT COLUMN --- */}
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

            <div className="space-y-1">
              {/* Scaled down text for perfect laptop fit */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-black tracking-tight text-[#0B3B7A] leading-[1.05]">
                Global Ambitions.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-black tracking-tight text-[#0B3B7A] leading-[1.05]">
                Strategic Guidance.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-black tracking-tight leading-[1.05]">
                <span className="bg-gradient-to-r from-sky-400 via-[#1D4ED8] to-[#0B3B7A] bg-clip-text text-transparent">
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
                  <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-gray-500 mt-0.5">{metric.label}</div>
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

          {/* --- RIGHT SIDE: REALISTIC BRIGHT GLOBE & SIMPLE ICON ORBITS --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center mt-8 lg:mt-0"
          >
            
            {/* Scaled down container wrapper */}
            <div className="relative flex justify-center items-center w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] aspect-square mx-auto">
              
              {/* Vibrant Outer Blue Glow */}
              <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-[60px] pointer-events-none" />

              {/* --- ORBIT 1: The Flight Path --- */}
              <div className="absolute w-[125%] h-[125%] border-[1.5px] border-sky-400/40 rounded-full border-dashed z-20" style={{ transform: "rotateX(65deg) rotateY(-15deg)" }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="w-full h-full relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
                    <Plane className="w-6 h-6 sm:w-7 sm:h-7 text-sky-500" strokeWidth={2.5} style={{ transform: "rotate(90deg)" }} />
                  </div>
                </motion.div>
              </div>

              {/* --- ORBIT 2: The Education Path --- */}
              <div className="absolute w-[145%] h-[145%] border-[1.5px] border-[#1D4ED8]/30 rounded-full z-0" style={{ transform: "rotateX(75deg) rotateY(25deg)" }}>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="w-full h-full relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 drop-shadow-[0_0_8px_rgba(29,78,216,0.6)]">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#1D4ED8]" strokeWidth={2} />
                  </div>
                </motion.div>
              </div>

              {/* --- THE VIBRANT SKY BLUE GLOBE (Scaled Down) --- */}
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden shadow-[0_15px_40px_rgba(56,189,248,0.3)] border border-sky-200/50 bg-[#e0f2fe]">
                <div 
                  className="absolute inset-0 w-full h-full opacity-100 mix-blend-multiply"
                  style={{
                    backgroundImage: "url('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')",
                    backgroundSize: "200% 100%",
                    animation: "spinEarth 40s linear infinite",
                    filter: "brightness(1.4) contrast(1.1) hue-rotate(-15deg)"
                  }}
                />
                <div className="absolute inset-0 bg-sky-300/30 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_-15px_-15px_30px_rgba(11,59,122,0.4),inset_10px_10px_20px_rgba(255,255,255,0.7)] pointer-events-none" />
              </div>

              {/* --- 3. FLOATING COUNTRY FLAGS (Scaled Down) --- */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute z-30 top-[8%] left-[0%] w-8 sm:w-10 aspect-[4/3] rounded shadow-md overflow-hidden border-2 border-white">
                <Image alt="Canada" className="object-cover" fill sizes="40px" src="/hero/ca.png"/>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute z-30 top-[20%] right-[-5%] w-8 sm:w-10 aspect-[4/3] rounded shadow-md overflow-hidden border-2 border-white">
                <Image alt="UK" className="object-cover" fill sizes="40px" src="/hero/gb.png"/>
              </motion.div>

              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute z-30 bottom-[15%] left-[-5%] w-8 sm:w-10 aspect-[4/3] rounded shadow-md overflow-hidden border-2 border-white">
                <Image alt="USA" className="object-cover" fill sizes="40px" src="/hero/us.png"/>
              </motion.div>

            </div>

            {/* --- BOLD LETTERS (Scaled Down) --- */}
            <div className="relative z-40 flex flex-col items-center justify-center -mt-6 sm:-mt-8 lg:-mt-10 pointer-events-none">
              <div className="flex justify-center items-end gap-1.5 sm:gap-2 lg:gap-3">
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
                  <svg viewBox="0 0 100 140" className="w-12 sm:w-16 lg:w-[85px] h-auto drop-shadow-xl overflow-visible">
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

                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
                  <svg viewBox="0 0 100 140" className="w-12 sm:w-16 lg:w-[85px] h-auto drop-shadow-xl overflow-visible">
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

                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
                  <svg viewBox="0 0 100 140" className="w-12 sm:w-16 lg:w-[85px] h-auto drop-shadow-xl overflow-visible">
                    <defs>
                      <clipPath id="clipL"><text x="50" y="115" fontSize="125" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle">L</text></clipPath>
                      <linearGradient id="franceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0055A4" />
                        <stop offset="33.3%" stopColor="#0055A4" />
                        <stop offset="33.3%" stopColor="#FFFFFF" />
                        <stop offset="66.6%" stopColor="#FFFFFF" />
                        <stop offset="66.6%" stopColor="#EF4135" />
                        <stop offset="100%" stopColor="#EF4135" />
                      </linearGradient>
                    </defs>
                    <g clipPath="url(#clipL)">
                      <rect width="100" height="140" fill="url(#franceGrad)" />
                    </g>
                  </svg>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
                  <svg viewBox="0 0 100 140" className="w-12 sm:w-16 lg:w-[85px] h-auto drop-shadow-xl overflow-visible">
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
              
              <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="mt-2 sm:mt-3">
                <div className="tracking-[0.4em] text-[#0B3B7A] font-black text-sm sm:text-base lg:text-lg bg-white/90 backdrop-blur-md border border-sky-100 rounded-full py-1.5 px-6 mx-auto inline-block shadow-md uppercase">
                  OVERSEAS
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM GRID STATS BLOCK --- */}
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
              <p className="text-gray-500 font-semibold text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}