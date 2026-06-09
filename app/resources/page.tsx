"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// ─── DATA ────────────────────────────────────────────────────────────────────

const featuredArticles = [
  {
    id: "strategic-blueprint-2026",
    title: "The Strategic Blueprint for Global Education in 2026",
    excerpt:
      "A comprehensive analysis for aspiring scholars: from pinpointing ideal international academic environments to navigating complex visa approval protocols.",
    category: "Strategic Insights",
    categoryColor: "from-[#0B3B7A] to-[#2563EB]",
    readTime: "20 min read",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    content: [
      {
        heading: "Why 2026 Is a Pivotal Year",
        body: "The global education landscape is undergoing a fundamental transformation. Post-pandemic visa policies, new bilateral agreements between India and destination countries, and the rising demand for STEM talent have created a uniquely favorable environment for students who plan strategically. Universities in the UK, Canada, Germany, and Australia are expanding intake numbers while competition from other regions intensifies.",
      },
      {
        heading: "Choosing the Right Country",
        body: "No single country suits every student. The USA offers unmatched research infrastructure but comes with strict OPT/CPT work limitations. Canada's CRS-based pathway gives post-study PR advantages. The UK's Graduate Route visa now allows 2 years of open work rights. Germany remains tuition-free at public universities. Your choice must balance cost of living, visa success probability, career sector alignment, and long-term immigration goals.",
      },
      {
        heading: "Documentation Strategy",
        body: "Visa rejection rates drop dramatically when applications are built as a cohesive narrative. Your SOP, financial documents, and educational transcripts must tell a consistent story. Inconsistencies between bank statement dates, sponsorship letters, and course start dates are among the top three reasons for rejection. Build your file as an embassy officer would review it — not as a checklist.",
      },
      {
        heading: "The Bold Overseas Advantage",
        body: "Students who work with strategic consultants rather than form-filling agents achieve significantly higher visa success rates and university acceptance rates. The difference lies in pre-application country and course mapping, which ensures every element of your application is built around your actual profile rather than generic templates.",
      },
    ],
  },
  {
    id: "ace-ielts-exam",
    title: "How to Ace Your IELTS Exam: A Complete Strategy Guide",
    excerpt:
      "Expert tips and strategies to achieve your target band score in the IELTS examination, from listening to writing.",
    category: "Test Preparation",
    categoryColor: "from-emerald-600 to-teal-500",
    readTime: "15 min read",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.63 48.63 0 0112 20.904a48.63 48.63 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    content: [
      {
        heading: "Understanding the IELTS Format",
        body: "IELTS Academic (for university admissions) and IELTS General Training (for immigration) have different Writing Task 1 formats but identical Listening, Reading, and Speaking tests. Most universities require Academic. The exam is 2 hours 45 minutes total. Scoring is on a 0–9 band scale; most universities require Band 6.5–7.5 depending on the program and country.",
      },
      {
        heading: "Listening: The Most Underestimated Module",
        body: "Students lose marks in Listening not because they can't understand English but because they miss instructions. Always read questions before each section begins. Practice recognizing when answers are approaching by listening for signposting language like 'moving on to', 'that covers', 'the next point'. Spelling errors on answers that were correctly heard are one of the most common avoidable mistakes.",
      },
      {
        heading: "Writing Task 2: The Band 7+ Formula",
        body: "A Band 7 essay requires a clear position stated in the introduction, two fully developed body paragraphs each with a topic sentence, explanation, example, and link back to the question. Avoid listing multiple ideas per paragraph — depth beats breadth every time. Use a range of sentence structures and avoid repeating the same vocabulary. Aim for 260–290 words.",
      },
      {
        heading: "Speaking: Build Fluency, Not Vocabulary",
        body: "The Speaking examiner scores fluency, coherence, lexical resource, grammatical range, and pronunciation — in roughly that priority order. A student who speaks smoothly with B2 vocabulary will outscore a student who pauses frequently searching for C1 words. Practice speaking continuously for 2 minutes on any given topic. Record yourself and identify your filler word patterns.",
      },
    ],
  },
  {
    id: "scholarship-masterclass",
    title: "Scholarship Application Masterclass: Win Funding for Your Studies",
    excerpt:
      "Learn how to find, apply for, and win scholarships for your international education with proven strategies.",
    category: "Scholarships",
    categoryColor: "from-amber-500 to-orange-500",
    readTime: "18 min read",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: [
      {
        heading: "Types of Scholarships Available to Indian Students",
        body: "Scholarships broadly fall into four categories: merit-based (GPA, test scores), need-based (financial documentation required), country-specific (UK Chevening, USA Fulbright, Germany DAAD, Australia Endeavour), and university-internal scholarships. University-internal scholarships are often the most accessible and least competitive but the most overlooked. Many universities automatically consider strong applications for merit scholarships without a separate application.",
      },
      {
        heading: "The Scholarship Essay: What Selectors Actually Look For",
        body: "Selection committees read hundreds of essays describing academic achievements. What stands out is specificity of purpose and evidence of impact. Don't write 'I want to study abroad to gain international exposure' — write about the exact problem you want to solve, the specific research group or professor you want to work with, and the concrete way your education will benefit your community or sector. Every sentence should be doing work.",
      },
      {
        heading: "Building a Strong Application Profile",
        body: "Start scholarship preparation 12–18 months before your intended intake. Build your profile deliberately: seek out research assistantships, publish in college journals, take leadership positions in relevant clubs, and document community work with measurable outcomes. Scholarship committees want to fund people who demonstrate they will make the most of the opportunity.",
      },
      {
        heading: "Common Mistakes That Cost Students Scholarships",
        body: "Applying to too many scholarships without tailoring applications is the most common mistake. Three strong, tailored applications will outperform fifteen generic ones. Missing deadlines, submitting recommendation letters that don't specifically address scholarship criteria, and writing essays that describe the destination country rather than your own goals are the other major disqualifiers.",
      },
    ],
  },
]

