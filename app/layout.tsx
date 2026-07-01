import type { Metadata, Viewport } from 'next'
import { Inter, Caveat, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingButtons from '@/components/floating-buttons'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bold Overseas | Best Overseas Education & Loan Consultants in Hyderabad',
  description: 'Top study abroad consultants in Hyderabad and Madhapur. Get expert guidance for studying in USA, UK, Canada, Australia, and secure education loans without collateral.',
  keywords: [
    "Overseas Education Consultants Hyderabad", "Overseas Education Consultants Madhapur", 
    "Best Overseas Education Consultants Hyderabad", "Study Abroad Consultants Hyderabad", 
    "Study Abroad Consultants Madhapur", "Education Consultants Near Me", 
    "Overseas Consultancy Near Hitech City", "Overseas Education Services Hyderabad", 
    "Abroad Education Consultancy Telangana", "International Education Consultants Hyderabad", 
    "Study Abroad Consultants", "Overseas Education Services", "Study in USA", "Study in UK", 
    "Study in Canada", "Study in Australia", "Study in Germany", "Study in Ireland", 
    "Study in New Zealand", "Overseas Education Guidance", "Admission Guidance for Abroad Studies", 
    "International University Admissions", "Higher Education Abroad", "Overseas Admissions 2026", 
    "Study Abroad Counselling", "Abroad University Admissions", "Best Countries to Study Abroad", 
    "Overseas Student Consultancy", "Study Abroad Admission Assistance", "International Student Services", 
    "Education Loan Consultants Hyderabad", "Abroad Education Loan", "Study Abroad Education Loan", 
    "Education Loan Without Collateral", "Education Loan Without CIBIL", "Student Loan for Overseas Education", 
    "Education Loan for USA Studies", "Education Loan for Canada Studies", "Education Loan for UK Studies", 
    "Fast Education Loan Approval", "Overseas Education Loan Hyderabad", "Student Loan Consultants Hyderabad", 
    "Study Abroad Funding Assistance", "Education Loan Processing Services", "Low Interest Education Loan", 
    "Non Collateral Education Loan", "Education Loan Support Hyderabad", 
    "Education Loan for International Students", "Abroad Studies Financial Assistance", 
    "Education Loan Experts Hyderabad", "Overseas Education Consultants in Madhapur", 
    "Study Abroad Consultants in Madhapur Hyderabad", "Education Loan Consultants in Madhapur", 
    "Overseas Education Near Hitech City", "Study Abroad Consultancy Near Gachibowli", 
    "Education Loan Services Hyderabad", "Best Overseas Consultants Telangana", 
    "Abroad Education Consultants Andhra Pradesh", "Study Abroad Experts Hyderabad", 
    "Education Loan Assistance Near Me"
  ],
  authors: [{ name: 'Bold Overseas' }],
  openGraph: {
    title: 'Bold Overseas | Best Overseas Education & Loan Consultants in Hyderabad',
    description: 'Top study abroad consultants in Hyderabad and Madhapur. Get expert guidance for studying abroad and secure education loans without collateral.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B3B7A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} ${playfair.variable} bg-white`}>
      <body className="font-sans antialiased bg-white text-[#0B3B7A]">
        {children}
        <FloatingButtons />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}