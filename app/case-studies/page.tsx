import { getCaseStudies } from '@/lib/cosmic';
import CaseStudyCard from '@/components/CaseStudyCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - Digital Agency',
  description: 'Explore our successful client projects and the results we achieved through strategic digital solutions.',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how we've helped businesses transform their digital presence and achieve 
              measurable results through our strategic approach and expert execution.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container">
          {caseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No case studies available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}