const resourceCategories = [
  {
    id: "study-abroad",
    title: "Study Abroad Guides",
    color: "from-[#0B3B7A] to-[#2563EB]",
    bgAccent: "bg-blue-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    resources: [
      {
        title: "Complete Guide to Studying in the USA",
        readTime: "15 min read",
        description: "Visa types, top universities, cost breakdown, and application strategy for Indian students targeting US universities.",
        tags: ["USA", "F-1 Visa", "Admissions"],
      },
      {
        title: "UK University Application Timeline",
        readTime: "10 min read",
        description: "Month-by-month UCAS application guide from shortlisting to enrollment for UK undergraduate and postgraduate programs.",
        tags: ["UK", "UCAS", "Timeline"],
      },
      {
        title: "How to Choose the Right Country for You",
        readTime: "12 min read",
        description: "A framework for matching your career goals, budget, and immigration plans to the right study destination.",
        tags: ["Planning", "Comparison", "Strategy"],
      },
      {
        title: "Understanding University Rankings",
        readTime: "8 min read",
        description: "QS, THE, and US News rankings explained — and why the rank alone should never drive your university decision.",
        tags: ["Rankings", "Research", "Decision"],
      },
      {
        title: "Student Life in Canada: What to Expect",
        readTime: "11 min read",
        description: "Housing, part-time work rights, healthcare, and cultural integration tips for Indian students in Canada.",
        tags: ["Canada", "Student Life", "Tips"],
      },
    ],
  },
  {
    id: "visa",
    title: "Visa Guides",
    color: "from-indigo-600 to-violet-600",
    bgAccent: "bg-indigo-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    resources: [
      {
        title: "US F-1 Visa Application Guide",
        readTime: "20 min read",
        description: "Complete DS-160 walkthrough, SEVIS fee, I-20 documents, and embassy interview preparation for the F-1 student visa.",
        tags: ["USA", "F-1", "Embassy"],
      },
      {
        title: "UK Student Visa (CAS) Process",
        readTime: "18 min read",
        description: "CAS number, financial requirements, IHS surcharge, and biometrics — the complete UK Student visa checklist.",
        tags: ["UK", "CAS", "Tier 4"],
      },
      {
        title: "Canada Study Permit Requirements",
        readTime: "15 min read",
        description: "GIC, proof of funds, SOP for IRCC, and the SDS vs non-SDS pathway breakdown for Canadian study permits.",
        tags: ["Canada", "IRCC", "Study Permit"],
      },
      {
        title: "Common Visa Interview Questions",
        readTime: "10 min read",
        description: "The 35 most frequently asked questions at US, UK, and Canadian visa interviews — with model answer strategies.",
        tags: ["Interview", "Preparation", "Tips"],
      },
      {
        title: "Germany Student Visa Guide",
        readTime: "14 min read",
        description: "Blocked account, APS certificate, language requirements, and appointment booking for the German student visa.",
        tags: ["Germany", "Blocked Account", "APS"],
      },
    ],
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    color: "from-emerald-600 to-teal-500",
    bgAccent: "bg-emerald-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    resources: [
      {
        title: "IELTS Writing Task 2 Strategies",
        readTime: "12 min read",
        description: "Band 7+ essay structure, common question types, and the planning framework that consistently improves scores.",
        tags: ["Writing", "Band 7", "Task 2"],
      },
      {
        title: "IELTS Speaking Tips for Band 8+",
        readTime: "10 min read",
        description: "How to develop fluency, use discourse markers, and handle Part 2 cue cards with confidence and natural delivery.",
        tags: ["Speaking", "Fluency", "Band 8"],
      },
      {
        title: "IELTS Reading Time Management",
        readTime: "8 min read",
        description: "Skimming and scanning techniques, question-first reading strategies, and handling True/False/Not Given traps.",
        tags: ["Reading", "Strategy", "Time"],
      },
      {
        title: "Common IELTS Mistakes to Avoid",
        readTime: "7 min read",
        description: "The 12 most common errors that pull scores down in each module — compiled from thousands of student assessments.",
        tags: ["Common Errors", "All Modules", "Tips"],
      },
    ],
  },
  {
    id: "scholarships",
    title: "Scholarship Resources",
    color: "from-amber-500 to-orange-500",
    bgAccent: "bg-amber-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    resources: [
      {
        title: "Top Scholarships for Indian Students 2026",
        readTime: "15 min read",
        description: "Fully funded and partial scholarships available to Indian students — Chevening, DAAD, Fulbright, and 20+ more.",
        tags: ["Indian Students", "Fully Funded", "2026"],
      },
      {
        title: "How to Write a Winning Scholarship Essay",
        readTime: "12 min read",
        description: "The storytelling framework that transforms generic essays into compelling funding applications.",
        tags: ["Essay", "Writing", "Tips"],
      },
      {
        title: "Fully Funded Scholarship Programs 2026",
        readTime: "10 min read",
        description: "A curated list of fully funded programs covering tuition, living expenses, travel, and health insurance.",
        tags: ["Fully Funded", "List", "2026"],
      },
      {
        title: "Financial Aid Application Guide",
        readTime: "14 min read",
        description: "University financial aid portals, CSS Profile, and how to request institutional funding from international offices.",
        tags: ["Financial Aid", "CSS Profile", "University"],
      },
    ],
  },
  {
    id: "country-comparison",
    title: "Country Comparisons",
    color: "from-rose-500 to-pink-600",
    bgAccent: "bg-rose-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    resources: [
      {
        title: "USA vs UK: Which is Right for You?",
        readTime: "14 min read",
        description: "Tuition costs, visa timelines, post-study work rights, and career outcomes compared side-by-side.",
        tags: ["USA", "UK", "Comparison"],
      },
      {
        title: "Canada vs Australia: A Complete Guide",
        readTime: "16 min read",
        description: "PR pathways, cost of living, part-time work rules, and industry demand compared for both destinations.",
        tags: ["Canada", "Australia", "PR"],
      },
      {
        title: "Europe Study Destinations Compared",
        readTime: "12 min read",
        description: "Germany, Netherlands, France, and Ireland compared on tuition fees, language barriers, and career opportunities.",
        tags: ["Europe", "Germany", "Netherlands"],
      },
      {
        title: "Cost of Living Comparison Guide",
        readTime: "10 min read",
        description: "Monthly expense breakdowns for students in 10 major study cities: London, Toronto, Sydney, Berlin, and more.",
        tags: ["Budget", "Cost", "Cities"],
      },
    ],
  },
  {
    id: "success-stories",
    title: "Student Success Stories",
    color: "from-purple-600 to-indigo-600",
    bgAccent: "bg-purple-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    resources: [
      {
        title: "From Hyderabad to Harvard: Priya's Journey",
        readTime: "8 min read",
        description: "How Priya secured a full scholarship to Harvard's Graduate School of Education with a 3.2 undergrad GPA.",
        tags: ["Harvard", "Scholarship", "Real Story"],
      },
      {
        title: "How Rahul Got into Oxford with Bold Overseas",
        readTime: "10 min read",
        description: "The SOP strategy, preparation timeline, and interview coaching that led to Rahul's Oxford acceptance.",
        tags: ["Oxford", "UK", "Admission"],
      },
      {
        title: "My Experience at University of Toronto",
        readTime: "7 min read",
        description: "Co-op programs, Indian student community, housing realities, and part-time income — an honest student account.",
        tags: ["Toronto", "Canada", "Student Life"],
      },
      {
        title: "Landing a Tech Job in Germany After Studies",
        readTime: "9 min read",
        description: "How Arjun transitioned from a German university to a full-time software engineering role in Berlin.",
        tags: ["Germany", "Career", "Tech"],
      },
    ],
  },
]

