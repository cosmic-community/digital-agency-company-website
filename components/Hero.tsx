import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const benefits = [
    'Proven Results',
    'Expert Team',
    'Full Service',
    'Client-Focused'
  ];

  return (
    <section className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your 
                <span className="text-primary-600"> Digital</span> Presence
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're a passionate team of designers, developers, and strategists who create 
                digital experiences that drive real business results. Ready to take your 
                online presence to the next level?
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary inline-flex items-center justify-center">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                  alt="Digital agency team working"
                  className="w-full h-auto"
                  width={800}
                  height={600}
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 hidden md:block">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">200+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 hidden md:block">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">300%</div>
                  <div className="text-sm text-gray-600">Avg Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}