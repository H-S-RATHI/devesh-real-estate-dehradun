import { Hero } from "@/components/hero"
import { MultiLocationFeatured } from "@/components/multi-location-featured"
import { WhyChooseUs } from "@/components/why-choose-us"
import { LocationHighlights } from "@/components/location-highlights"
import { Testimonials } from "@/components/testimonials"
import { UrgencyBanner } from "@/components/urgency-banner"
import { ContactCTA } from "@/components/contact-cta"
import { ProfessionalBadge } from "@/components/professional-badge"
import { ProfessionalStats } from "@/components/professional-stats"

export default function Home() {
  return (
    <main className="min-h-screen">
      <UrgencyBanner />
      <Hero />
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <ProfessionalBadge />
        </div>
      </div>
      <MultiLocationFeatured />
      <ProfessionalStats />
      <WhyChooseUs />
      <LocationHighlights />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
