"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"

interface CountryData {
  name: string
  code: string
  flag: string
  image: string
  overview: string
  courses: string[]
  scholarships: string[]
  workRights: string
  intakes: string[]
  careerOpportunities: string[]
  visaSupport: string
  advantages: string[]
  coordinates: { x: number; y: number }
}

const countries: CountryData[] = [
  {
    name: "United States",
    code: "USA",
    flag: "https://flagcdn.com/w80/us.png",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=500&fit=crop",
    overview: "Home to world-renowned universities and cutting-edge research facilities. The USA offers diverse academic programs, vibrant campus life, and unparalleled career opportunities.",
    advantages: [
      "Access to 4,000+ world-class universities & Ivy League schools.",
      "Up to 36 months OPT (Post-Study Work) for STEM graduates.",
      "Flexible curriculum allowing you to easily change majors.",
      "Global hub for Tech, Finance, and Business networking."
    ],
    courses: ["Computer Science", "Business Administration", "Engineering", "Medicine", "Data Science"],
    scholarships: ["Fulbright Program", "Hubert Humphrey Fellowship", "University Merit Awards"],
    workRights: "OPT allows 12-36 months of work after graduation. CPT available during studies.",
    intakes: ["Fall (August)", "Spring (January)", "Summer (May)"],
    careerOpportunities: ["Silicon Valley Tech Jobs", "Wall Street Finance", "Healthcare", "Research"],
    visaSupport: "F-1 Student Visa assistance, I-20 document preparation, SEVIS fee guidance, and visa interview preparation.",
    coordinates: { x: 19, y: 31 },
  },
  {
    name: "United Kingdom",
    code: "UK",
    flag: "https://flagcdn.com/w80/gb.png",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
    overview: "Rich academic heritage with prestigious institutions dating back centuries. The UK offers globally recognized degrees and strong industry connections.",
    advantages: [
      "Shorter master's programs (1 year) save significant time & money.",
      "2-year Graduate Route visa for robust post-study work opportunities.",
      "Home to prestigious, centuries-old global academic institutions.",
      "Access to subsidized healthcare through the NHS surcharge."
    ],
    courses: ["Business & Management", "Law", "Medicine", "Engineering", "Arts & Humanities"],
    scholarships: ["Chevening Scholarships", "Commonwealth Scholarships", "GREAT Scholarships"],
    workRights: "Graduate Route visa allows 2-3 years post-study work rights.",
    intakes: ["September (Main)", "January", "May", "August", "November"],
    careerOpportunities: ["Finance & Banking", "Healthcare NHS", "Tech Industry", "Creative Industries"],
    visaSupport: "Student Visa (Tier 4) application support, CAS letter assistance, financial documentation guidance.",
    coordinates: { x: 46, y: 26.5 },
  },
  {
    name: "Canada",
    code: "Canada",
    flag: "https://flagcdn.com/w80/ca.png",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=500&fit=crop",
    overview: "Known for its welcoming immigration policies and high quality of life. Canada offers clear pathways to permanent residency.",
    advantages: [
      "One of the clearest and most accessible pathways to Permanent Residency (PR).",
      "Post-Graduation Work Permit (PGWP) granted for up to 3 years.",
      "Highly affordable tuition compared to the USA or UK.",
      "Consistently ranked #1 globally for overall quality of life and safety."
    ],
    courses: ["Engineering", "Information Technology", "Healthcare", "Business", "Environmental Sciences"],
    scholarships: ["Vanier Canada Graduate Scholarships", "Ontario Trillium Scholarship", "University Awards"],
    workRights: "PGWP offers up to 3 years of work permit. Easy PR pathways through Express Entry.",
    intakes: ["September (Main)", "January", "May"],
    careerOpportunities: ["Tech Sector", "Healthcare", "Natural Resources", "Finance"],
    visaSupport: "Study Permit application guidance, Provincial Attestation Letter (PAL) assistance, biometrics scheduling.",
    coordinates: { x: 20, y: 23 },
  },
  {
    name: "Australia",
    code: "Australia",
    flag: "https://flagcdn.com/w80/au.png",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=500&fit=crop",
    overview: "World-class education in a stunning natural environment. Australia offers innovative teaching methods and strong research focus.",
    advantages: [
      "Extensive post-study work rights spanning 2 to 4 years.",
      "High minimum wage for part-time student jobs while studying.",
      "Incredible climate, beaches, and a vibrant outdoor lifestyle.",
      "Spouses can accompany students and work full-time (for Masters programs)."
    ],
    courses: ["Engineering", "Healthcare", "Business", "IT & Computing", "Environmental Science"],
    scholarships: ["Australia Awards", "Destination Australia", "Research Training Program"],
    workRights: "Post-study work visa for 2-4 years depending on qualification level.",
    intakes: ["February (Main)", "July"],
    careerOpportunities: ["Mining & Resources", "Healthcare", "Technology", "Finance & Banking"],
    visaSupport: "Subclass 500 Student Visa support, GTE statement preparation, health insurance (OSHC) guidance.",
    coordinates: { x: 83, y: 53 },
  },
  {
    name: "Ireland",
    code: "Ireland",
    flag: "https://flagcdn.com/w80/ie.png",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&h=500&fit=crop",
    overview: "English-speaking European destination with a thriving tech sector. Ireland offers quality education and access to global tech headquarters.",
    advantages: [
      "2-year Stay Back option for Masters graduates to seek employment.",
      "European headquarters for global tech giants like Google and Meta.",
      "The only native English-speaking country in the Eurozone.",
      "Fast-growing, resilient economy with extremely high graduate employability."
    ],
    courses: ["Technology", "Business", "Pharmaceutical Sciences", "Engineering", "Arts"],
    scholarships: ["Government of Ireland Scholarships", "University Scholarships"],
    workRights: "Stay Back option allows 2 years post-study work for Masters graduates.",
    intakes: ["September", "January"],
    careerOpportunities: ["Tech Giants HQs", "Pharmaceutical Industry", "Financial Services", "Research"],
    visaSupport: "Stamp 2 Student Visa assistance, IRP registration guidance, and pathway to Stamp 1G work visa.",
    coordinates: { x: 43.5, y: 25.5 },
  },
  {
    name: "France",
    code: "France",
    flag: "https://flagcdn.com/w80/fr.png",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop",
    overview: "Rich cultural heritage meets modern innovation. France offers affordable education and a strategic location in the heart of Europe.",
    advantages: [
      "Highly subsidized, affordable tuition fees at prestigious public universities.",
      "APS visa allows a generous job search period after graduation.",
      "Rich cultural heritage and a strategic location in the heart of the EU.",
      "Home to elite Grande Écoles specialized in business and engineering."
    ],
    courses: ["Business", "Fashion & Design", "Engineering", "Culinary Arts", "Arts & Culture"],
    scholarships: ["Eiffel Excellence Scholarship", "Campus France Grants", "Erasmus+"],
    workRights: "APS visa allows job search after graduation. Work permit for qualified employment.",
    intakes: ["September", "January"],
    careerOpportunities: ["Luxury Brands", "Aerospace", "Fashion Industry", "Tourism & Hospitality"],
    visaSupport: "VLS-TS Student Visa guidance, Campus France application support, and OFII registration assistance.",
    coordinates: { x: 47.5, y: 31.5 },
  },
  {
    name: "Cyprus",
    code: "Cyprus",
    flag: "https://flagcdn.com/w80/cy.png",
    image: "https://images.unsplash.com/photo-1619025000734-0722968f4310?w=800&h=500&fit=crop",
    overview: "Mediterranean island with a growing education sector. Cyprus offers a strong focus on premier business and management degrees.",
    advantages: [
      "Highly affordable tuition rates and remarkably low cost of living.",
      "Beautiful Mediterranean climate in one of Europe's safest environments.",
      "No IELTS score required for admission into many top-tier programs.",
      "A strategic geographical gateway connecting European and Middle Eastern markets."
    ],
    courses: ["Business Administration (BBA)", "International Business (BSBA)", "Finance", "Marketing", "Economics", "Management"],
    scholarships: ["Merit-based Scholarships", "Need-based Financial Aid", "Sports Scholarships"],
    workRights: "Part-time work during studies. Post-study work opportunities available.",
    intakes: ["September", "February"],
    careerOpportunities: ["Tourism & Hospitality", "Shipping Industry", "Financial Services", "International Business"],
    visaSupport: "Student Visa application support, ARC card registration, and work permit guidance.",
    coordinates: { x: 55.5, y: 38 },
  },
  {
    name: "Germany",
    code: "Germany",
    flag: "https://flagcdn.com/w80/de.png",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop",
    overview: "Engineering powerhouse with tuition-free public universities. Germany offers world-class technical education and strong industry connections.",
    advantages: [
      "Zero or incredibly low tuition fees across top-tier public universities.",
      "Generous 18-month job seeker visa available immediately after graduation.",
      "Global economic powerhouse driving innovation in engineering and tech.",
      "Strong integration with local industries for paid internships and placements."
    ],
    courses: ["Engineering", "Automotive", "Sciences", "Medicine", "Business"],
    scholarships: ["DAAD Scholarships", "Deutschlandstipendium", "Erasmus+"],
    workRights: "18-month job seeker visa. Blue Card for skilled workers.",
    intakes: ["October (Winter)", "April (Summer)"],
    careerOpportunities: ["Automotive Industry", "Engineering", "IT & Software", "Research"],
    visaSupport: "National Visa (D) application support, blocked account setup, health insurance guidance.",
    coordinates: { x: 50.2, y: 29.5 },
  },
  {
    name: "Slovakia",
    code: "Slovakia",
    flag: "https://flagcdn.com/w80/sk.png",
    image: "https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=800&h=500&fit=crop",
    overview: "Central European gem offering highly affordable and EU-recognized degrees with a strong focus on business and administration.",
    advantages: [
      "Highly affordable European degrees that are fully recognized globally.",
      "Significantly lower cost of living compared to Western European nations.",
      "Strategic geographic location right in the heart of central Europe.",
      "Rapidly growing business and corporate administration sectors."
    ],
    courses: ["Business Administration (BBA)", "International Business (BSBA)", "Finance", "Marketing", "Economics", "Management"],
    scholarships: ["Government Scholarships", "University Grants", "EU Funding Programs"],
    workRights: "Work rights during studies. Residence permit for employment after graduation.",
    intakes: ["September", "February"],
    careerOpportunities: ["Corporate Management", "Financial Services", "International Trade", "Administration"],
    visaSupport: "D-Type Visa application guidance, accommodation letter support, and residence permit processing.",
    coordinates: { x: 52.2, y: 31.4 },
  },
  {
    name: "Russia",
    code: "Russia",
    flag: "https://flagcdn.com/w80/ru.png",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&h=500&fit=crop",
    overview: "A premier destination for medical sciences, offering incredibly deep clinical training and globally recognized MBBS degrees.",
    advantages: [
      "World-renowned academic programs specifically in medical sciences.",
      "Highly affordable tuition structures and low everyday living expenses.",
      "Immersive, rich cultural and historical experience for international students.",
      "Streamlined admission process with no entrance exams required for many universities."
    ],
    courses: ["Medicine (MBBS)", "Dentistry", "Nursing", "Pharmacy", "Public Health"],
    scholarships: ["Russian Government Scholarships", "University Grants", "Bilateral Agreements"],
    workRights: "Work permit available. Opportunities in various sectors.",
    intakes: ["September", "February"],
    careerOpportunities: ["Global Healthcare", "Medical Research", "Hospital Administration", "Pharmaceuticals"],
    visaSupport: "Student Visa invitation letter, registration support, and document legalization guidance.",
    coordinates: { x: 68, y: 23 },
  },
  {
    name: "Georgia",
    code: "Georgia",
    flag: "https://flagcdn.com/w80/ge.png",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=500&fit=crop",
    overview: "Emerging medical study destination with highly affordable, English-taught MBBS programs and visa-free entry rules.",
    advantages: [
      "Highly affordable, NMC/WHO recognized MBBS programs taught in English.",
      "Incredibly convenient visa-free entry rules for many international students.",
      "Extremely safe, welcoming cultural environment with very low living costs.",
      "Globally recognized degrees that allow you to practice medicine worldwide."
    ],
    courses: ["Medicine (MBBS)", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
    scholarships: ["Government Programs", "University Scholarships", "Partner Institution Grants"],
    workRights: "Easy visa process. Work opportunities available after graduation.",
    intakes: ["September", "February"],
    careerOpportunities: ["Healthcare", "Clinical Practice", "Medical Research"],
    visaSupport: "Visa-free entry for Indian students (up to 1 year), residence permit guidance, and MBBS licensing support.",
    coordinates: { x: 58.6, y: 34.5 },
  },
  {
    name: "Kyrgyzstan",
    code: "Kyrgyzstan",
    flag: "https://flagcdn.com/w80/kg.png",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&h=500&fit=crop",
    overview: "An incredibly cost-effective MBBS destination with WHO and NMC recognized programs offering extensive clinical training.",
    advantages: [
      "One of the most cost-effective global destinations to pursue an MBBS degree.",
      "Direct university admission without navigating complex entrance exams.",
      "Extensive clinical training opportunities in modern, affiliated hospitals.",
      "A remarkably simple, fast, and hassle-free student visa process."
    ],
    courses: ["Medicine (MBBS)", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
    scholarships: ["Government Scholarships", "University Financial Aid", "Merit-based Grants"],
    workRights: "Simple visa process. Clinical training opportunities.",
    intakes: ["September", "March"],
    careerOpportunities: ["Healthcare Globally", "Medical Research", "Hospital Management"],
    visaSupport: "Student Visa on arrival, invitation letter processing, and NMC eligibility letter support.",
    coordinates: { x: 67.5, y: 36.5 },
  },
]

// Fixed India coordinates
const indiaCoords = { x: 70.5, y: 26.5 }

const mapMarkerCoordinates: Record<string, { x: number; y: number }> = {
  USA: { x: 23.5, y: 24.1 },
  Canada: { x: 22.5, y: 15.3 },
  Australia: { x: 82.2, y: 40.8 },
  UK: { x: 46.8, y: 19.3 },
  Ireland: { x: 45.5, y: 20.1 },
  France: { x: 48.1, y: 22.6 },
  Cyprus: { x: 55.6, y: 27.3 },
  Germany: { x: 50.1, y: 20.8 },
  Slovakia: { x: 51.7, y: 22.5 },
  Russia: { x: 65.5, y: 16.1 },
  Georgia: { x: 57.3, y: 25.4 },
  Kyrgyzstan: { x: 65.6, y: 27.2 },
}

const getMapCoordinates = (country: CountryData) => mapMarkerCoordinates[country.code] ?? country.coordinates

const getFlightPath = (destination: CountryData["coordinates"]) => {
  const midX = (indiaCoords.x + destination.x) / 2
  const westbound = destination.x < indiaCoords.x
  const arcLift = westbound ? 13 : 9
  const controlY = Math.max(5, Math.min(indiaCoords.y, destination.y) - arcLift)

  return `M${indiaCoords.x},${indiaCoords.y} Q${midX},${controlY} ${destination.x},${destination.y}`
}

function ImageWithFallback({ src, alt, className, fill, ...props }: { src: string; alt: string; className?: string; fill?: boolean; [key: string]: unknown }) {
  const [error, setError] = useState(false)
  
  if (error) {
    return (
      <div className={`bg-gradient-to-br from-[#0B3B7A]/20 to-[#1D4ED8]/20 flex items-center justify-center ${className}`}>
        <svg className="w-12 h-12 text-[#0B3B7A]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )
  }
  
  if (fill) {
    return <Image src={src} alt={alt} fill className={className} onError={() => setError(true)} {...props} />
  }
  
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} {...props} />
}

export default function StudyDestinations() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(countries[0])
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const selectedMapCoordinates = getMapCoordinates(selectedCountry)
  const hoveredMapCoordinates = hoveredCountry ? getMapCoordinates(hoveredCountry) : null
  const selectedFlightPath = getFlightPath(selectedMapCoordinates)

  const handleCountrySelect = (country: CountryData) => {
    if (country.code !== selectedCountry.code) {
      setSelectedCountry(country)
    }
  }

  return (
    <section id="destinations" ref={ref} className="relative py-20 lg:py-24 bg-white overflow-hidden w-full border-t border-gray-100">
      
      <div className="relative max-w-[1400px] mx-auto w-full px-6 lg:px-12">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0B3B7A]/10 to-[#1D4ED8]/10 text-[#0B3B7A] text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
            Interactive Destination Explorer
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B7A] mb-6 leading-tight">
            Your Gateway to{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#0B3B7A] via-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent">
                World-Class Education
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] rounded-full"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Click on any country to explore programs, scholarships, and career opportunities.
            <br className="hidden sm:block" />
            Your journey from India to the world starts here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#F8FAFC] shadow-xl">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <div className="relative">
                  <svg viewBox="0 0 100 56" className="w-full h-auto" role="img" aria-label="Bold Overseas study destination map">
                    <defs>
                      <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="45%" stopColor="#eff6ff" />
                        <stop offset="100%" stopColor="#dbeafe" />
                      </linearGradient>
                      <radialGradient id="mapVignette" cx="50%" cy="45%" r="65%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                        <stop offset="100%" stopColor="#0B3B7A" stopOpacity="0.08" />
                      </radialGradient>
                      <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF9933" stopOpacity="0.95" />
                        <stop offset="48%" stopColor="#1D4ED8" stopOpacity="1" />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.95" />
                      </linearGradient>
                      <linearGradient id="indiaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF9933" />
                        <stop offset="48%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#138808" />
                      </linearGradient>
                      <filter id="routeGlow">
                        <feGaussianBlur stdDeviation="1.4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="destinationGlow">
                        <feGaussianBlur stdDeviation="1.35" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="pinShadow">
                        <feDropShadow dx="0" dy="0.7" stdDeviation="0.8" floodColor="#0B3B7A" floodOpacity="0.3" />
                      </filter>
                    </defs>

                    <rect width="100" height="56" rx="3.6" fill="url(#oceanGradient)" />
                    <rect width="100" height="56" rx="3.6" fill="url(#mapVignette)" />

                    <g stroke="#0B3B7A" strokeWidth="0.06" opacity="0.12" pointerEvents="none">
                      {[10, 20, 30, 40, 50].map((y) => (
                        <line key={`lat-${y}`} x1="4" y1={y} x2="96" y2={y} />
                      ))}
                      {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((x) => (
                        <line key={`lng-${x}`} x1={x} y1="4" x2={x} y2="52" />
                      ))}
                    </g>

                    <image
                      href="https://upload.wikimedia.org/wikipedia/commons/a/a6/Very_Simplified_World_Map_SVG.svg"
                      x="1.2"
                      y="3.2"
                      width="97.6"
                      height="49.5"
                      preserveAspectRatio="xMidYMid meet"
                      opacity="0.45"
                      pointerEvents="none"
                    />

                    {/* Permanent Selected Route */}
                    <path
                      d={selectedFlightPath}
                      fill="none"
                      stroke="#1D4ED8"
                      strokeWidth="0.28"
                      strokeDasharray="1.5,1.8"
                      strokeLinecap="round"
                      opacity="0.38"
                    />

                    <AnimatePresence>
                      <motion.path
                        key={`flight-glow-${selectedCountry.code}`}
                        d={selectedFlightPath}
                        fill="none"
                        stroke="url(#flightGradient)"
                        strokeWidth="1.45"
                        strokeLinecap="round"
                        opacity="0.18"
                        filter="url(#routeGlow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.path
                        key={`flight-line-${selectedCountry.code}`}
                        d={selectedFlightPath}
                        fill="none"
                        stroke="url(#flightGradient)"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.g
                        key={`plane-${selectedCountry.code}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          offsetDistance: ["0%", "100%"],
                          scale: [0.6, 0.8, 0.8, 0.7],
                        }}
                        transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          offsetPath: `path("${selectedFlightPath}")`,
                          offsetRotate: "auto",
                        }}
                      >
                        <path
                          d="M-1.35,-0.72 L2.1,0 L-1.35,0.72 L-0.62,0 L-1.35,-0.72 Z"
                          fill="#ffffff"
                          stroke="#0B3B7A"
                          strokeWidth="0.3"
                          filter="url(#destinationGlow)"
                        />
                      </motion.g>
                    </AnimatePresence>

                    {/* India Origin Marker (Text Removed) */}
                    <g transform={`translate(${indiaCoords.x} ${indiaCoords.y})`}>
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        <title>India</title>
                        <motion.circle
                          r="2.5"
                          fill="none"
                          stroke="#FF9933"
                          strokeWidth="0.2"
                          initial={{ scale: 0.72, opacity: 0.9 }}
                          animate={{ scale: 2.05, opacity: 0 }}
                          transition={{ duration: 2.25, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.circle
                          r="2.0"
                          fill="none"
                          stroke="#138808"
                          strokeWidth="0.2"
                          initial={{ scale: 0.72, opacity: 0.8 }}
                          animate={{ scale: 1.75, opacity: 0 }}
                          transition={{ duration: 2.25, repeat: Infinity, ease: "easeOut", delay: 0.55 }}
                        />
                        <path
                          d="M0 -2.1 C1.05 -2.1 1.87 -1.27 1.87 -0.22 C1.87 1.2 0 2.57 0 2.57 C0 2.57 -1.87 1.2 -1.87 -0.22 C-1.87 -1.27 -1.05 -2.1 0 -2.1Z"
                          fill="url(#indiaGlow)"
                          stroke="#0B3B7A"
                          strokeWidth="0.2"
                          filter="url(#pinShadow)"
                        />
                        <circle r="0.6" cy="-0.22" fill="#0B3B7A" opacity="0.9" />
                      </motion.g>
                    </g>

                    {/* Country Markers */}
                    {countries.map((country, index) => {
                      const isSelected = selectedCountry.code === country.code
                      const point = getMapCoordinates(country)

                      return (
                        <g
                          key={country.code}
                          transform={`translate(${point.x} ${point.y})`}
                          className="cursor-pointer outline-none"
                          onClick={() => handleCountrySelect(country)}
                          onMouseEnter={() => setHoveredCountry(country)}
                          onMouseLeave={() => setHoveredCountry(null)}
                          onFocus={() => setHoveredCountry(country)}
                          onBlur={() => setHoveredCountry(null)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault()
                              handleCountrySelect(country)
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`Explore study options in ${country.name}`}
                        >
                          <title>{country.name}</title>
                          {isSelected && (
                            <>
                              <motion.circle
                                r="2.8"
                                fill="none"
                                stroke="#1D4ED8"
                                strokeWidth="0.2"
                                initial={{ scale: 0.72, opacity: 0.9 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 1.65, repeat: Infinity, ease: "easeOut" }}
                              />
                              <circle r="3.2" fill="#1D4ED8" fillOpacity="0.1" />
                            </>
                          )}
                          <motion.g
                            initial={{ scale: 0, opacity: 0, y: -1 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.15, y: -0.5 }}
                            whileFocus={{ scale: 1.15, y: -0.5 }}
                            transition={{ delay: 0.24 + index * 0.04, type: "spring", stiffness: 240, damping: 18 }}
                          >
                            <path
                              d="M0 -1.9 C0.98 -1.9 1.73 -1.18 1.73 -0.2 C1.73 1.13 0 2.4 0 2.4 C0 2.4 -1.73 1.13 -1.73 -0.2 C-1.73 -1.18 -0.98 -1.9 0 -1.9Z"
                              fill={isSelected ? "#1D4ED8" : "#ffffff"}
                              stroke={isSelected ? "#ffffff" : "#0B3B7A"}
                              strokeWidth={isSelected ? 0.3 : 0.25}
                              filter="url(#pinShadow)"
                            />
                            <circle cy="-0.2" r="0.5" fill={isSelected ? "#ffffff" : "#0B3B7A"} />
                          </motion.g>
                        </g>
                      )
                    })}
                  </svg>

                  <AnimatePresence>
                    {hoveredCountry && hoveredMapCoordinates && (
                      <motion.div
                        key={hoveredCountry.code}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[calc(100%+14px)] rounded-xl border border-white/70 bg-[#0B3B7A] px-3 py-2 text-xs font-semibold text-white shadow-xl shadow-[#0B3B7A]/20"
                        style={{
                          left: `${hoveredMapCoordinates.x}%`,
                          top: `${(hoveredMapCoordinates.y / 56) * 100}%`,
                        }}
                      >
                        <span className="flex items-center gap-2 whitespace-nowrap">
                          <img src={hoveredCountry.flag} alt="" className="h-3.5 w-5 rounded-sm object-cover" />
                          {hoveredCountry.name}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="lg:hidden mt-6 flex flex-wrap gap-2 justify-center">
                  {countries.map((country) => (
                    <motion.button
                      key={country.code}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCountrySelect(country)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedCountry.code === country.code
                          ? "bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] text-white shadow-lg"
                          : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200"
                      }`}
                    >
                      <img src={country.flag} alt={country.name} className="w-5 h-4 object-cover rounded-sm" />
                      {country.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              key={`adv-${selectedCountry.code}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1D4ED8]/5 to-transparent rounded-bl-full" />
              <h3 className="text-xl font-bold text-[#0B3B7A] mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Student Advantages in {selectedCountry.name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {selectedCountry.advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-gray-700 leading-relaxed">{adv}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[2rem] border border-gray-200 shadow-xl sticky top-24 bg-white"
              >
                
                <div className="relative">
                  <div className="relative h-52 overflow-hidden sm:h-56">
                    <ImageWithFallback
                      src={selectedCountry.image}
                      alt={selectedCountry.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B7A] via-[#0B3B7A]/50 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-8 rounded-lg overflow-hidden shadow-lg border-2 border-white/30">
                        <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{selectedCountry.name}</h3>
                      <p className="text-white/80 text-sm">Study Destination</p>
                    </div>
                  </div>

                  <div className="max-h-[540px] overflow-y-auto p-5 custom-scrollbar sm:p-6 lg:max-h-[620px]">
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-sm font-semibold text-[#0B3B7A] mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Overview
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{selectedCountry.overview}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#0B3B7A] mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Popular Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCountry.courses.map((course) => (
                            <span key={course} className="px-3 py-1.5 bg-[#1D4ED8]/5 rounded-full text-xs font-medium text-[#1D4ED8]">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#0B3B7A] mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Scholarship Opportunities
                        </h4>
                        <div className="space-y-1.5">
                          {selectedCountry.scholarships.slice(0, 4).map((scholarship) => (
                            <div key={scholarship} className="flex items-center gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {scholarship}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Work Rights
                        </h4>
                        <p className="text-sm text-green-700">{selectedCountry.workRights}</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-sm font-semibold text-[#0B3B7A] mb-3 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 11h14M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Intakes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCountry.intakes.map((intake) => (
                            <span key={intake} className="rounded-full bg-[#0B3B7A]/5 px-3 py-1.5 text-xs font-semibold text-[#0B3B7A]">
                              {intake}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <h4 className="text-sm font-semibold text-[#0B3B7A] mb-3 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4m16 0v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0H4m6 0V5h4v2" />
                          </svg>
                          Career Opportunities
                        </h4>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {selectedCountry.careerOpportunities.map((career) => (
                            <div key={career} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#0B3B7A] shadow-sm">
                              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1D4ED8]" />
                              {career}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="text-sm font-semibold text-[#0B3B7A] mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Bold Overseas Visa Support
                        </h4>
                        <p className="text-sm text-gray-600">{selectedCountry.visaSupport}</p>
                      </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-gray-100">
                      <Link href={`/book-consultation?country=${encodeURIComponent(selectedCountry.name)}`}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0B3B7A] to-[#1D4ED8] text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                          <span>Connect With Our Experts</span>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #0B3B7A20; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #0B3B7A40; }
      `}</style>
    </section>
  )
}