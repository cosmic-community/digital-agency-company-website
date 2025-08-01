import { CaseStudyCardProps } from '@/types'
import Link from 'next/link'

export default function CaseStudyCard({ caseStudy, className = '' }: CaseStudyCardProps) {
  const featuredImage = caseStudy.metadata?.featured_image
  const servicesUsed = caseStudy.metadata?.services_used
  
  return (
    <div className={`card overflow-hidden h-full ${className}`}>
      {/* Featured Image */}
      {featuredImage && (
        <div className="relative h-64">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={caseStudy.metadata?.project_title || caseStudy.title}
            width="400"
            height="200"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Client Name Overlay */}
          {caseStudy.metadata?.client_name && (
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-90">Client</p>
              <p className="font-semibold">{caseStudy.metadata.client_name}</p>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        {/* Services Used Tags */}
        {servicesUsed && servicesUsed.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {servicesUsed.slice(0, 2).map((service) => (
              <span
                key={service.id}
                className="inline-block px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full"
              >
                {service.metadata?.service_name || service.title}
              </span>
            ))}
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {caseStudy.metadata?.project_title || caseStudy.title}
        </h3>

        {/* Project Overview */}
        {caseStudy.metadata?.project_overview && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {caseStudy.metadata.project_overview}
          </p>
        )}

        {/* Project Duration */}
        {caseStudy.metadata?.project_duration && (
          <p className="text-sm text-gray-500 mb-4">
            Duration: {caseStudy.metadata.project_duration}
          </p>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between">
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
          >
            View Case Study →
          </Link>
          
          {caseStudy.metadata?.live_url && (
            <a
              href={caseStudy.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
            >
              Live Site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}