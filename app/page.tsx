import { Metadata } from "next"
import { HeroOptimized } from "@/components/sections/HeroOptimized"
import { ServicesOptimized } from "@/components/sections/ServicesOptimized"
import { ProductShowcase } from "@/components/sections/ProductShowcase"
import { WhyUs } from "@/components/sections/WhyUs"
import { BrandLogos } from "@/components/sections/BrandLogos"
import { ContactOptimized } from "@/components/sections/ContactOptimized"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTABanner } from "@/components/sections/cta-banner"
import { generateOrganizationSchema } from "@/lib/schema"
import { generateReviewSchema } from "@/lib/review-schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Installatie Kerkrade | Erkende Airconditioning Monteur ✓ Gratis Offerte',
  description: 'Airco installateur Kerkrade ➤ Professionele airconditioning installatie, onderhoud & reparatie ✓ F-gassen gecertificeerd ✓ Gratis offerte binnen 24u ✓ Alle topmerken ✓ Bel 046 202 1430',
  alternates: {
    canonical: 'https://aircoinstallatiekerkrade.nl'
  },
  keywords: 'airco installatie kerkrade, airconditioning kerkrade, airco monteur kerkrade, airco installateur kerkrade, klimaatbeheersing kerkrade, warmtepomp kerkrade',
  openGraph: {
    title: 'Airco Installatie Kerkrade | Erkende Monteur | Gratis Offerte',
    description: 'Professionele airco installatie in Kerkrade. F-gassen gecertificeerde monteurs. Gratis offerte binnen 24 uur!',
    type: 'website',
    locale: 'nl_NL',
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  const reviewSchema = generateReviewSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <main>
        <HeroOptimized />
        <ServicesOptimized />
        <ProductShowcase />
        <WhyUs />
        <TestimonialsSection />
        <BrandLogos />
        <ContactOptimized />
        <CTABanner theme="dark" />
      </main>
    </>
  )
}
