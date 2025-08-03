import { getServices } from '@/lib/cosmic';
import ServiceCard from '@/components/ServiceCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Digital Agency',
  description: 'Explore our comprehensive digital services including web development, UI/UX design, and digital marketing solutions.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape. 
              From custom web development to strategic marketing campaigns, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}