"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const features = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Expert Counsellors",
    description: "Our certified counsellors bring decades of combined experience, providing personalized guidance tailored to your unique academic profile and career aspirations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12 12 0 01.665 6.479A12 12 0 0112 20.055a12 12 0 01-6.824-2.998 12 12 0 01.665-6.479L12 14z" />
        <path d="M12 14v10" />
      </svg>
    ),
    title: "University Partnerships",
    description: "Direct partnerships with over 300 universities worldwide ensure priority applications, exclusive scholarships, and streamlined admission processes for our students.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Visa Expertise",
    description: "With a 98% visa approval rate, our documentation specialists and interview coaches prepare you thoroughly for every step of the visa application process.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Student Success",
    description: "Over 15,000 success stories and counting. Our track record speaks for itself - from application to arrival, we ensure your journey is smooth and successful.",
  },
]

const achievements = [
  { number: "10+", label: "Years of Excellence" },
  { number: "15000+", label: "Students Placed" },
  { number: "98%", label: "Visa Success Rate" },
  { number: "300+", label: "Partner Universities" },
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="relative py-20 lg:py-24 w-full bg-[#F8FAFC] border-y border-gray-200">
      
      {/* Auto-Sizing Container for PC */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-[#0B3B7A]/10 text-[#0B3B7A] text-sm font-bold tracking-wide mb-4"
          >
            ABOUT BOLD OVERSEAS
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B7A] mb-6 leading-tight">
            Your Trusted Partner In <span className="bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] bg-clip-text text-transparent">Global Education</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            For over ten years, Bold Overseas has engineered clear pathways for students to achieve elite international admissions. Our comprehensive approach fuses industry expertise with tailored advisory, ensuring every applicant receives the precise strategy needed for academic excellence abroad.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative w-full h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-[#0B3B7A]">
              <Image 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&h=1200&fit=crop" 
                alt="Students studying abroad" 
                fill 
                className="object-cover opacity-80 mix-blend-overlay"
              />
              
              {/* Premium Logo Card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 flex flex-col items-center text-center max-w-[320px]"
                >
                  <div className="relative w-48 h-16 mb-4">
                    <Image src="/bold-logo.png" alt="Bold Overseas" fill className="object-contain" />
                  </div>
                  <div className="w-full h-px bg-gray-200 mb-4" />
                  <p className="text-[#0B3B7A] font-semibold text-sm leading-relaxed">
                    Connecting Indian students to world-class universities across 12+ countries.
                  </p>
                </motion.div>
              </div>

              {/* Floating Country Badges */}
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs font-bold shadow-lg">USA</div>
              <div className="absolute bottom-10 right-6 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs font-bold shadow-lg">UK</div>
              <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs font-bold shadow-lg">Germany</div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#0B3B7A]/5 text-[#1D4ED8] flex items-center justify-center group-hover:bg-[#0B3B7A] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B3B7A] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#0B3B7A] mb-2">{item.number}</div>
              <div className="text-gray-600 text-sm font-medium">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}