import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'
import Link from 'next/link'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-width-container section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the talented professionals who bring your digital vision to life.
          </p>
        </div>

        {/* Team Grid */}
        {teamMembers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center">
              <Link href="/team" className="btn-primary">
                Meet the Full Team
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No team members available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}