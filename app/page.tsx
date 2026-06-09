import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import StudyDestinations from '@/components/study-destinations'
import WhyChooseUs from '@/components/why-choose-us'
import TestimonialSection from '@/components/testimonial-section'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StudyDestinations />
      <WhyChooseUs />
      <TestimonialSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}