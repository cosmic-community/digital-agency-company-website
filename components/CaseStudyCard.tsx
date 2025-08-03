import Link from 'next/link';
import { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="card group cursor-pointer transition-all duration-300 hover:shadow-xl">
      <Link href={`/case-studies/${caseStudy.slug}`}>
        <div className="space-y-6">
          {/* Featured Image */}
          {caseStudy.metadata.featured_image && (
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src={`${caseStudy.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                alt={caseStudy.metadata.project_title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </div>
          )}

          {/* Content */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                {caseStudy.metadata.project_title}
              </h3>
              <p className="text-primary-600 font-medium">
                {caseStudy.metadata.client_name}
              </p>
            </div>

            {/* Project Overview */}
            <div 
              className="text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ 
                __html: caseStudy.metadata.project_overview?.replace(/<[^>]*>/g, '') || ''
              }}
            />

            {/* Services Used */}
            {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {caseStudy.metadata.services_used.slice(0, 3).map((service) => (
                  <span
                    key={service.id}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                  >
                    {service.metadata.service_name}
                  </span>
                ))}
                {caseStudy.metadata.services_used.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                    +{caseStudy.metadata.services_used.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Read More */}
            <div className="pt-2">
              <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                View Case Study →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}