import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic';

export default async function HomePage() {
  // Fetch all data in parallel
  const [services, teamMembers, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies()
  ]);

  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection services={services} />
      <TeamSection teamMembers={teamMembers} />
      <TestimonialsSection testimonials={testimonials} />
      <CaseStudiesSection caseStudies={caseStudies} />
    </div>
  );
}