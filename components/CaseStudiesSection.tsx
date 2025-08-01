import { CaseStudy } from '@/types'
import CaseStudyCard from '@/components/CaseStudyCard'
import Link from 'next/link'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-width-container section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we've helped businesses achieve their goals through strategic design and development.
          </p>
        </div>

        {/* Case Studies Grid */}
        {caseStudies.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center">
              <Link href="/case-studies" className="btn-primary">
                View All Case Studies
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No case studies available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}