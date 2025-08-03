import { getPage } from '@/lib/cosmic';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Digital Agency',
  description: 'Get in touch with our digital agency team. We\'d love to discuss your project and help you achieve your digital goals.',
};

export default async function ContactPage() {
  const contactPage = await getPage('contact');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {contactPage?.metadata.hero_image && (
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={`${contactPage.metadata.hero_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
                  alt="Contact us"
                  className="w-full h-auto"
                  width={1200}
                  height={400}
                />
              </div>
            )}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {contactPage?.metadata.page_title || 'Contact Us'}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content & Form Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Content */}
              <div>
                {contactPage?.metadata.content ? (
                  <div className="prose" dangerouslySetInnerHTML={{ __html: contactPage.metadata.content }} />
                ) : (
                  <div className="prose">
                    <h2>Get In Touch</h2>
                    <p>Ready to start your next project? We'd love to hear about your goals and discuss how we can help you achieve them.</p>
                    
                    <h3>Let's Discuss Your Project</h3>
                    <p>Fill out the form and we'll get back to you within 24 hours with a personalized proposal.</p>
                    
                    <div className="contact-info">
                      <h3>Contact Information</h3>
                      <p>
                        <strong>Email:</strong> hello@agency.com<br />
                        <strong>Phone:</strong> (555) 123-4567<br />
                        <strong>Address:</strong> 123 Digital Street, Tech City, TC 12345
                      </p>
                    </div>
                    
                    <h3>What to Expect</h3>
                    <ul>
                      <li>Initial consultation call within 24 hours</li>
                      <li>Detailed project proposal within 3 business days</li>
                      <li>Transparent timeline and pricing</li>
                      <li>Dedicated project manager assigned</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Contact Form */}
              <div>
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}