import { Service } from '@/types';
import ServiceCard from './ServiceCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const displayServices = services.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        {displayServices.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">No services available at the moment.</p>
          </div>
        )}

        {/* View All Link */}
        {services.length > 3 && (
          <div className="text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}