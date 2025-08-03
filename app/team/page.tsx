import { getTeamMembers } from '@/lib/cosmic';
import TeamMemberCard from '@/components/TeamMemberCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team - Digital Agency',
  description: 'Meet our talented team of designers, developers, and digital strategists who bring your projects to life.',
};

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our passionate team of designers, developers, and strategists are dedicated to creating 
              exceptional digital experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container">
          {teamMembers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No team members available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}