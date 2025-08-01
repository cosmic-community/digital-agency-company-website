import { ServiceCardProps } from '@/types'
import Link from 'next/link'

export default function ServiceCard({ service, className = '' }: ServiceCardProps) {
  const featuredImage = service.metadata?.featured_image
  const serviceCategory = service.metadata?.service_category
  const keyFeatures = service.metadata?.key_features

  return (
    <div className={`card p-6 h-full flex flex-col ${className}`}>
      {/* Service Image */}
      {featuredImage && (
        <div className="mb-6">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={service.metadata?.service_name || service.title}
            width="300"
            height="150"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Service Category */}
      {serviceCategory && (
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full">
            {serviceCategory.value}
          </span>
        </div>
      )}

      {/* Service Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.metadata?.service_name || service.title}
      </h3>

      {/* Short Description */}
      {service.metadata?.short_description && (
        <p className="text-gray-600 mb-4 flex-grow">
          {service.metadata.short_description}
        </p>
      )}

      {/* Key Features */}
      {keyFeatures && keyFeatures.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pricing and CTA */}
      <div className="flex items-center justify-between mt-auto">
        {service.metadata?.starting_price && (
          <div className="text-sm text-gray-500">
            Starting at <span className="font-semibold text-gray-900">{service.metadata.starting_price}</span>
          </div>
        )}
        <Link
          href={`/services/${service.slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
        >
          Learn More →
        </Link>
      </div>
    </div>
  )
}