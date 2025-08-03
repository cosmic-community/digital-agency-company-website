import { TeamMember } from '@/types';
import TeamMemberCard from './TeamMemberCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const displayMembers = teamMembers.slice(0, 3);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passionate team of designers, developers, and strategists are dedicated to 
            creating exceptional digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        {displayMembers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">No team members available at the moment.</p>
          </div>
        )}

        {/* View All Link */}
        {teamMembers.length > 3 && (
          <div className="text-center">
            <Link 
              href="/team" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Meet the Full Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}