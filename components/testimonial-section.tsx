"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi, India → London, UK",
    university: "Imperial College London",
    program: "MSc Data Science",
    quote: "Bold Overseas made my dream of studying at Imperial College come true! Their visa guidance was exceptional, and the counselors were always available to answer my queries. The entire process was smooth and stress-free.",
    date: "3 months ago",
    badge: "Verified Student"
  },
  {
    name: "Rahul Verma",
    location: "Mumbai, India → Toronto, Canada",
    university: "University of Toronto",
    program: "MBA",
    quote: "The strategic approach and precision at Bold Overseas completely transformed my university admission experience. From university selection to visa approval, they handled everything professionally. Got my study permit in just 3 weeks!",
    date: "2 months ago",
    badge: "Verified Student"
  },
  {
    name: "Ananya Reddy",
    location: "Hyderabad, India → Berlin, Germany",
    university: "TU Munich",
    program: "MS Computer Science",
    quote: "The team at Bold Overseas is incredibly knowledgeable about German universities. They helped me navigate the complex application process and even assisted with finding blocked account services. Highly recommended!",
    date: "1 month ago",
    badge: "Verified Student"
  },
  {
    name: "Soniya Marka",
    location: "Verified Google Review",
    university: "UK University",
    program: "UK Study Visa",
    quote: "I had a great experience with Bold Overseas for my UK study visa process. The team was very supportive, professional, and guided me at every step. Everything was handled smoothly and successfully.",
    date: "3 months ago",
    badge: "Verified Google Review"
  },
  {
    name: "Sugnanam Manichandrika",
    location: "Verified Google Review",
    university: "Global Admissions",
    program: "Application & Visa",
    quote: "I had a great experience with this abroad consultancy. The entire team was very supportive and guided me step by step through the application and visa process. They clarified all my doubts patiently.",
    date: "3 months ago",
    badge: "Verified Google Review"
  },
  {
    name: "Rabbani Shaik",
    location: "Verified Google Review",
    university: "US Application",
    program: "B1 Visa Process",
    quote: "I sincerely thank BoldOverseas for standing with me throughout my visa process. Their motivation, patience, and proper guidance gave me confidence at every stage. Truly grateful for their support.",
    date: "3 weeks ago",
    badge: "Verified Google Review"
  }
]

export default function TestimonialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-white overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0B3B7A]/10 text-[#0B3B7A] text-sm font-bold tracking-wide mb-4">
            STUDENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B3B7A] mb-4 leading-tight">
            What Our Students Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
            >
              {/* Star Rating */}
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 leading-relaxed mb-8 flex-grow text-sm sm:text-base">
                "{testimonial.quote}"
              </blockquote>

              {/* Info (Without Photos) */}
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-[#0B3B7A] text-lg">{testimonial.name}</h4>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    {testimonial.program}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    {testimonial.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}