// ─── ARTICLE MODAL ───────────────────────────────────────────────────────────

function ArticleModal({
  article,
  onClose,
}: {
  article: (typeof featuredArticles)[0]
  onClose: () => void
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-black/50 backdrop-blur-sm overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden mb-8"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner */}
        <div className={`h-2 w-full bg-gradient-to-r ${article.categoryColor}`} />

        <div className="p-8 lg:p-12">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-8">
            <div className="flex-1">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${article.categoryColor} mb-4`}
              >
                {article.category}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3B7A] leading-tight mb-3">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm">{article.readTime} · Bold Overseas Knowledge Hub</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10 pb-8 border-b border-gray-100">
            {article.excerpt}
          </p>

          {/* Content Sections */}
          <div className="space-y-8">
            {(article.content || []).map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-[#0B3B7A] mb-3 flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full bg-gradient-to-br ${article.categoryColor} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}
                  >
                    {i + 1}
                  </span>
                  {section.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-10">{section.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book-consultation"
              className={`px-6 py-3 rounded-full bg-gradient-to-r ${article.categoryColor} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow`}
            >
              Book a Free Consultation
            </Link>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              Back to Resources
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── RESOURCE CARD ───────────────────────────────────────────────────────────

function ResourceItem({
  resource,
  color,
  bgAccent,
}: {
  resource: (typeof resourceCategories)[0]["resources"][0]
  color: string
  bgAccent: string
}) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-200 hover:shadow-md">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-start justify-between gap-3 text-left bg-white hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800 leading-snug">{resource.title}</p>
          <p className="text-xs text-gray-400 mt-1">{resource.readTime}</p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-0.5"
        >
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`px-4 pb-4 pt-2 ${bgAccent}`}>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{resource.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {(resource.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium text-white bg-gradient-to-r ${color}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3B7A] hover:text-[#2563EB] transition-colors"
              >
                Get expert guidance
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeArticle, setActiveArticle] = useState<(typeof featuredArticles)[0] | null>(null)
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const filteredCategories = useMemo(() => {
    let cats =
      selectedCategory === "all"
        ? resourceCategories
        : resourceCategories.filter((c) => c.id === selectedCategory)

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      cats = cats
        .map((cat) => ({
          ...cat,
          resources: cat.resources.filter(
            (r) =>
              r.title.toLowerCase().includes(q) ||
              r.description.toLowerCase().includes(q) ||
              (r.tags || []).some((t) => t.toLowerCase().includes(q))
          ),
        }))
        .filter((cat) => cat.resources.length > 0)
    }

    return cats
  }, [selectedCategory, searchQuery])

  const totalResults = filteredCategories.reduce((sum, c) => sum + c.resources.length, 0)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-0 w-[600px] h-[600px] bg-[#0B3B7A]/4 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          {/* Dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#0B3B7A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B3B7A]/6 text-[#0B3B7A] text-sm font-semibold rounded-full mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Knowledge Hub
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B3B7A] mb-6 leading-tight">
              Study Abroad{" "}
              <span className="text-[#2563EB]">Resources</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Expert guides, visa strategies, scholarship databases, and real student stories — everything you need to plan your global education with confidence.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search guides, visas, scholarships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-[#0B3B7A]/5 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Articles ─────────────────────────────────────────────── */}
      {!searchQuery && (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between mb-10"
            >
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3B7A]">Featured Articles</h2>
                <p className="text-gray-500 text-sm mt-1">Click any article to read the full guide</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="w-full text-left group"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full border border-gray-100"
                    >
                      {/* Icon Banner — no external images */}
                      <div className={`relative h-44 bg-gradient-to-br ${article.categoryColor} flex items-center justify-center overflow-hidden`}>
                        {/* Decorative circles */}
                        <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
                        <div className="absolute -bottom-12 -left-6 w-32 h-32 bg-white/10 rounded-full" />
                        <div className="relative z-10 text-white opacity-90">
                          {article.icon}
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                            {article.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="px-3 py-1 bg-black/20 rounded-full text-xs text-white/80">
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-base font-bold text-[#0B3B7A] mb-2 group-hover:text-[#2563EB] transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                          {article.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:gap-2.5 transition-all">
                          Read Full Article
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </motion.div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── All Resources ─────────────────────────────────────────────────── */}
      <section ref={sectionRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Row */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-[#0B3B7A] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Resources
            </button>
            {resourceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#0B3B7A] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Results count */}
          {searchQuery && (
            <p className="text-sm text-gray-500 mb-8">
              {totalResults} result{totalResults !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
            </p>
          )}

          {filteredCategories.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-gray-500 font-medium">No results found for &ldquo;{searchQuery}&rdquo;</p>
              <button onClick={() => setSearchQuery("")} className="mt-3 text-sm text-[#2563EB] hover:underline">
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCategories.map((cat, catIndex) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: catIndex * 0.08 }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Card top accent */}
                  <div className={`h-1 w-full bg-gradient-to-r ${cat.color}`} />

                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-md`}
                      >
                        {cat.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#0B3B7A]">{cat.title}</h3>
                    </div>

                    <div className="space-y-3">
                      {(cat.resources || []).map((resource) => (
                        <ResourceItem
                          key={resource.title}
                          resource={resource}
                          color={cat.color}
                          bgAccent={cat.bgAccent}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#0B3B7A] via-[#1D4ED8] to-[#2563EB] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-6 uppercase tracking-wide">
              Stay Informed
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Get the Latest Study Abroad Updates
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              New visa policies, scholarship deadlines, and expert guides — delivered to your inbox before the deadlines hit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-xl border-0 outline-none text-gray-800 placeholder-gray-400 text-sm focus:ring-2 focus:ring-white/30 bg-white shadow-lg"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 bg-white text-[#0B3B7A] font-bold rounded-xl shadow-xl hover:shadow-2xl transition-shadow text-sm whitespace-nowrap"
              >
                Subscribe Free
              </motion.button>
            </div>
            <p className="text-white/40 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── Article Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeArticle && (
          <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
        )}
      </AnimatePresence>
    </main>
  )
}