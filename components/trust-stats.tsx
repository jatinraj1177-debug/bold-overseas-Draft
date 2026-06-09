"use client"

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: 300, suffix: '+', label: 'Universities', icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  )},
  { value: 95, suffix: '%', label: 'Visa Success Rate', icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
  { value: 20000, suffix: '+', label: 'Students Placed', icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )},
  { value: 120, suffix: '+', label: 'Expert Counselors', icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )},
]

function AnimatedCounter({ value, prefix = '', suffix = '', inView }: { value: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const rafRef = useRef<number>()

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      countRef.current = Math.floor(easeOutQuart * value)
      setCount(countRef.current)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [inView, value])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <span className="tabular-nums">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}

export default function TrustStatsStrip() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="relative">
      {/* Curved blue strip */}
      <div className="relative bg-gradient-to-r from-[#0B3B7A] via-[#1D4ED8] to-[#0B3B7A] py-10">
        {/* Top curve */}
        <div className="absolute -top-6 left-0 right-0 h-12 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
            <path d="M0 96L1440 96L1440 32C1200 0 960 32 720 48C480 64 240 32 0 64L0 96Z" fill="url(#curve-gradient-top)" />
            <defs>
              <linearGradient id="curve-gradient-top" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#0B3B7A"/>
                <stop offset="50%" stopColor="#1D4ED8"/>
                <stop offset="100%" stopColor="#0B3B7A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom curve */}
        <div className="absolute -bottom-6 left-0 right-0 h-12 overflow-hidden">
          <svg className="absolute top-0 w-full h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
            <path d="M0 0L1440 0L1440 64C1200 96 960 64 720 48C480 32 240 64 0 32L0 0Z" fill="url(#curve-gradient-bottom)" />
            <defs>
              <linearGradient id="curve-gradient-bottom" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#0B3B7A"/>
                <stop offset="50%" stopColor="#1D4ED8"/>
                <stop offset="100%" stopColor="#0B3B7A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Airplane decoration */}
        <motion.div
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block"
          animate={{ x: [0, 15, 0], y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-20 h-20 text-white/20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                {/* Icon */}
                <div className="flex-shrink-0 text-white/80">
                  {stat.icon}
                </div>

                {/* Content */}
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      inView={inView}
                    />
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
