import { cosmic } from '@/lib/cosmic'
import { Service, TeamMember, CaseStudy, Testimonial } from '@/types'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import TeamSection from '@/components/TeamSection'
import CTASection from '@/components/CTASection'

async function getHomeData(): Promise<{
  services: Service[];
  teamMembers: TeamMember[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
}> {
  try {
    const [servicesResponse, teamMembersResponse, caseStudiesResponse, testimonialsResponse] = await Promise.all([
      cosmic.objects
        .find({ type: 'services' })
        .props(['id', 'title', 'slug', 'metadata'])
        .limit(3),
      cosmic.objects
        .find({ type: 'team-members' })
        .props(['id', 'title', 'slug', 'metadata'])
        .limit(3),
      cosmic.objects
        .find({ type: 'case-studies' })
        .props(['id', 'title', 'slug', 'metadata'])
        .depth(1)
        .limit(2),
      cosmic.objects
        .find({ type: 'testimonials' })
        .props(['id', 'title', 'slug', 'metadata'])
        .limit(3)
    ])

    return {
      services: servicesResponse.objects as Service[],
      teamMembers: teamMembersResponse.objects as TeamMember[],
      caseStudies: caseStudiesResponse.objects as CaseStudy[],
      testimonials: testimonialsResponse.objects as Testimonial[],
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