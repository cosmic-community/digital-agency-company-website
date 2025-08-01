export default function AboutSection() {
  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '100+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-width-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Turn Ideas Into
              <span className="text-gradient block">Digital Reality</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Our passionate team of designers, developers, and marketers work together to create exceptional digital experiences that drive real business results.
            </p>
            
            <p className="text-gray-600 mb-8">
              From startups to enterprise clients, we've helped businesses of all sizes establish their digital presence, increase their online visibility, and achieve their growth goals through strategic design and development.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Strategic Approach</h4>
                  <p className="text-gray-600">We dive deep into your business goals to create tailored solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Technologies</h4>
                  <p className="text-gray-600">We use cutting-edge tools and frameworks for optimal performance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                  <p className="text-gray-600">We provide continuous support and maintenance for all projects.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}