import React from 'react'
import FaqHeroSection from '@/components/faq/FaqHero'
import FaqSection from '@/components/faq/FaqSection'
import Section from '@/components/mainComponents/Section'
import CtaComponent from '@/components/home/CTA'
const page = () => {
  return (
    <main>
      <FaqHeroSection/>
      <FaqSection/>
            <Section>
              <CtaComponent />
            </Section>
    </main>
  )
}

export default page