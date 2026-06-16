"use client"

import React, { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const services = [
  {
    number: "01",
    title: "Global Entry Assist",
    subtitle: "End-To-End Visa & Immigration Strategy",
    description:
      "Comprehensive visa guidance designed to simplify every stage of your international journey. From documentation and interview preparation to final filing, our experts ensure accuracy, confidence, and compliance.",
    details: [
      {
        heading: "Complete Visa Documentation",
        body: "Accurate Documentation Support From Start To Finish. Our experts help you prepare, organize, and verify every required document to ensure your visa application meets embassy standards with maximum accuracy and minimal delays.",
      },
      {
        heading: "Mock Visa Interviews",
        body: "Build Confidence Before Your Real Interview. Attend expert-led mock interview sessions designed to improve your communication, confidence, and response quality for embassy and visa officer interactions.",
      },
      {
        heading: "SOP & Financial Guidance",
        body: "Strong Profiles That Increase Approval Chances. Get professional assistance in creating impactful Statements of Purpose (SOPs), arranging financial documents, and presenting a strong academic and financial profile.",
      },
      {
        heading: "Country-Specific Visa Support",
        body: "Tailored Guidance Based On Your Destination. Receive personalized visa assistance according to the latest immigration policies, documentation requirements, and application processes for your chosen country.",
      },
      {
        heading: "End-to-End Visa Coordination",
        body: "Seamless Support Until Approval. Our experts coordinate every stage of your visa application, ensuring smooth communication, transparency, and peace of mind.",
      },
    ],
    features: [
      "Complete Visa Documentation",
      "Mock Visa Interviews",
      "SOP & Financial Guidance",
      "Country-Specific Visa Support",
      "End-To-End Visa Coordination",
      "Embassy Compliance Review",
    ],
    bestFor: "Students seeking structured expert guidance for international education success.",
    accent: "from-[#0B3B7A] to-[#1d4ed8]",
    bg: "from-slate-900 via-[#0B3B7A] to-slate-800",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Test Preparation Excellence",
    subtitle: "Elite Coaching For Global Admissions",
    description:
      "Personalized coaching programs designed to maximize your exam performance and strengthen your university applications through strategic preparation and expert mentoring.",
    details: [
      {
        heading: "Mock Exams & Practice Tests",
        body: "Full-length simulated exams under real test conditions to build stamina, accuracy, and time management skills before your official exam date.",
      },
      {
        heading: "Performance Analytics",
        body: "In-depth score analysis after every mock test to identify weak areas, track improvement, and customize your study plan for maximum score gains.",
      },
      {
        heading: "Expert Trainers",
        body: "Learn from certified trainers with proven track records in IELTS, TOEFL, GRE, PTE, and language programs who provide personalized mentoring and feedback.",
      },
      {
        heading: "Personalized Study Plans",
        body: "Custom preparation roadmaps built around your current score, target score, and exam date — ensuring focused, efficient, and structured preparation.",
      },
      {
        heading: "Score Improvement Strategy",
        body: "Targeted techniques for each exam section to maximize scores through smart practice, proven methods, and expert guidance tailored to your learning style.",
      },
    ],
    programs: ["IELTS", "TOEFL", "GRE", "PTE", "DET", "German Language", "Japanese Language"],
    features: [
      "Mock Exams",
      "Performance Analytics",
      "Expert Trainers",
      "Personalized Study Plans",
      "Progress Tracking",
      "Score Improvement Strategy",
    ],
    bestFor: "Students aiming for top scores to unlock competitive university admissions worldwide.",
    accent: "from-[#1e40af] to-[#3b82f6]",
    bg: "from-[#1e3a8a] via-[#1e40af] to-[#1d4ed8]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Education Funding Solutions",
    subtitle: "Smart Financial Planning For Global Education",
    description:
      "Secure education funding with confidence through expert loan guidance, documentation support, financial planning, and partnerships with leading financial institutions.",
    details: [
      {
        heading: "Education Loan Assistance",
        body: "End-to-end support in identifying, applying for, and securing education loans from top banks and financial institutions with the best interest rates and repayment terms.",
      },
      {
        heading: "Financial Profile Review",
        body: "Thorough review of your financial profile to identify strengths, address weaknesses, and present a credible financial picture to both lenders and embassies.",
      },
      {
        heading: "Bank Documentation Support",
        body: "Expert guidance in preparing and organizing all bank-related documents required for loan applications and visa financial requirements.",
      },
      {
        heading: "Loan Eligibility Assessment",
        body: "Detailed evaluation of your loan eligibility based on your academic profile, co-applicant strength, and chosen university to maximize approval chances.",
      },
      {
        heading: "Partner Bank Coordination",
        body: "Direct coordination with our banking partners to expedite your loan processing, ensure faster approvals, and secure competitive terms for your education funding.",
      },
    ],
    features: [
      "Education Loan Assistance",
      "Financial Profile Review",
      "Bank Documentation Support",
      "Loan Eligibility Assessment",
      "Partner Bank Coordination",
      "Funding Strategy Planning",
    ],
    bestFor: "Students who need financial clarity and loan support before beginning their international journey.",
    accent: "from-[#065f46] to-[#10b981]",
    bg: "from-[#064e3b] via-[#065f46] to-[#047857]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Global Management Pathways",
    subtitle: "Develop Skills Global Employers Demand",
    description:
      "Explore world-class management programs that prepare students for leadership roles through industry-relevant learning, strategic thinking, and international exposure.",
    details: [
      {
        heading: "Career Mapping",
        body: "Strategic career planning sessions to align your management program selection with your long-term professional goals, industry targets, and salary expectations.",
      },
      {
        heading: "University Matching",
        body: "Expert shortlisting of management universities based on your academic profile, budget, preferred country, and career aspirations to maximize your chances of admission.",
      },
      {
        heading: "Admissions Guidance",
        body: "Complete admissions support including application preparation, essay writing, interview coaching, and document verification for top management programs globally.",
      },
      {
        heading: "Leadership Development",
        body: "Guidance in selecting programs that include real-world leadership training, industry projects, and international exposure to build globally competitive management skills.",
      },
      {
        heading: "Global Networking Opportunities",
        body: "Advice on leveraging alumni networks, industry partnerships, and international student communities to build connections that accelerate your management career.",
      },
    ],
    programs: ["Business Management", "Finance", "Marketing", "Hospitality", "Fashion Management"],
    features: [
      "Career Mapping",
      "University Matching",
      "Admissions Guidance",
      "Leadership Development",
      "Global Networking Opportunities",
      "Business Strategy Learning",
    ],
    bestFor: "Aspiring business leaders and management professionals seeking global exposure.",
    accent: "from-[#7c3aed] to-[#a78bfa]",
    bg: "from-[#4c1d95] via-[#6d28d9] to-[#7c3aed]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "STEM Future Programs",
    subtitle: "Technology Degrees For Future Innovators",
    description:
      "Future-focused technology and engineering programs that equip students with industry-ready skills in emerging global sectors and high-demand careers.",
    details: [
      {
        heading: "University Selection & Matching",
        body: "Expert shortlisting of top STEM universities globally based on your specialization, research interests, career goals, and budget for maximum admission success.",
      },
      {
        heading: "Research & Industry Opportunities",
        body: "Guidance on identifying programs with strong research facilities, industry partnerships, internship pipelines, and co-op opportunities to accelerate your STEM career.",
      },
      {
        heading: "Industry Certifications",
        body: "Advice on complementary certifications alongside your degree in areas like cloud computing, AI, cybersecurity, and data science to strengthen your employability.",
      },
      {
        heading: "Global Career Placement",
        body: "Support in understanding the global tech job market, work visa pathways post-graduation, and high-demand STEM career opportunities in your chosen country.",
      },
      {
        heading: "Tech-Focused Admissions Support",
        body: "Complete application support for STEM programs including technical statement of purpose writing, portfolio guidance, and interview preparation for competitive universities.",
      },
    ],
    programs: ["Computer Science", "Engineering", "Artificial Intelligence", "Cyber Security", "Data Science"],
    features: [
      "University Selection & Matching",
      "Research & Industry Opportunities",
      "Industry Certifications",
      "Global Career Placement",
      "Tech-Focused Admissions Support",
      "Post-Study Work Visa Guidance",
    ],
    bestFor: "Tech-driven students aiming to break into the world's fastest-growing industries.",
    accent: "from-[#b45309] to-[#f59e0b]",
    bg: "from-[#78350f] via-[#92400e] to-[#b45309]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
]

const successPath = [
  {
    step: "01",
    title: "Career & Country Mapping",
    description:
      "We start by understanding your ambitions, academic profile, budget, and long-term goals to identify the right country and visa pathway for your unique situation.",
    items: ["University Shortlisting", "Eligibility Analysis", "Country Comparison", "Visa Success Probability"],
    tagline: "Not every destination fits every student.",
    country: "India → World",
    emoji: "🗺️",
  },
  {
    step: "02",
    title: "Application & Document Engineering",
    description:
      "Our experts organize and optimize every document required for a strong application — professionally structured, embassy-ready, and error-free.",
    items: ["SOP & LOR Guidance", "Financial File Preparation", "Academic Verification", "Application Accuracy Checks"],
    tagline: "Strong applications create strong first impressions.",
    country: "India → University",
    emoji: "📄",
  },
  {
    step: "03",
    title: "Financial Confidence Review",
    description:
      "We analyze your financial profile carefully to ensure it aligns with embassy expectations and reduces the risk of objections or delays.",
    items: ["Bank Statement Review", "Sponsor Verification", "Fund Consistency Checks", "Visa Compliance Validation"],
    tagline: "Every number tells a story to the embassy.",
    country: "Profile → Embassy",
    emoji: "💰",
  },
  {
    step: "04",
    title: "Interview Confidence Training",
    description:
      "We conduct realistic mock interview sessions that help you answer confidently, naturally, and professionally during visa interviews.",
    items: ["Real Embassy Questions", "Confidence Building", "Communication Guidance", "Rejection-Risk Preparation"],
    tagline: "Confidence changes outcomes.",
    country: "Student → Embassy",
    emoji: "🎯",
  },
  {
    step: "05",
    title: "Medicals & Appointment Coordination",
    description:
      "From biometrics to health examinations, we help schedule and manage every mandatory appointment based on your destination requirements.",
    items: ["Medical Guidance", "Biometrics Assistance", "Appointment Booking", "Pre-Departure Instructions"],
    tagline: "Every checkpoint completed smoothly.",
    country: "Clinic → Consulate",
    emoji: "🏥",
  },
  {
    step: "06",
    title: "Visa Filing & Live Tracking",
    description:
      "Once submitted, we continuously monitor your application, keep you informed, and provide support until your approval arrives.",
    items: ["Application Submission", "Status Notifications", "Emergency Support", "Final Visa Guidance"],
    tagline: "From application to approval — we stay with you.",
    country: "Application → Approval",
    emoji: "✈️",
  },
]

const faqs = [
  {
    question: "How long does the visa process typically take?",
    answer:
      "The visa processing time varies by country, typically ranging from 2-12 weeks. Our team ensures all documentation is prepared well in advance to avoid delays.",
  },
  {
    question: "Do you provide support for education loans?",
    answer:
      "Yes, we have partnerships with leading banks and financial institutions. We guide you through the entire loan application process and help you secure the best rates.",
  },
  {
    question: "What test preparation programs do you offer?",
    answer:
      "We offer comprehensive preparation for IELTS, TOEFL, GRE, PTE, DET, and language courses including German and Japanese with expert trainers and mock tests.",
  },
  {
    question: "Can you help with university selection?",
    answer:
      "Absolutely. Our counselors analyze your profile, career goals, and budget to shortlist universities that best match your aspirations across 100+ partner institutions.",
  },
  {
    question: "What is your visa success rate?",
    answer:
      "We maintain a 98% visa approval rate through meticulous documentation, thorough preparation, and personalized guidance for each student.",
  },
  {
    question: "Do you help students with accommodation and pre-departure support?",
    answer:
      "Yes. We assist students with accommodation guidance, travel planning, pre-departure preparation, and settlement support to help them transition smoothly into their destination country.",
  },
]

// ─────────────────────────────────────────────
// SERVICE CARD — Dark premium design
// ─────────────────────────────────────────────

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col"
    >
      {/* Card */}
      <div className={`relative flex flex-col h-full rounded-3xl overflow-hidden bg-gradient-to-br ${service.bg} text-white shadow-2xl`}>
        {/* Glossy top shine */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.07] to-transparent pointer-events-none" />

        {/* Number watermark */}
        <div className="absolute top-4 right-4 text-7xl font-black text-white/10 select-none leading-none">
          {service.number}
        </div>

        <div className="relative p-8 flex flex-col flex-1">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
          <p className="text-white/70 font-medium text-sm mb-4">{service.subtitle}</p>

          {/* Description */}
          <p className="text-white/80 text-sm leading-relaxed mb-6">{service.description}</p>

          {/* Programs pills */}
          {(service.programs || []).length > 0 && (
            <div className="mb-5">
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Programs</p>
              <div className="flex flex-wrap gap-2">
                {(service.programs || []).map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="space-y-2 mb-6">
            {(service.features || []).slice(0, 4).map((f) => (
              <div key={f} className="flex items-center gap-2 text-white/80">
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>

          {/* Best For */}
          <div className="mt-auto mb-5 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
            <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Best For</p>
            <p className="text-white/85 text-sm">{service.bestFor}</p>
          </div>

          {/* Expand button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all"
          >
            {expanded ? "Show Less" : "View Detailed Breakdown"}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Expanded details */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-5 border-t border-white/15 pt-6">
              {(service.details || []).map((d) => (
                <div key={d.heading}>
                  <p className="text-white font-semibold text-sm mb-1">{d.heading}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// SNAKE TIMELINE STEP
// ─────────────────────────────────────────────

function SnakeStep({ step, index, total }: { step: (typeof successPath)[0]; index: number; total: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const isLeft = index % 2 === 0
  const isLast = index === total - 1
// Plane animation for connector
  const planeVariants = {
    hidden: { x: isLeft ? -30 : 30, y: 0, opacity: 0 },
    visible: {
      x: 0,
      y: [0, -8, 0, -5, 0],
      opacity: 1,
      transition: {
        opacity: { duration: 0.3 },
        x: { duration: 0.6, ease: "easeOut" as const },
        y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.6 },
      },
    },
  }

  return (
    <div ref={ref} className="relative">
      {/* Row */}
      <div className={`flex items-center gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>

        {/* ── Content Card (60%) ── */}
        <div className="w-[60%]">
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className={`${isLeft ? "mr-6" : "ml-6"}`}
          >
            <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              {/* Colored top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0B3B7A] via-[#2563EB] to-[#60A5FA]" />

              <div className="p-6 lg:p-8">
                {/* Step badge + country tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 bg-[#0B3B7A]/8 text-[#0B3B7A] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block" />
                    Step {step.step}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{step.country}</span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-[#0B3B7A] mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{step.description}</p>

                {/* Micro items */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {(step.items || []).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tagline */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-[#2563EB] font-semibold italic text-sm">&ldquo;{step.tagline}&rdquo;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Center Node (circle + step number) ── */}
        <div className="relative flex flex-col items-center flex-shrink-0 z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25, type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* Outer ring */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0B3B7A] to-[#2563EB] flex items-center justify-center shadow-xl shadow-blue-500/30">
              {/* Inner circle */}
              <div className="w-14 h-14 rounded-full bg-white/15 flex flex-col items-center justify-center border border-white/30">
                <span className="text-lg">{step.emoji}</span>
                <span className="text-white font-black text-xs leading-none">{step.step}</span>
              </div>
            </div>
            {/* Pulse ring */}
            {inView && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#2563EB]/40"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            )}
          </motion.div>
        </div>

        {/* ── Empty right side (40%) ── */}
        <div className="w-[40%]" />
      </div>

      {/* ── Snake Connector (between steps) ── */}
      {!isLast && (
        <div className={`relative flex ${isLeft ? "justify-end pr-[calc(40%+10px)]" : "justify-start pl-[calc(40%+10px)]"} my-0 h-24`}>
          {/* SVG curved path */}
          <svg
            className="absolute"
            style={{
              left: isLeft ? "auto" : "calc(40% + 40px)",
              right: isLeft ? "calc(40% + 40px)" : "auto",
              top: 0,
              width: 120,
              height: 96,
              overflow: "visible",
            }}
            viewBox="0 0 120 96"
            fill="none"
          >
            <motion.path
              d={isLeft
                ? "M 60 0 C 60 30, 20 30, 20 48 C 20 66, 60 66, 60 96"
                : "M 60 0 C 60 30, 100 30, 100 48 C 100 66, 60 66, 60 96"}
              stroke="url(#snakeGrad)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="snakeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#0B3B7A" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated plane on connector */}
          <motion.div
            variants={planeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute z-20"
            style={{
              left: isLeft ? "auto" : "calc(40% + 40px)",
              right: isLeft ? "calc(40% + 40px)" : "auto",
              top: "38px",
            }}
          >
            <div className="relative">
              {/* 3D shadow effect */}
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-black/20 rounded-full blur-sm"
                style={{ transform: "translateX(-50%) scaleX(0.8)" }}
              />
              <div className="text-2xl drop-shadow-lg"
                style={{
                  filter: "drop-shadow(2px 3px 4px rgba(0,0,0,0.35)) drop-shadow(0 0 8px rgba(37,99,235,0.4))",
                  transform: isLeft ? "scaleX(1)" : "scaleX(-1)",
                }}>
                ✈️
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base lg:text-lg font-semibold text-[#0B3B7A] group-hover:text-[#2563EB] transition-colors pr-8">
          {faq.question}
        </span>
        <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B3B7A]/8 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5 text-[#0B3B7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Services Section (no hero block above it) ── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#0B3B7A]/8 text-[#0B3B7A] text-sm font-semibold rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B7A] mb-6">
              Services Designed Around Your Global Journey
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Every student has a different destination, ambition, and pathway. Our services are structured to provide
              complete support from planning and admissions to visas, funding, and career-focused education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services || []).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Snake Success Path ── */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#0B3B7A]/8 text-[#0B3B7A] text-sm font-semibold rounded-full mb-4">
              The Bold Overseas Success Path
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B7A] mb-6">
              Your Dream Deserves More Than Just Paperwork
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From your first counselling session to the moment your visa gets approved, we guide every step with strategy, precision, and personal attention.
              <span className="block mt-2 text-[#0B3B7A] font-semibold">
                No confusion. No missed documents. No last-minute stress.
              </span>
            </p>
          </motion.div>

          {/* Snake steps — desktop only snake, mobile stack */}
          <div className="max-w-4xl mx-auto hidden lg:block">
            {(successPath || []).map((step, index) => (
              <SnakeStep key={step.step} step={step} index={index} total={successPath.length} />
            ))}
          </div>

          {/* Mobile: simple stacked cards */}
          <div className="lg:hidden space-y-6">
            {(successPath || []).map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-[#0B3B7A] via-[#2563EB] to-[#60A5FA]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B3B7A] to-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <span className="text-lg">{step.emoji}</span>
                    <span className="text-xs text-slate-400">{step.country}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B3B7A] mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  <div className="grid grid-cols-2 gap-1.5 mb-4">
                    {(step.items || []).map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-slate-600">
                        <svg className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#2563EB] font-semibold italic text-sm">&ldquo;{step.tagline}&rdquo;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid CTA ── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0B3B7A] to-[#1e3a5f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready To Turn Your Global Ambition Into Reality?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-[#0B3B7A] font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                >
                  Connect With Our Experts
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/60 transition-colors"
              >
                Start Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#0B3B7A]/8 text-[#0B3B7A] text-sm font-semibold rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B7A]">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
            {(faqs || []).map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B3B7A] mb-6">
              Take The First Step Towards Your Dream
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of students who trusted Bold Overseas to guide their international education journey from application to approval.
            </p>
            <Link href="/book-consultation">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-to-r from-[#0B3B7A] to-[#2563EB] text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl transition-shadow flex items-center justify-center gap-2 mx-auto"
              >
                Connect With Our Experts
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}