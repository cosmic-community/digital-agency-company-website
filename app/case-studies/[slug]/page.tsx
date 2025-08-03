// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.metadata.project_title} - Case Study`,
    description: caseStudy.metadata.project_overview.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <section className="py-8">
        <div className="container">
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {caseStudy.metadata.project_title}
              </h1>
              <p className="text-xl text-primary-600 font-medium">
                {caseStudy.metadata.client_name}
              </p>
            </div>
            
            {caseStudy.metadata.featured_image && (
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                  alt={caseStudy.metadata.project_title}
                  className="w-full h-auto"
                  width={1200}
                  height={600}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <div className="prose" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.project_overview }} />
                </div>

                {/* Challenge */}
                {caseStudy.metadata.challenge && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                    <div className="prose" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }} />
                  </div>
                )}

                {/* Solution */}
                {caseStudy.metadata.solution && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                    <div className="prose" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }} />
                  </div>
                )}

                {/* Results */}
                {caseStudy.metadata.results && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
                    <div className="prose" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }} />
                  </div>
                )}

                {/* Gallery */}
                {caseStudy.metadata.gallery && caseStudy.metadata.gallery.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {caseStudy.metadata.gallery.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                          <img
                            src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                            alt={`${caseStudy.metadata.project_title} gallery image ${index + 1}`}
                            className="w-full h-auto"
                            width={600}
                            height={400}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Services Used */}
                {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
                  <div className="card p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Used</h3>
                    <div className="space-y-3">
                      {caseStudy.metadata.services_used.map((service) => (
                        <div key={service.id} className="flex items-center gap-3">
                          {service.metadata.service_icon && (
                            <img
                              src={`${service.metadata.service_icon.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
                              alt={service.metadata.service_name}
                              className="w-8 h-8 rounded"
                              width={40}
                              height={40}
                            />
                          )}
                          <span className="text-gray-700">{service.metadata.service_name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="card p-6 bg-primary-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Let's discuss how we can help you achieve similar results.
                  </p>
                  <Link href="/contact" className="btn-primary inline-block text-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}