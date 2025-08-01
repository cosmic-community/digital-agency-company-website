import { cosmic, safeCosmicCall } from '@/lib/cosmic'
import { Service, TeamMember, CaseStudy, Testimonial } from '@/types'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import TeamSection from '@/components/TeamSection'
import CTASection from '@/components/CTASection'

async function getHomeData() {
  try {
    const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
      safeCosmicCall(() => cosmic.objects
        .find({ type: 'services' })
        .props(['id', 'title', 'slug', 'metadata'])
        .limit(3)
      ),
      safeCosmicCall(() => cosmic.objects
        .find({ type: 'team-members' })
        .props(['id', 'title', 'slug', 'metadata'])
        .limit(3)
      ),
      safeCosmicCall(() => cosmic.objects
        .find({ type: 'case-studies' })
        .props(['id', 'title', 'slug', 'metadata'])
        .depth(1)
        .limit(2)
      ),
      safeCosmicCall(() => cosmic.objects
        .find({ type: 'testimonials' })
        .props(['id', 'title', 'slug', 'metadata'])
        .limit(3)
      ),
    ])

    return {
      services: services as Service[],
      teamMembers: teamMembers as TeamMember[],
      caseStudies: caseStudies as CaseStudy[],
      testimonials: testimonials as Testimonial[],
    }
  } catch (error) {
    console.error('Error fetching home data:', error)
    return {
      services: [],
      teamMembers: [],
      caseStudies: [],
      testimonials: [],
    }
  }
}

export default async function HomePage() {
  const { services, teamMembers, caseStudies, testimonials } = await getHomeData()

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection services={services} />
      <AboutSection />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TestimonialsSection testimonials={testimonials} />
      <TeamSection teamMembers={teamMembers} />
      <CTASection />
    </div>
  )
}