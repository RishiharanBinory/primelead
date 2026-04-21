import React from 'react'
import { HeroSection } from '@/components/education_consultancy/HeroSection'
import { WhatWeDoSection } from '@/components/education_consultancy/Whatdoes'
import { ComparisonSection } from '@/components/education_consultancy/Comparisons'
import { StudentsSection } from '@/components/education_consultancy/StudentsWeSupport'
import { CommitmentsSection } from '@/components/education_consultancy/Commitments'
import { FAQSection } from '@/components/education_consultancy/Faq'
import CtaComponent from '@/components/home/CTA'
import { ContactSection } from '@/components/mainComponents/Contact'
import Section from '@/components/mainComponents/Section' 


const page = () => {
  return (
    <main>
    
        <HeroSection/>
        <WhatWeDoSection/>
        <ComparisonSection/>
        {/* <StudentsSection/> */}
        <CommitmentsSection/>
        <FAQSection/>
        <ContactSection/>
        <CtaComponent/>
    </main>
  )
}

export default page