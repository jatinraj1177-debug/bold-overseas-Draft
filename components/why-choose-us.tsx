"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ShieldCheck, Map, Zap, Users } from "lucide-react"

const features = [
  {
    title: "Visa Success",
    description: "Proven expertise with a 98% track record of securing complex international visas.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Strategic Roadmap",
    description: "Customized, end-to-end plans architected specifically for elite global universities.",
    icon: <Map className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Fast-Track Processing",
    description: "Highly efficient documentation and application handling to beat strict deadlines.",
    icon: <Zap className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Expert Counseling",
    description: "One-on-one personalized guidance from experienced global education mentors.",
    icon: <Users className="w-8 h-8 text-blue-400" />
  }
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 bg-[#0B3B7A] relative overflow-hidden">
      {/* Premium Glass/Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-white/10">
            Why Choose Bold Overseas
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Support for Your Success
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-100/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}