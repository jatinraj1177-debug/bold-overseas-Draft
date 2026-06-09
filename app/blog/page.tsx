"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// ─── CATEGORY CONFIG ─────────────────────────────────────────────────────────

const categoryConfig: Record<string, { gradient: string; bg: string; icon: React.ReactNode }> = {
  "Study Abroad": {
    gradient: "from-[#0B3B7A] to-[#2563EB]",
    bg: "bg-blue-50",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  "Visa Guide": {
    gradient: "from-indigo-600 to-violet-600",
    bg: "bg-indigo-50",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  "Test Preparation": {
    gradient: "from-emerald-600 to-teal-500",
    bg: "bg-emerald-50",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.63 48.63 0 0112 20.904a48.63 48.63 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  Scholarships: {
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  "Work Rights": {
    gradient: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
}

// ─── BLOG DATA ────────────────────────────────────────────────────────────────

const blogPosts = [
  {
    slug: "complete-guide-studying-usa-2024",
    title: "Complete Guide to Studying in the USA in 2026",
    excerpt: "Everything you need to know about pursuing higher education in the United States, from university selection to visa application.",
    category: "Study Abroad",
    author: "Bold Overseas Team",
    date: "January 10, 2026",
    readTime: "15 min read",
    featured: true,
    content: [
      {
        heading: "Why the USA Remains the #1 Study Destination",
        body: "The United States hosts over one million international students annually, offering unmatched research infrastructure, diverse program options, and the strongest global brand for academic credentials. For Indian students specifically, US degrees in STEM, business, and healthcare consistently open doors to high-paying careers both in the US and back home.",
      },
      {
        heading: "Choosing the Right University",
        body: "US university selection should be driven by program ranking, not overall university ranking. A state university with a top-10 Computer Science department will serve a CS student better than an Ivy League school where CS is average. Research your specific department, faculty publications, industry partnerships, and placement statistics before applying.",
      },
      {
        heading: "The F-1 Visa Process",
        body: "After receiving your I-20 from the university, pay the SEVIS fee, complete the DS-160 form, and schedule your visa interview. The interview typically lasts 2-3 minutes. Officers want to confirm your genuine student intent, financial sufficiency, and intent to return home after studies. Strong ties to India — family, property, job offer — significantly improve approval odds.",
      },
      {
        heading: "Financial Planning",
        body: "Annual costs at US universities range from $35,000 to $80,000 including tuition and living expenses. On-campus work authorization (20 hours/week during semester, full-time during breaks) helps offset costs. CPT and OPT programs allow industry work experience during and after your degree. Plan your funding sources before applying — banks and embassies both scrutinize financial documents carefully.",
      },
    ],
  },
  {
    slug: "uk-student-visa-tier-4-guide",
    title: "UK Student Visa Application Guide 2026",
    excerpt: "Step-by-step guide to successfully applying for a UK Student Visa, including document requirements and interview tips.",
    category: "Visa Guide",
    author: "Immigration Expert",
    date: "January 5, 2026",
    readTime: "12 min read",
    featured: true,
    content: [
      {
        heading: "Getting Your CAS Number",
        body: "Your Confirmation of Acceptance for Studies (CAS) number is issued by your UK university after you accept an unconditional offer. This unique reference number is mandatory for your visa application. Universities typically issue CAS numbers 6 weeks before the course start date. Do not apply for your visa until you have received it.",
      },
      {
        heading: "Financial Requirements",
        body: "You must show £1,334 per month for London courses or £1,023 per month for courses outside London, held for 28 consecutive days before applying. The funds must be in your name or your parents' names. Savings accounts, fixed deposits, and current accounts all qualify — but the 28-day rule is strictly enforced. A single day's gap resets the count.",
      },
      {
        heading: "Healthcare Surcharge (IHS)",
        body: "All UK student visa applicants must pay the Immigration Health Surcharge before submitting their application. The current rate is £776 per year of study. This gives you full access to NHS services during your stay. Pay this online during your application — the IHS reference number is required to complete the form.",
      },
      {
        heading: "The Graduate Route Visa",
        body: "After completing your UK degree, the Graduate Route visa allows 2 years of open work rights (3 years for PhD graduates). You can work in any sector, at any skill level, for any employer. This visa cannot be extended but you can switch to a Skilled Worker visa if you secure a qualifying job offer. This is one of the strongest post-study work rights globally.",
      },
    ],
  },
  {
    slug: "ielts-preparation-tips-band-8",
    title: "IELTS Preparation Tips for Band 8+",
    excerpt: "Expert strategies and practice techniques to help you achieve your target IELTS band score.",
    category: "Test Preparation",
    author: "IELTS Trainer",
    date: "December 28, 2025",
    readTime: "10 min read",
    featured: false,
    content: [
      {
        heading: "Understanding the Band 8 Standard",
        body: "Band 8 means 'very good user' — you handle complex language well with only occasional unsystematic inaccuracies. For Writing and Speaking, this requires sophisticated vocabulary, complex grammatical structures used accurately, and fully developed responses. Most test-takers underestimate how high this bar is. Start your preparation at least 3 months before your test date.",
      },
      {
        heading: "Writing Task 2 at Band 8",
        body: "Band 8 essays demonstrate a clear, well-developed position with fully extended arguments and relevant examples. Every body paragraph must have a topic sentence, explanation, example, and a link back to the question. Vocabulary range matters enormously — use precise academic words rather than simple synonyms. Aim for 270-290 words; under 250 will hurt your score.",
      },
    ],
  },
  {
    slug: "top-scholarships-indian-students-2024",
    title: "Top Scholarships for Indian Students in 2026",
    excerpt: "Comprehensive list of fully-funded and partial scholarships available for Indian students studying abroad.",
    category: "Scholarships",
    author: "Financial Aid Advisor",
    date: "December 20, 2025",
    readTime: "18 min read",
    featured: false,
    content: [
      {
        heading: "UK Chevening Scholarship",
        body: "Chevening is the UK government's flagship international scholarship programme. It covers full tuition, living expenses, return flights, and a thesis grant. Applications open in August and close in November for courses starting the following September. You must have 2 years of full-time work experience to be eligible. The selection is highly competitive — leadership potential and impact are weighted heavily over academic scores alone.",
      },
      {
        heading: "DAAD Scholarships for Germany",
        body: "The German Academic Exchange Service (DAAD) offers multiple scholarship programs for Indian students. The most accessible are the Research Grants for Doctoral Candidates and the Development-Related Postgraduate Courses program. Germany's public university tuition-free status combined with a DAAD living stipend makes this one of the most financially attractive options globally.",
      },
    ],
  },
  {
    slug: "canada-pgwp-guide-2024",
    title: "Canada Post-Graduation Work Permit Guide",
    excerpt: "Understanding the PGWP program and how to maximize your chances of working in Canada after graduation.",
    category: "Work Rights",
    author: "Immigration Specialist",
    date: "December 12, 2025",
    readTime: "14 min read",
    featured: false,
    content: [
      {
        heading: "What Is the PGWP?",
        body: "The Post-Graduation Work Permit allows international graduates from eligible Canadian Designated Learning Institutions (DLIs) to work in Canada for up to 3 years after graduation. The permit length matches your program length — a 2-year program gives a 2-year PGWP. It is an open work permit, meaning you can work for any employer in any location across Canada.",
      },
      {
        heading: "PGWP to Permanent Residence",
        body: "The PGWP is designed as a pathway to Canadian permanent residence through Express Entry. Canadian work experience earned on a PGWP earns CRS points and makes you eligible for the Canadian Experience Class (CEC). Students who choose in-demand NOC TEER 0, 1, 2, or 3 occupations maximize their PR chances significantly.",
      },
    ],
  },
  {
    slug: "germany-tuition-free-universities",
    title: "Tuition-Free Universities in Germany: Complete Guide",
    excerpt: "Complete guide to studying for free in Germany, including admission requirements and living costs.",
    category: "Study Abroad",
    author: "Germany Education Expert",
    date: "December 5, 2025",
    readTime: "16 min read",
    featured: false,
    content: [
      {
        heading: "How Germany's Tuition-Free System Works",
        body: "All 16 German states have abolished tuition fees at public universities for both domestic and international students. You only pay a semester contribution (Semesterbeitrag) of €150–€350 which covers administrative costs and often includes a public transport pass. This makes Germany one of the most affordable study destinations for high-quality education globally.",
      },
      {
        heading: "The APS Certificate for Indian Students",
        body: "Indian students applying to German universities must obtain an APS (Academic Evaluation Centre) certificate verifying their educational qualifications. The process involves submitting academic documents to the APS India office in New Delhi or Chennai and attending an interview. Start this process at least 3 months before your application deadline as processing times vary.",
      },
    ],
  },
]

const categories = ["All", "Study Abroad", "Visa Guide", "Test Preparation", "Scholarships", "Work Rights"]

// ─── GRADIENT BANNER ─────────────────────────────────────────────────────────

function GradientBanner({ category, size = "large" }: { category: string; size?: "large" | "small" }) {
  const config = categoryConfig[category] || categoryConfig["Study Abroad"]
  return (
    <div
      className={`relative bg-gradient-to-br ${config.gradient} flex items-center justify-center overflow-hidden ${
        size === "large" ? "h-56" : "h-36"
      }`}
    >
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
      <div className="absolute -bottom-8 -left-4 w-24 h-24 bg-white/10 rounded-full" />
      <div className="relative z-10 text-white opacity-90">{config.icon}</div>
    </div>
  )
}

// ─── ARTICLE MODAL ────────────────────────────────────────────────────────────

function ArticleModal({
  post,
  onClose,
}: {
  post: (typeof blogPosts)[0]
  onClose: () => void
}) {
  const config = categoryConfig[post.category] || categoryConfig["Study Abroad"]
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
        <div className={`h-2 w-full bg-gradient-to-r ${config.gradient}`} />

        <div className="p-8 lg:p-12">
          <div className="flex items-start justify-between gap-4 mb-8">
            <div className="flex-1">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${config.gradient} mb-4`}>
                {post.category}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3B7A] leading-tight mb-3">
                {post.title}
              </h2>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
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

          <p className="text-gray-600 text-lg leading-relaxed mb-10 pb-8 border-b border-gray-100">
            {post.excerpt}
          </p>

          <div className="space-y-8">
            {(post.content || []).map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-[#0B3B7A] mb-3 flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full bg-gradient-to-br ${config.gradient} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                    {i + 1}
                  </span>
                  {section.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-10">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book-consultation"
              className={`px-6 py-3 rounded-full bg-gradient-to-r ${config.gradient} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow`}
            >
              Book a Free Consultation
            </Link>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activePost, setActivePost] = useState<(typeof blogPosts)[0] | null>(null)

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory)

  const featuredPosts = filteredPosts.filter((p) => p.featured)
  const regularPosts = filteredPosts.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1D4ED8]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0B3B7A]/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#0B3B7A]/5 text-[#0B3B7A] text-sm font-semibold rounded-full mb-6">
              Bold Overseas Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B3B7A] mb-6 leading-tight">
              Study Abroad <span className="text-[#2563EB]">Insights</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Expert articles, guides, and tips to help you navigate your international education journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0B3B7A] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0B3B7A] mb-10">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <button onClick={() => setActivePost(post)} className="w-full text-left group">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full"
                    >
                      <GradientBanner category={post.category} size="large" />
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryConfig[post.category]?.gradient}`}>
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0B3B7A] mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">{post.author} · {post.date}</span>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] group-hover:gap-2 transition-all">
                            Read Article
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0B3B7A] mb-10">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <button onClick={() => setActivePost(post)} className="w-full text-left group">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full"
                    >
                      <GradientBanner category={post.category} size="small" />
                      <div className="p-5">
                        <span className={`text-xs font-semibold bg-gradient-to-r ${categoryConfig[post.category]?.gradient} bg-clip-text text-transparent mb-2 block`}>
                          {post.category}
                        </span>
                        <h3 className="text-sm font-bold text-[#0B3B7A] mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-gray-400 font-medium">No articles in this category yet.</p>
          <button onClick={() => setSelectedCategory("All")} className="mt-3 text-sm text-[#2563EB] hover:underline">
            View all articles
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0B3B7A] to-[#2563EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Personalised Guidance?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our experts can answer your specific questions about visas, universities, and scholarships.
          </p>
          <Link
            href="/book-consultation"
            className="inline-block px-8 py-4 bg-white text-[#0B3B7A] font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
          >
            Book A Free Consultation
          </Link>
        </div>
      </section>

      <Footer />

      {/* Article Modal */}
      <AnimatePresence>
        {activePost && (
          <ArticleModal post={activePost} onClose={() => setActivePost(null)} />
        )}
      </AnimatePresence>
    </main>
  )
}