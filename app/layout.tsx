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
  title: 'Bold Overseas | Premier Study Abroad Consultancy',
  description: 'Transform your study abroad dreams into reality with Bold Overseas. Expert visa guidance, university partnerships, and personalized counseling for global education.',
  keywords: 'study abroad, overseas education, visa assistance, university admissions, IELTS, TOEFL, UK, USA, Canada, Australia, Germany',
  authors: [{ name: 'Bold Overseas' }],
  openGraph: {
    title: 'Bold Overseas | Premier Study Abroad Consultancy',
    description: 'Transform your study abroad dreams into reality with expert guidance.',
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
