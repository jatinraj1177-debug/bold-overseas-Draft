"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

// FIXED THE FILE PATHS TO MATCH YOUR VS CODE EXACTLY
const teamMembers = [
  {
    src: "/D. Sheshi prem - CEO.jpg",
    name: "D. Sheshi Prem",
    role: "CEO"
  },
  {
    src: "/G.Venkata Sai Ram - CTO.jpg",
    name: "G.Venkata Sai Ram",
    role: "CTO"
  },
  {
    src: "/V. Charish Chowdary - CFO.jpg",
    name: "V. Charish Chowdary",
    role: "CFO"
  }
]

const features = [
  {
    title: "Expert Counsellors",
    description: "Our certified counsellors bring decades of combined experience, providing personalized guidance tailored to your unique academic profile and career aspirations.",
    icon: (
      <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "University Partnerships",
    description: "Direct partnerships with over 300 universities worldwide ensure priority applications, exclusive scholarships, and streamlined admission processes for our students.",
    icon: (
      <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Visa Expertise",
    description: "With a 98% visa approval rate, our documentation specialists and interview coaches prepare you thoroughly for every step of the visa application process.",
    icon: (
      <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Student Success",
    description: "Over 15,000 success stories and counting. Our track record speaks for itself - from application to arrival, we ensure your journey is smooth and successful.",
    icon: (
      <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  }
]

// Custom easing for a premium, heavy slide feel
const customEase = [0.16, 1, 0.3, 1]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  // 5 seconds per slide to allow the cinematic zoom to complete
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-[#0B3B7A] text-xs font-bold tracking-widest uppercase mb-6">
              About Bold Overseas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B3B7A] mb-6 leading-tight">
              Your Trusted Partner In <br className="hidden sm:block" /> Global Education
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              For over ten years, Bold Overseas has engineered clear pathways for students to achieve elite international admissions. Our comprehensive approach fuses industry expertise with tailored advisory, ensuring every applicant receives the precise strategy needed for academic excellence abroad.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT SIDE: CINEMATIC TEAM CAROUSEL --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] sm:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(11,59,122,0.15)] bg-gray-100 group"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                className="absolute inset-0 w-full h-full origin-bottom"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)", zIndex: 10 }}
                exit={{ clipPath: "inset(0 0 100% 0)", zIndex: 0 }}
                transition={{ duration: 0.8, ease: customEase }}
              >
                {/* Cinematic Slow Zoom (Ken Burns Effect) */}
                <motion.img 
                  src={teamMembers[currentIndex].src} 
                  alt={teamMembers[currentIndex].name} 
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                />
                
                {/* Dark Gradient specifically at the bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B7A]/80 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Static Overlay Layer (Sits above the changing images) */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-8 pointer-events-none">
              
              {/* Top Badge */}
              <div className="self-end">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  Leadership
                </div>
              </div>

              {/* Floating Glassmorphism Info Plate */}
              <div className="flex justify-between items-end w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-6 rounded-2xl shadow-2xl max-w-[280px]"
                  >
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5 drop-shadow-md">
                      {teamMembers[currentIndex].name}
                    </h3>
                    <p className="text-[#60A5FA] font-bold tracking-widest uppercase text-xs sm:text-sm drop-shadow-sm">
                      {teamMembers[currentIndex].role}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Animated Progress Bars */}
                <div className="flex gap-2 pb-2 pointer-events-auto">
                  {teamMembers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-white/30"
                      style={{ width: idx === currentIndex ? '32px' : '12px' }}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      {/* The auto-filling progress indicator */}
                      {idx === currentIndex && (
                        <motion.div
                          className="absolute top-0 left-0 bottom-0 bg-[#60A5FA]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: FEATURE CARDS --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 5 }}
                className="flex gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-[#1D4ED8] transition-colors duration-300">
                  <div className="text-[#1D4ED8] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B3B7A] mb-1.5">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}