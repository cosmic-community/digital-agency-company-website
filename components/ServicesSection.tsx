import { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-width-container section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* View All Link */}
        {services.length > 0 && (
          <div className="text-center">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}