import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import InstructorSection from '@/components/InstructorSection'
import BenefitsSection from '@/components/BenefitsSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SanctuaryGallery from '@/components/SanctuaryGallery'
import ContactSection from '@/components/ContactSection'
import FaqSection from '@/components/FaqSection'
import OfferingsSection from '@/components/OfferingsSection'

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <HeroSection />

      <InstructorSection />

      <BenefitsSection />

      <OfferingsSection />

      <PricingSection />

      <SanctuaryGallery />

      <TestimonialsSection />

      <FaqSection />

      <ContactSection />

      <Footer />
    </div >
  )
}
