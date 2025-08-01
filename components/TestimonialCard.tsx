import { TestimonialCardProps } from '@/types'

export default function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
  const clientPhoto = testimonial.metadata?.client_photo
  const companyLogo = testimonial.metadata?.company_logo
  const rating = testimonial.metadata?.rating

  // Convert rating key to number for stars display
  const ratingNumber = rating?.key ? parseInt(rating.key) : 5

  return (
    <div className={`card p-6 h-full flex flex-col ${className}`}>
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < ratingNumber ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Quote */}
      {testimonial.metadata?.testimonial_quote && (
        <blockquote className="text-gray-700 mb-6 flex-grow italic">
          "{testimonial.metadata.testimonial_quote}"
        </blockquote>
      )}

      {/* Client Info */}
      <div className="flex items-center">
        {/* Client Photo */}
        {clientPhoto && (
          <img
            src={`${clientPhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.client_name || 'Client'}
            width="48"
            height="48"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        
        <div className="flex-grow">
          {/* Client Name & Title */}
          <div className="font-semibold text-gray-900">
            {testimonial.metadata?.client_name}
          </div>
          {testimonial.metadata?.client_title && (
            <div className="text-sm text-gray-600">
              {testimonial.metadata.client_title}
            </div>
          )}
          {testimonial.metadata?.company_name && (
            <div className="text-sm font-medium text-primary-600">
              {testimonial.metadata.company_name}
            </div>
          )}
        </div>

        {/* Company Logo */}
        {companyLogo && (
          <img
            src={`${companyLogo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.company_name || 'Company'}
            width="32"
            height="32"
            className="w-8 h-8 object-contain opacity-60"
          />
        )}
      </div>

      {/* Project Type */}
      {testimonial.metadata?.project_type && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            Project: {testimonial.metadata.project_type}
          </span>
        </div>
      )}
    </div>
  )
}