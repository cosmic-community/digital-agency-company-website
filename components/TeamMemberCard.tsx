import { TeamMember } from '@/types';
import { Mail, Linkedin } from 'lucide-react';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
      {/* Profile Photo */}
      {member.metadata.profile_photo ? (
        <div className="mb-4">
          <img
            src={`${member.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={member.metadata.full_name}
            className="w-24 h-24 rounded-full object-cover mx-auto"
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-400">
            {member.metadata.full_name.charAt(0)}
          </span>
        </div>
      )}

      {/* Name & Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-1">
        {member.metadata.full_name}
      </h3>
      <p className="text-primary-600 font-medium mb-4">
        {member.metadata.job_title}
      </p>

      {/* Bio */}
      {member.metadata.bio && (
        <div 
          className="prose prose-sm text-gray-600 mb-6 text-left"
          dangerouslySetInnerHTML={{ __html: member.metadata.bio }}
        />
      )}

      {/* Contact Links */}
      <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
        {member.metadata.email && (
          <a
            href={`mailto:${member.metadata.email}`}
            className="text-gray-400 hover:text-primary-600 transition-colors"
            aria-label={`Email ${member.metadata.full_name}`}
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
        {member.metadata.linkedin_url && (
          <a
            href={member.metadata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-600 transition-colors"
            aria-label={`${member.metadata.full_name} LinkedIn`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}