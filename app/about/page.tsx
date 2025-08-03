import { getPage } from '@/lib/cosmic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Digital Agency',
  description: 'Learn about our digital agency team, mission, and proven track record of delivering results for clients across various industries.',
};

export default async function AboutPage() {
  const aboutPage = await getPage('about-us');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {aboutPage?.metadata.hero_image && (
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={`${aboutPage.metadata.hero_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
                  alt="About us"
                  className="w-full h-auto"
                  width={1200}
                  height={400}
                />
              </div>
            )}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {aboutPage?.metadata.page_title || 'About Us'}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {aboutPage?.metadata.content ? (
              <div className="prose" dangerouslySetInnerHTML={{ __html: aboutPage.metadata.content }} />
            ) : (
              <div className="prose">
                <h1>About Our Digital Agency</h1>
                <p>We're a passionate team of designers, developers, and strategists who believe in the power of great digital experiences. Founded in 2018, we've helped over 200 companies transform their online presence and achieve measurable growth.</p>
                
                <h2>Our Mission</h2>
                <p>To create digital solutions that not only look beautiful but drive real business results. We combine creativity with data-driven insights to deliver experiences that your users will love and your business will benefit from.</p>
                
                <h2>Why Choose Us?</h2>
                <ul>
                  <li><strong>Proven Results:</strong> Over 300% average increase in client metrics</li>
                  <li><strong>Expert Team:</strong> 15+ years combined experience</li>
                  <li><strong>Full Service:</strong> Design, development, and marketing under one roof</li>
                  <li><strong>Client-Focused:</strong> Your success is our success</li>
                </ul>
                
                <p>Ready to take your digital presence to the next level? Let's talk about your project.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}