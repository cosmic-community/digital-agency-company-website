import { Service } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card p-8 hover:shadow-lg transition-shadow duration-300 group">
      {/* Service Icon */}
      {service.metadata.service_icon && (
        <div className="mb-6">
          <img
            src={`${service.metadata.service_icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={service.metadata.service_name}
            className="w-16 h-16 rounded-lg object-cover"
            width={80}
            height={80}
          />
        </div>
      )}

      {/* Service Name */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.metadata.service_name}
      </h3>

      {/* Description */}
      <div 
        className="prose prose-sm text-gray-600 mb-6"
        dangerouslySetInnerHTML={{ __html: service.metadata.description }}
      />

      {/* Features */}
      {service.metadata.key_features && service.metadata.key_features.length > 0 && (
        <div className="mb-6">
          <ul className="space-y-2">
            {service.metadata.key_features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pricing & CTA */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        {service.metadata.starting_price && (
          <div>
            <span className="text-sm text-gray-500">Starting at</span>
            <div className="text-lg font-semibold text-primary-600">
              {service.metadata.starting_price}
            </div>
          </div>
        )}
        
        <button className="text-primary-600 hover:text-primary-700 group-hover:translate-x-1 transition-all duration-200">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}