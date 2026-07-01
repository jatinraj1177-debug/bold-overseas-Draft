"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Only CEO and CTO remain
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
  }
]

const features = [
  {
    title: "Expert Counsellors",
    description: "Our certified counsellors bring decades of combined experience, providing personalized guidance tailored to your unique academic profile and career aspirations.",
    icon: (
      <svg className="w-7 h-7 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "University Partnerships",
    description: "Direct partnerships with over 300 universities worldwide ensure priority applications, exclusive scholarships, and streamlined admission processes for our students.",
    icon: (
      <svg className="w-7 h-7 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Visa Expertise",
    description: "With a 98% visa approval rate, our documentation specialists and interview coaches prepare you thoroughly for every step of the visa application process.",
    icon: (
      <svg className="w-7 h-7 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Student Success",
    description: "Over 15,000 success stories and counting. Our track record speaks for itself - from application to arrival, we ensure your journey is smooth and successful.",
    icon: (
      <svg className="w-7 h-7 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  }
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- TOP TEXT AREA --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
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
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
              For over ten years, Bold Overseas has engineered clear pathways for students to achieve elite international admissions. Our comprehensive approach fuses industry expertise with tailored advisory, ensuring every applicant receives the precise strategy needed for academic excellence abroad.
            </p>
          </motion.div>
        </div>

        {/* --- 2x2 FEATURES GRID --- */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B3B7A] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- STATIC 2-COLUMN TEAM SECTION --- */}
        <div className="border-t border-gray-100 pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B3B7A] mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              The dedicated professionals working tirelessly behind the scenes to secure your global future.
            </p>
          </motion.div>

          {/* Reduced max-width to center the two cards nicely */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                className="bg-white rounded-[2rem] p-8 sm:p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(11,59,122,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* 
                  INCREASED SIZE (w-40/h-40 to w-48/h-48 on desktop)
                  PREMIUM BORDER: Thick white border with a clean drop shadow separates it from the background perfectly
                */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden mb-8 border-[6px] border-white shadow-[0_8px_24px_rgba(11,59,122,0.12)] group-hover:shadow-[0_12px_32px_rgba(29,78,216,0.2)] group-hover:scale-105 transition-all duration-500">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-black text-[#0B3B7A] mb-2 group-hover:text-sky-600 transition-colors duration-300">{member.name}</h3>
                <p className="text-[#1D4ED8] font-bold text-sm sm:text-base uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}